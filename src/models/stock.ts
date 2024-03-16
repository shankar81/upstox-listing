export type UserHoldingStock = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
  currentValue: number;
  investmentValue: number;
};

export type UserStat = {
  totalCurrent: number;
  totalInvestment: number;
  todaysPNL: number;
  totalPNL: number;
};
