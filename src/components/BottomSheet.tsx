import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {UserStat} from '../models/stock';

type BottomSheetProps = {data: UserStat};

export default function BottomSheet({
  data: {totalCurrent, totalInvestment, todaysPNL, totalPNL},
}: BottomSheetProps) {
  const [isExpanded, setExpanded] = useState(false);

  function onToggleDetailedView() {
    setExpanded(prevValue => !prevValue);
  }

  const detailedViewStyles = useMemo(() => {
    const mergedStyles = [styles.detailedView];

    if (!isExpanded) {
      mergedStyles.push(styles.hide);
    }

    return mergedStyles;
  }, [isExpanded]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={onToggleDetailedView}>
          <Icon name={isExpanded ? 'chevron-down' : 'chevron-up'} size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={detailedViewStyles}>
          <View style={styles.row}>
            <Text style={[styles.text, styles.bold]}>Current Value:</Text>
            <Text style={styles.text}>₹{totalCurrent.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.text, styles.bold]}>Total Investment:</Text>
            <Text style={styles.text}>₹{totalInvestment.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.text, styles.bold]}>
              Today's Profit & Loss:
            </Text>
            <Text style={styles.text}>₹{todaysPNL.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.bold]}>Profit & Loss:</Text>
          <Text style={styles.text}>₹{totalPNL.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'white',
  },
  iconContainer: {alignItems: 'center'},
  content: {padding: 10, paddingBottom: 20},
  detailedView: {marginBottom: 20},
  hide: {marginBottom: 0, height: 0},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  touchable: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 100,
    padding: 3,
  },
  text: {color: 'black', fontSize: 16, marginBottom: 10},
  bold: {fontWeight: 'bold'},
});
