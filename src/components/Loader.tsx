import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../theme';

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.black} animating={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors['black.200'],
  },
});
