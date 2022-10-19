import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
        <Text   style={styles.hed}>{title}</Text>
        
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        padding: 15,
        maxHeight:840,
	      maxWidth:1000,
        justifyContent:'center',
        alignItems:'center',
     

        alignItems: 'center', 
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    hed:{
      flex:1,
      marginTop: 10,
      fontSize:25,
      fontWeight: "bold"
    },
    bdy:{
      fontSize:15,
      marginTop: 10,
      fontWeight: "bold"

    },
   
   
})

export default Header