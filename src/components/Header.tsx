import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type HeaderProps = {title: string};

export default function Header({title}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'purple', padding: 12},
  title: {color: 'white', fontWeight: 'bold', fontSize: 16},
});
