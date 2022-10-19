// import React from "react";
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';

// import { Image } from "react-native";




// export default function Profile () {
//     return (
     
//         <View style={styles.container}>
//                <View style={styles.text}> 
//                <Text>View Profile</Text> 
//                </View>
//                <Image
//           style={styles.image}
//           source={{uri: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}/>

//            <br></br>
//             <View style={styles.Text}>
//                  <Text> MILDRED MEYAHABO MACHETE</Text>

//                  </View>
            
//       <br></br>
//    <Button color='#96DED1'  title='update'/>
//    <br></br>
//    <Button color='#96DED1'  title='deactivate'/>
//    <br></br>
//    <Button color='#96DED1'  title='signout'/>


//       <StatusBar style="auto" />
  
//     </View>
  
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     Text: {
  
//         width:332,
//         height:46,
//         borderBottomLeftRadius:'10px',
//         borderBottomRightRadius:'10px',
//         borderTopLeftRadius:'10px',
//         borderTopRightRadius:'10px',
//         textAlign:'center',
//         fontSize:24, 
//         bottom: 100
//     },
//     image:{
//         width:185,
//         height:186,
//         borderRadius:100,
//         paddingBottom:10, 
//         backgroundColor:'gray',
//         bottom:150,
//     },
//     btn:{
//           width:185,
//         height:186,
//         borderRadius:100,
//         paddingBottom:10, 
//         paddingHorizontal: 8,
//         paddingVertical: 6,
//         borderRadius: 4,
//         backgroundColor: "oldlace",
//         alignSelf: "flex-start",
//         marginHorizontal: "1%",
//         marginBottom: 6,
//         minWidth: "48%",
//         textAlign: "center",
        

//     },
//     text:{
//         backgroundColor:'#96DED1',
//         width:431,
//         height:78,
//         textAlign:'center',
//         fontSize:24,  
//        bottom:240
        
//     }
   

//   });
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button,Image} from 'react-native';
import Header from '../components/Header';

import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import {Edit,Email,Home,Work,Call} from '@mui/icons-material'
import { TextInput, TouchableOpacity } from 'react-native-web';

const Profile = ({navigation}) => {
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
<View style={styles.details}>
<Image 
        style={styles.image} 
        source={'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}/>
   

        <Text>{email}</Text>
      
        <Text>Names and surname:</Text>
        <br></br>
        <Text><Call/>contact:</Text>
        <br></br>
        <Text><Email/>Email Address:</Text>
        <br></br>
        </View>
        <View style={styles.locations}>
            favoiurites Locations
<Text><Home/>home location</Text>
<br></br>
<Text><Work/>work location
</Text>
</View>

        <br></br>
        <View style={styles.edit}> 
        <Text> <Edit />EDIT </Text>
        </View>
       
      <br></br>
     
        <TouchableOpacity style={styles.logout} color='#96DED1' onPress={logout} >
                <Text style={{color:'black'}}>LOGOUT</Text>

            </TouchableOpacity>
            <br></br>
            <TouchableOpacity style={styles.cancel} color='#96DED1'  >
                <Text style={{color:'black'}}>DEACTIVATE</Text>

            </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
         width:186,
         height:186,
         borderRadius:100,
         paddingBottom:100, 
         position:'relative'
     },
     logout:{
        width:189,
        height:46,
        borderRadius:40,
        backgroundColor:'#96DED1',
        alignItems:'center',
        justifyContent:'center',
    },
    edit :{
        width:189,
        height:46,
        borderRadius:40,
        backgroundColor:'#96DED1',
        alignItems:'center',
        justifyContent:'center',
    },
    cancel :{
        width:189,
        height:46,
        borderRadius:40,
        backgroundColor:'#96DED1',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
      
        backgroundColor:'gray',
        width:189,
        height:26,
        borderRadius:40,
        paddingLeft:20
    }
  
})

export default Profile
  