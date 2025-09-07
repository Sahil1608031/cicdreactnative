import React, { JSX, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//home compoent
const Home = (): JSX.Element => {
  const [data, setData] = useState<string>('');

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
