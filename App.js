import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage'

export default function App() {
  const [displayScreen, setDisplayScreen] = useState()

  const [fontLoading] = useFonts({
    'montserat-bold': require('./assets/fonts/Montserrat-Bold.otf'),
    'montserat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
    'avenir-next': require('./assets/fonts/AvenirLTStd-Black.otf'),
  })

  if (!fontLoading) {
    return <AppLoading />
  }


  let screen = <Home switchScreen={switchScreen} />

  if (!displayScreen) {
    screen = <Home switchScreen={switchScreen} />
  }
  if (displayScreen == 'login') {
    screen = <LoginPage back={switchScreen} />
  }

  if (displayScreen == 'signup') {
    screen = <SignupPage back={switchScreen} />
  }

  function switchScreen(goto) {
    setDisplayScreen(goto)
  }



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {screen}
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
