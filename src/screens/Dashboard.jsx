
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import img1 from '../../assets/apples.jpeg';
import img1 from "../../assets/pictures/appless.jpeg"
import img2 from '../../assets/pictures/bananas.webp';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-default';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-web';



// create a component
const DashBoard = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
			<TouchableOpacity
					onPress={() => alert('Navigate to the profile  page')}
					style={styles.profile}>
					<Feather name="user" size={16} color="white" />
			
				</TouchableOpacity>

			</View>

<br></br>
<br></br>
<br></br>
			<View style={styles.stats}>
				
					<Text >Stats</Text>
					 <TouchableOpacity
					
					onPress={() => alert('Navigate to the view all products')}
				><Text style={{color:'#96DED1',textDecorationLine: 'underline' }}>see all</Text>
				</TouchableOpacity>
			</View>

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


			

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	productCard: {
		width: '90%',
		height: 122,
		backgroundColor: '#DFF1F3',
		borderRadius: '20px',
		margin: '16px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	SearchBar:{
		borderRadius: '10px',
		margin: '16px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	view: {
		content: "",
		position: 'absolute',
		top: "-3px",
		right: "-1px",
		transform: [{ translate: "20%" }],
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		backgroundColor: "#070627",
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		display: 'flex',
	},
place:{
	fontSize: 20,
		 color: 'black',
		 width:353,
		 height:50 ,
		 padding:20,
		 backgroundColor:'#D8D8D8',
		 borderRadius:10,
		

},
	icon:{
		content: "",
		left: "-45px",
		width: "45px",
		height: "48px",
		borderRadius: "10%",
		backgroundColor: "#96DED1",
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		display: 'flex',
	},
	imgBox: {
		height: 80,
		width: 90,
		backgroundColor: 'red',
		margin: 10,
		borderRadius: '17px',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	textBox: {
		display: 'flex',
		flexDirection: 'column',
		flex: 2,
		justifyContent: 'center',
	},
	add: {
		content: "",
		position: 'absolute',
		bottom: "-3px",
		right: "-1px",
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		backgroundColor: "#96DED1",
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		display: 'flex',
		
	},
	profile:{
		content: "",
		position: 'absolute',
		top: "-0px",
		right: "-1px",
		transform: [{ translate: "10%" }],
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		backgroundColor: "#070627",
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	
	},
	details:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
	
	},
	Total:{
		  backgroundColor: 'white', 
		  borderRadius: 10,
		  shadowColor: '#171717',
		  boxShadow: '4px 4px 4px 4px gray',
		  margin: '16px',
		//   shadowOffset: {width: 5, height: 4},
		//   shadowOpacity: 0.2,
		//   shadowRadius: 3,
		//   justifyContent:'center',
	
	},
	stock:{ 
		height: 110,
		 width: 130,
		  marginLeft: 20, 
		  borderRadius: 10,
		   backgroundColor: 'white',
		   boxShadow: '4px 4px 4px 4px gray',
		   margin: '16px',
		},
	
		stats:{
			margin:'16px',
			display:'flex',
			flexDirection:'row',
			justifyContent:'space-between'
		}

});

//make this component available to the app
export default DashBoard;
