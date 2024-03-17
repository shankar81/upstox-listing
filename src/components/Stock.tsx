import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {UserHoldingStock} from '../models/stock';
import {colors} from '../theme';

type StockProps = {data: UserHoldingStock};

export default function Stock({
  data: {ltp, quantity, symbol, currentValue, investmentValue},
}: StockProps) {
  return (
    <View style={styles.container}>
      <View style={[[styles.row, styles.marginBottom]]}>
        <Text style={[styles.text, styles.bold]}>{symbol}</Text>
        <Text style={styles.text}>
          LTP: <Text style={styles.bold}>₹ {ltp}</Text>
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>{quantity}</Text>
        <Text style={styles.text}>
          P/L:{' '}
          <Text style={styles.bold}>
            ₹ {(currentValue - investmentValue).toFixed(2)}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginBottom: {marginBottom: 10},
  text: {color: colors.black},
  bold: {fontWeight: 'bold'},
});
