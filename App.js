import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import * as ExpoLocalAuthentication from 'expo-local-authentication';
import AuthScreen from './src/screens/AuthScreen';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await ExpoLocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  function onAuthenticate() {
    const auth = ExpoLocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter Password',
    });

    auth
      .then(result => {
        setIsAuthenticated(result.success);
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <MainScreen setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <AuthScreen onAuthenticate={onAuthenticate} />
      )}
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
