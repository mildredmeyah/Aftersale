import React from 'react';

import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Header from '../components/Header';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title='Login' />
        <View>
            <View>
                <Text>Email</Text>
                <TextInput />
            </View>

            <View>
                <Text>Password:</Text>
                <TextInput />
            </View>

            <Button title='Login' onPress={() => navigation.navigate('AddProduct')} />
            <View>
                <Text>Don't have an account?</Text>
                <Button title='Register' onPress={() => navigation.navigate('Register')} />
            </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
})

export default Login