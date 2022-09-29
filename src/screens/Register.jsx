import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Header from '../components/Header'

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title='Register' />
        <View>
            <View>
                <Text>Email</Text>
                <TextInput />
            </View>

            <View>
                <Text>Password:</Text>
                <TextInput />
            </View>

            <View>
                <Text>Confirm Password:</Text>
                <TextInput />
            </View>
            <Button title='Register' />
            <View>
                <Text>Already have an account?</Text>
                <Button title='Login' onPress={() => navigation.navigate('Login')} />
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

export default Register