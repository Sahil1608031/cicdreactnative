import React, { JSX, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { testAllRules } from '../utilites/dummy';

const Home = (): JSX.Element => {
  useEffect(() => {
    testAllRules(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
