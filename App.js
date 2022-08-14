import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {hasHardwareAsync, authenticateAsync} from 'expo-local-authentication';
import AuthScreen from './src/screens/AuthScreen';
import MainScreen from './src/screens/MainScreen';

const App = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if device supports biometrics authentication
  useEffect(() => {
    hasHardwareAsync().then(result => setIsBiometricSupported(result));
  }, []);

  // Athenticate users (using FaceID and TouchID (iOS) or the Biometric Prompt (Android) if those were already set up, otherwise using device passcode)
  const onAuthenticate = () => {
    authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter Password',
    }).then(result => setIsAuthenticated(result.success));
  };

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
