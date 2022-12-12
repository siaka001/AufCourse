
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="S'identifier" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

