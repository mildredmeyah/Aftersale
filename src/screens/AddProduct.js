import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from '../config/firebase';
import { addDoc, collection } from "firebase/firestore";
import { ClearAll } from "@mui/icons-material";

const AddProduct = () => {
    const navigation = useNavigation()
    const [name, setProductName] = useState('');
    const [ProductDesc, setProductDesc] = useState('')
    const [costPerBulk, setCostPerBulk] = useState('')
    const [email] = useState(auth.currentUser.email);

    const [sellingPrice, setSellingPrice] = useState('');
    const [costSingle, setCostSingle] = useState('');
    const [quantity, setQuantity] = useState('');


    const addProduct = () => {
        if(name === '') {
            alert("Please insert a product name");
            //don't allow
        } else {
            if(costPerBulk === '' || costPerBulk < 1) {
                alert("Please insert a Selling price of more than 1");
                //don't allow
            } else {
                if(quantity === '' || quantity < 1) {
                    alert("Please insert a quantity of 1 or more");
                    //don't allow
                } else {
                    if(sellingPrice === '' || sellingPrice < 1) {
                        alert("Please insert a Selling price of more than 1");
                        //don't allow
                    } else {
                        const collectionRef=collection(db,"productss");

                        const Products={
                            name:name,
                            costPerBulk:costPerBulk,
                            quantity:quantity,
                            sellingPrice:sellingPrice,
                            email: email,
                        };

                        addDoc(collectionRef, Products).then(()=>{
                            alert("Added transaction successfully");
                            ClearAll();
                            navigation.navigate('Home')
                        }).catch((err)=>{
                            console.log(err);
                        })
                    }
                }
            }
        }
    }

    return (
        <View style={styles.container}>
            
            <View>
                <TextInput style={styles.TextInput}
                placeholder= "Enter product name"
                value={name}
                onChangeText={(Text) => setProductName(Text)}
                autoCapitalize= "none"
                autoCorrect={false} />
                <TextInput style={{
                    height: 90,
                    width: 200,
                    margin: 12,
                    fontSize: 11,
                    borderBottomWidth: 1,
                    borderColor: '#96DED1',
                    color: '#A09999',
                    backgroundColor: '#fff',
                    paddingHorizontal: 10,
                    marginBottom: 10,
                    textAlign: 'left',
                    borderWidth: 1,
                    borderRadius: 4,
                }}
                placeholder= "Enter product description"
                
                value={ProductDesc}
                onChangeText={(Text) => setProductDesc(Text)}
                autoCapitalize= "none"
                autoCorrect={false} />
                <TextInput style={styles.TextInput}
                placeholder= "Enter cost per bulk"
                value={costPerBulk}
                onChangeText={(Text) => setCostPerBulk(Text)}
                autoCapitalize= "none"
                autoCorrect={false} />
                <TextInput style={styles.TextInput}
                placeholder= "Cost (single)"
                value={costSingle}
                onChangeText={(Text) => setCostSingle(Text)}
                autoCapitalize= "none"
                autoCorrect={false} />
                <TextInput style={styles.TextInput}
                placeholder= "Selling price"
                value={sellingPrice}
                onChangeText={(Text) => setSellingPrice(Text)}
                autoCapitalize= "none"
                autoCorrect={false} />
                <TextInput style={styles.TextInput}
                placeholder= "Quantity"
                value={quantity}
                onChangeText={(Text) => setQuantity(Text)}
                autoCapitalize= "none"
                autoCorrect={false}
                secureTextEntry={true} />
                {/* <TextInput style={styles.TextInput}
                placeholder= "Email"
                value={quantity}
                onChangeText={(Text) => setEmail(Text)}
                autoCapitalize= "none"
                autoCorrect={false}
                secureTextEntry={true} /> */}
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
            <TouchableOpacity
                onPress={addProduct}
                style={styles.button}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#4F4F4F'}}>Capture Product</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Home')}}
                style={styles.buttonClear}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>Clear Inputs</Text>
            </TouchableOpacity> 
            </View>
            
                          
            
        </View>
    )
}

export default AddProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 580,
        width: 340,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 140,
        marginBottom: 150,
        alignSelf: 'center',
        backgroundColor: '#DFF1F3',
        borderRadius: 20,
    },
    TextInput: {
        width: 200,
        height: 30,
        margin: 12,
        fontSize: 11,
        borderBottomWidth: 1,
        borderColor: '#96DED1',
        color: '#A09999',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginBottom: 10,
        textAlign: 'left',
        borderWidth: 1,
        borderRadius: 4,
    },
    button: {
        marginTop: 5,
        height: 45,
        width: 100,
        backgroundColor: '#96DED1',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10, 
    },
    buttonClear: {
      marginTop: 5,
      marginLeft: 10,
      height: 45,
      width: 80,
      backgroundColor: '#CAC9C9',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold', 
      borderRadius: 10,
    },
})