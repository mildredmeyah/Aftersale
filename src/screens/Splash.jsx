import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';


const Splash = ({navigation}) => {


    return (
        <View style={styles.container}>
          
            
            <Text>Welcome to the app!</Text>
            <Button title='Login' onPress={() => navigation.navigate('Login')} />
        </View>
      )
    }
    
    
    const styles = StyleSheet.create({
        container: {
            padding: 15,
        },
    })
    
    export default Splash