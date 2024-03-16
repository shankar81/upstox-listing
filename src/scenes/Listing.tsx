import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import BottomSheet from '../components/BottomSheet';
import Loader from '../components/Loader';
import Stock from '../components/Stock';
import {UserHoldingStock} from '../models/stock';
import {useFetchUserHoldingAndStat} from '../utils/hooks';

export default function Listing() {
  const {holdings, userStat, loading} = useFetchUserHoldingAndStat();

  function _renderItem({item}: ListRenderItemInfo<UserHoldingStock>) {
    return <Stock data={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={holdings}
        keyExtractor={(_, index) => index.toString()}
        renderItem={_renderItem}
      />

      <BottomSheet data={userStat} />
      {loading && <Loader />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, position: 'relative'},
});
