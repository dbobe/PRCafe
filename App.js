import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';

import LoadingComponent from './src/components/LoadingComponent';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <LoadingComponent />
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
