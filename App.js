import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import LoginPage from './screens/LoginPage';
import Signuooage from './screens/SignupPage'



export default function App() {
  let screen = <Home toggle={toggleScreens} />
  const [manageScreens, setScreen] = useState()

  if (manageScreens) {
    screen = <LoginPage />
  }

  function toggleScreens() {
    setScreen('login')
  }

  return (
    <View style={styles.container}>
      {screen}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
