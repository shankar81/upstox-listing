import {useEffect, useState} from 'react';
import {UserHoldingStock, UserStat} from '../models/stock';
import constants from './constants';

export function useFetchUserHoldingAndStat() {
  const [loading, setLoading] = useState(false);
  const [holdings, setHoldings] = useState<UserHoldingStock[]>([]);
  const [userStat, setUserStat] = useState<UserStat>({
    totalCurrent: 0,
    totalInvestment: 0,
    todaysPNL: 0,
    totalPNL: 0,
  });

  useEffect(() => {
    setLoading(true);
    fetch(`${constants.api.baseUrl}/bde7230e-bc91-43bc-901d-c79d008bddc8`)
      .then(res => res.json())
      .then(res => {
        const _tempHoldings: UserHoldingStock[] = [];
        let totalCurrent = 0;
        let totalInvestment = 0;
        let totalPNL = 0;
        let todaysPNL = 0;

        (res.userHolding as UserHoldingStock[]).map(stock => {
          // Calculate all the values upfront
          const currentValue = stock.ltp * stock.quantity;
          const investmentValue = stock.avgPrice * stock.quantity;

          totalCurrent += currentValue;
          totalInvestment += investmentValue;
          todaysPNL = (stock.close - stock.ltp) * stock.quantity;

          _tempHoldings.push({...stock, currentValue, investmentValue});
        });

        totalPNL = totalCurrent - totalInvestment;

        setUserStat({totalCurrent, totalInvestment, todaysPNL, totalPNL});
        setHoldings(_tempHoldings);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {holdings, userStat, loading};
}
