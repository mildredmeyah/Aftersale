import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Header = ({title}) => {
  return (
    <View style={styles.container}>
        <Text  >{title}</Text>
       
        <Text>Manage your business with better information</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      backgroundColor: '#fff',
        padding: 15,
        maxHeight:840,
	      maxWidth:1000,
        justifyContent:'center',
        alignItems:'center',
     

    },
    
   
   
})

export default Header