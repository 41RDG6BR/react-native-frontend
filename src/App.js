import 'react-native-gesture-handler';
import React from 'react';
// import { AuthProvider }from './contexts/auth'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/app.routes'

const App = () => {
  
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  )
};

export default App;
