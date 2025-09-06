import { StyleSheet, View } from 'react-native';
import React, { JSX } from 'react';
import Home from './src/Home/Home';
import Setting from './src/setting/Setting';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Home />
      <Setting />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
