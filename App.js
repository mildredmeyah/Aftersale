import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Dashboard from './src/screens/Dashboard';
import Result from './src/screens/Result';


import { auth } from './src/config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  //function to register new user with email and password
  //function to login user with email and password
  //function to log out the user
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' options={{headerShown:false}}>
        <Stack.Screen name='Login'    >
          {(props) => <Result {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Register' options={{headerShown:false}}>
          {(props) => <Register {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Home' options={{headerShown:false}}>
          {(props) => <Dashboard {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Result' options={{title:'Result'}}>
          {(props) => <Result {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
  </NavigationContainer>



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