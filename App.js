import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';

import { theme } from './src/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
