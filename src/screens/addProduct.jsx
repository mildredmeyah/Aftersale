//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { auth } from '../config/firebase';

// create a component
const AddProduct = () => {

    const [costPrice, setCostPrice] = useState();
    const [sellingPrice, setSellingPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [product, setProduct] = useState();

    const addProduct = () => {
        if(product === '') {
            //don't allow
        } else {
            if(costPrice === '') {
                //don't allow
            } else {
                if(quantity === '') {
                    //don't allow
                } else {
                    if(sellingPrice === '') {
                        //don't allow
                    } else {
                        const collectionRef=collection(db,"Products");

                        const Products={
                            product:product,
                            costPrice:costPrice,
                            quantity:quantity,
                            sellingPrice:sellingPrice,
                        };

                        addDoc(collectionRef, Products).then(()=>{
                            alert("Added transaction successfully")
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
            <View style={styles.header}>
                <Text>AddProduct</Text>
            </View>
            <View style={styles.inputs}>
                <Text>Product Name : <TextInput style={{borderWidth: '2px'}} onChangeText={(value) =>setProduct(value)} /></Text>
                <Text>Cost Price   : <TextInput style={{borderWidth: '2px'}} onChangeText={(value) =>setCostPrice(value)} /></Text>
                <Text>Quantity     : <TextInput style={{borderWidth: '2px'}} onChangeText={(value) =>setQuantity(value)} /></Text>
                <Text>Selling Price: <TextInput style={{borderWidth: '2px'}} onChangeText={(value) =>setSellingPrice(value)} /></Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
});

//make this component available to the app
export default AddProduct;
