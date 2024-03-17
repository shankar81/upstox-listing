import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../theme';

type HeaderProps = {title: string};

export default function Header({title}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: colors.primary, padding: 12},
  title: {color: colors.white, fontWeight: 'bold', fontSize: 16},
});
