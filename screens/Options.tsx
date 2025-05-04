import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Options({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tùy chọn (Options)</Text>
      <Button title="Đóng" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
