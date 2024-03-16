import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import Listing from './src/scenes/Listing';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Upstox Holding" />
      <Listing />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, position: 'relative', backgroundColor: '#CCC'},
});
