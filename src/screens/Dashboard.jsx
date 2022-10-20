import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
//import AddProduct from './addProduct';

// import React from 'react';
// import{ StyleSheet,
// 		Text,
// 		View,
// 		FlatList,
//         TextInput,Image
// 	} from 'react-native';
// import { AddCircle, Visibility,AccountCircle } from '@mui/icons-material';
// import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-default';

// import DATA from '../config/market/DATA'


// // const DATA = [
// // {
// // 	id:"1",
// // 	title:"Apples",




// // },
// // {
// // 	id:"2",
// // 	title:"Go slow",
// // 	title:"Spinach",
// //     remaining:"10  reamaining",
// //     profit:"R10 profit"
// // },
// // {
// // 	id:"3",
// // 	title:"Bananas",
// // 	title:"Spinach",
// //     remaining:"40  reamaining",
// //     profit:"R50 profit"
// // },
// // {
// // 	id:"4",
// // 	title:"Spinach",
// //     remaining:"0  reamaining",
// //     profit:"R150 profit",

// // },



// // ];

// const Item = ({title,profit}) => {
// return(
// 	<View style={styles.item}  >
// 		<View>



// 		</View>
// 		<View style={styles.eye}>

// 	<Visibility/>
// 	</View>

// 	<Text>{title}</Text>
// 	<Text>{profit}</Text>
// 	{/* <Text>{remainig}</Text> */}



// 	</View>
// );
// }


// export default function App() {


// const renderItem = ({item})=>(
// <Item title={item.title}/>






// );
// // const render=({item})=>(
// // 	<Item title={item.remaining}/>
// // )
// return (
// <View style={styles.container}>

//     <View>
//  <Text >Stats</Text>

// 	<Text  style = {{ marginLeft : 150, color : '#96DED1',paddingLeft:140, textDecorationLine:'underline' }}>see all</Text>

//     </View>
// 	<View style={styles.total}>
// 		<Text>TOTAL INCOME</Text>
// 		<Text>R1400</Text>
// <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/5116/5116338.png'}} style={{width:30, height:30}}
// />
// 		<Text>30% Increase From Last Month</Text>
// 	</View>
// 	<View style={styles.stock}>
// 		<Text>STOCK</Text>
// 		<Image source={{uri:'https://cdn-icons-png.flaticon.com/128/7125/7125797.png'}} style={{width:30, height:30}}
// />
// 		<Text>R3</Text>
// 		<Text>Need More Stock</Text>
// 	</View>
{/* <SearchBar
    placeholder="Type Here..."
    lightTheme
    round
    autoCorrect={false} 

   
/> */}
// 	<FlatList
// 	data={DATA}
// 	renderItem={renderItem}
// 	keyExtractor={item => item.id}


// 	/>

//     <View style={styles.add}>
//    <AddCircle />
//    </View>

// </View>
// );
// }

// const styles = StyleSheet.create({
// container: {
//     backgroundColor:'#fff',

// 	padding:2,
// 	maxWidth:1000,

// 	maxHeight:840,
//     maxWidth:1000,
//     height:896,
//     width:424,
// },
// item: {
// 	backgroundColor: '#DFF1F3',
// 	padding: 20,
// 	marginVertical: 8,
// 	marginHorizontal: 16,
//     borderRadius:10
// },
// input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius:10
//   },
//   add:{
// 	paddingLeft:330,
// 	color:'#96DED1',

//   },
//   eye:{
// 	color:'black',
// // 	paddingBottom:100,
// //   paddingLeft:250,
//     marginLeft:250,




//   },
//   total:{
// 	backgroundColor:"green"
//   },
//   stock:{
// 	backgroundColor:'#fff',
//   }


// });
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import img1 from '../../assets/apples.jpeg';
import img1 from "../../assets/pictures/appless.jpeg"
import img2 from '../../assets/pictures/bananas.webp';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-default';
import { Feather } from '@expo/vector-icons';



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

			<View style={styles.stats}>
				
					<Text >Stats</Text>
					 <TouchableOpacity
					onPress={() => alert('Navigate to the view all products')}
				><Text style={styles.seeAll}>see all</Text>
				</TouchableOpacity>
			</View>


			<View style={styles.details}>
			<View style={styles.Total}>

				<Text>TOTAL INCOME</Text>
				<Text>R1400</Text>
				<Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5116/5116338.png' }} style={{ width: 30, height: 30 }}
				/>
				<Text>30% Increase From Last Month</Text>
			</View>
			<View style={styles.stock}>
				<Text>STOCK</Text>
				<Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/7125/7125797.png' }} style={{ width: 30, height: 30 }}
				/>
				<Text>R3</Text>
				<Text>Need More Stock</Text>
			</View>

</View>
			
			<br></br>
			<br></br>
			<View style={styles.SearchBar}>
				<SearchBar
					placeholder="Type Here..."
					lightTheme
					round
					autoCorrect={false}
				/>
			</View>


			<View style={styles.productCard}>
				<TouchableOpacity
					onPress={() => alert('Navigate to the product details page')}
					style={styles.view}>
					<Feather name="eye" size={16} color="white" />
					{/* <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text> */}
				</TouchableOpacity>
				<View style={styles.imgBox}>
					<Image
						style={{
							flex: 1,
							height: "100%",
							width: "100%",
							borderRadius: '17px',
						}}
						source={img1}
					/>

				</View>
				<View style={styles.textBox}>
					<Text>Product name</Text>
					<Text>Product Name</Text>
					<Text>Product Name</Text>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => alert('Navigate to the add product page')}
				style={styles.add}>
				<Feather name="plus" size={30} color="#fff" />
				{/* <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text> */}
			</TouchableOpacity>
		</View>
	);
};

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
		backgroundColor: "#070627",
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		display: 'flex',
	},
	details:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between'
	},
	Total:{
		height: 110,
		 width: 150,
		  borderWidth: 0.5,
		//  borderColor: 'black',
		  backgroundColor: 'white', 
		  borderRadius: 10,
		  boxshadow: '10px 10px 5px lightblue',
	},
	stock:{ 
		height: 110,
		 width: 130,
		  marginLeft: 20, 
		  borderWidth: 0.5,
		//    borderColor: 'black', 
		   backgroundColor: 'white',
		    borderRadius: 10
		},
		seeAll:{ 
			color: '#96DED1',
		
		 marginLeft: 20,
		  textDecorationLine: 'underline' 
		},
		stats:{
			marginRight:20,
			display:'flex',
			flexDirection:'row',
			justifyContent:'space-between'
		}

});

//make this component available to the app
export default DashBoard;
