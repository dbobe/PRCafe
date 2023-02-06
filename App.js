import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';

import { theme } from './src/theme';
import Landing from './src/screens/Landing';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.container}>
        <Landing />
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
