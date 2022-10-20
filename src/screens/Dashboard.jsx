import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
//import AddProduct from './addProduct';

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

        <TouchableOpacity
                onPress={() => { navigation.navigate('AddProduct')}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#96DED1'}}>Go to AddProduct page</Text>
            </TouchableOpacity>

        <TouchableOpacity
                onPress={() => { navigation.navigate('ViewProduct')}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#96DED1'}}>Go to ViewProduct page</Text>
            </TouchableOpacity>

        <TouchableOpacity
                onPress={() => { navigation.navigate('Result')}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#96DED1'}}>Go to Result page</Text>
            </TouchableOpacity>
  
        <Button title='Logout' onPress={logout} color='#96DED1'/>
        <Text>{email}</Text>
        
        <Button title='Logout' onPress={logout} />
        <Text>Welcome to the app!</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
})

export default Dashboard;