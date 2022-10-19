import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Dashboard from './src/screens/Dashboard';
import AddProduct from './src/screens/AddProduct';
import ViewProduct from './src/screens/ViewProduct';
import Splash from './src/screens/Splash'
// import Profile from './src/screens/Profile';


import { auth } from './src/config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  //function to register new user with email and password
  //function to login user with email and password
  //function to log out the user
  
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{
        headerStyle:{
          backgroundColor:'#96DED1'
        }
      
      }}  >
        <Stack.Screen name='dd' options={{title:'' }}>
          {(props) => <Splash {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Login' options={{title:'Login'}}>
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Register' options={{title:'Register'}}>
          {(props) => <Register {...props} />}
        </Stack.Screen> 

        <Stack.Screen name='Home' options={{title:'Home'}}>
          {(props) => <Dashboard {...props} />}
        </Stack.Screen> 

        <Stack.Screen name='AddProduct' 
        options={{title:'Add Product',
               headerTitleStyle: {color: '#111', fontWeight: 'bold',},
               headerStyle: {backgroundColor: '#96DED1',},
               
               headerRight: () => (
                
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <SearchIcon size="large" />

                  <AccountCircleIcon size="large" />
                </View>
              ),
               }}>
          {(props) => <AddProduct {...props} />}
        </Stack.Screen>

        <Stack.Screen name='ViewProduct' 
        options={{title:'View Product',
               headerTitleStyle: {color: '#111', fontWeight: 'bold',},
               headerStyle: {backgroundColor: '#96DED1',},
               
               headerRight: () => (
                
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <SearchIcon size="large" />

                  <AccountCircleIcon size="large" />
                </View>
              ),
               }}>
          {(props) => <ViewProduct {...props} />}
        </Stack.Screen>

        {/* <Stack.Screen name='Profile' options={{title:'Profile'}}>
          {(props) => <Profile {...props} />}
        </Stack.Screen>  */}

       

        
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
    maxHeight:840,
    maxWidth:1000,
    height:896,
    width:424,
  },
});
