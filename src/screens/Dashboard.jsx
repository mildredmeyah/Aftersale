import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';

import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';;

const Dashboard = ({navigation}) => {
//states for user email
const [email, setEmail] = useState('');

useEffect(()=>{
  if (auth.currentUser) {
    setEmail(auth.currentUser.email);
  } else {
    navigation.navigate('Login');
  }
}, []);

const logout = async() => {
  await signOut(auth).then(
    ()=> {
      navigation.navigate('Login');
    }
  )
}
 
  return (
    <View style={styles.container}>
        <Header title='Home' />
        <Text>{email}</Text>
        <Button title='Logout' onPress={logout} color='#96DED1'/>
        <Text>Welcome to the app!</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
})

