/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './Screens/Login';
import {Home} from './Screens/Home';
import {Chat} from './Screens/Chat';
import {Profile} from './Screens/Profile';
import {Menu} from './Screens/Menu';
import {Identity} from './Screens/Indentity';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Identity" component={Identity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
