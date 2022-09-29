import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'

const Dashboard = () => {
  return (
    <View style={styles.container}>
        <Header title='Home' />
        <Text>Welcome to the app!</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
})

export default Dashboard