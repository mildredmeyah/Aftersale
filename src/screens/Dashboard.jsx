
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
				{/* <SearchBar
					placeholder="Type Here..."
					lightTheme
					round
					autoCorrect={false}
				/> */}
									<TextInput placeholder='search here' style={styles.place}  />
					<TouchableOpacity
					onPress={() => alert('Navigate to the search  part')}
					style={styles.icon}>
						<Feather name="search" size={18} color="white" />
				
				</TouchableOpacity>
			
			</View>


			<View style={styles.productCard}>
				<TouchableOpacity
				
					onPress={() => navigation.navigate('ProfileScreen')} 
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
					<Text>Remaining</Text>
					<Text>Profit</Text>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => alert('Navigate to the add product page')}
				style={styles.add}>
				<Feather name="plus" size={30} color="black" />
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
