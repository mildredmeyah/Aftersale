import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Product = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>

            <View>
                <View style={{backgroundColor: '#A09999', height: 72, width: 321}}>
                    <Text style={{color: '#fff', fontSize: 32, marginLeft: 10}}>Banana Large</Text>
                </View>

                <View style={{backgroundColor: '#D6F8FF', height: 181, width: 321}}>
                    <Text style={{color: '#000', fontSize: 20}}>A box of large bananas</Text>
                    <Text style={{color: '#000', fontSize: 20}}>100 units</Text>
                </View>

                <View style={{backgroundColor: '#9FD1FF', height: 44, width: 321}}>
                    <Text style={{color: '#000', fontSize: 20}}>Cost: 120</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{backgroundColor: '#B4C9FF', height: 129, width: 163}}>
                    <Text style={{color: '#000', fontSize: 20, alignSelf: 'center'}}>Quantity</Text>
                    <Text style={{color: '#000', fontSize: 76, alignSelf: 'center'}}>15</Text>
                    </View>

                    <View style={{backgroundColor: '#E6DBFF', height: 129, width: 158}}>
                    <Text style={{color: '#000', fontSize: 20, alignSelf: 'center'}}>Price</Text>
                    <Text style={{color: '#000', fontSize: 48, alignSelf: 'center'}}>2.5</Text>
                    </View>
                </View>
            </View>
                
            <View style={{flex: 1,height: 72, width: 321}}>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home')}}
                style={styles.buttonEdit}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Home')}}
                style={styles.buttonStock}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Capture Stock</Text>
            </TouchableOpacity>
            </View> 

            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home')}}
                style={styles.buttonSale}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Capture Sale</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { navigation.navigate('Home')}}
                style={styles.buttonDelete}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>Delete</Text>
            </TouchableOpacity>
            </View> 

            <View>
            <TouchableOpacity
                onPress={() => { navigation.navigate('Home')}}
                style={styles.buttonQuality}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Update Quality</Text>
            </TouchableOpacity>
            </View>
            </View>        
            
        </View>
        </SafeAreaView>
    )
}

export default Product

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
    buttonEdit: {
        marginTop: 15,
        height: 35,
        width: 100,
        backgroundColor: '#96DED1',
        color: '#000',
        alignItems: 'center',
        alignSelf: 'left',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderRadius: 10, 
    },
    buttonStock: {
        marginTop: 15,
        height: 45,
        width: 100,
        backgroundColor: '#96DED1',
        color: '#000',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        fontWeight: 'bold',
        borderRadius: 10, 
    },
    buttonSale: {
        marginTop: 15,
        height: 45,
        width: 90,
        backgroundColor: '#96DED1',
        color: '#000',
        alignItems: 'center',
        alignSelf: 'left',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderRadius: 10, 
    },
    buttonDelete: {
      marginTop: 15,
      marginLeft: 40,
      height: 40,
      width: 100,
      backgroundColor: '#CAC9C9',
      color: '#fff',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      fontWeight: 'bold', 
      borderRadius: 10,
    },
    buttonQuality: {
        marginTop: 15,
        height: 45,
        width: 100,
        backgroundColor: '#96DED1',
        color: '#000',
        alignItems: 'center',
        alignSelf: 'left',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderRadius: 10, 
    },
})