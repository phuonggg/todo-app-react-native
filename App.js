import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import AuthScreen from './src/screens/AuthScreen';
import MainScreen from './src/screens/MainScreen';
import * as LocalAuthentication from 'expo-local-authentication';

const App = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter Password',
    });
    auth.then(result => {
      setIsAuthenticated(result.success);
      console.log(result);
    });
  }

  return (
    <View style={styles.container}>
      {/* {isAuthenticated ? (
        <MainScreen setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <AuthScreen onAuthenticate={onAuthenticate} />
      )} */}
      <MainScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
