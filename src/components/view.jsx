//import liraries
import React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList, View, Text, Button, } from 'react-native';
import { auth, db } from '../config/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

// create a component

const Item = ({product, navigation}) => (

    <View>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Text>{product.name + ' ' + product.quantity}</Text>
          <View style={{display: 'flex', flexDirection: 'row', marginRight: '10%'}}>
            <Button title='Edit' />
            <Button title='Stock' onPress={()=>navigation.navigate('StockProduct')} />
            <Button title='Sell' onPress={()=>navigation.navigate('SellProduct')} />
          </View>
        </View>
    </View>
  )

const ViewAll = () => {
    const [products, setProducts] = useState([]);

  const productsCollection = collection(db, 'productss')
  //function to fill the products

  const getProducts = async() => {
    const q = query(productsCollection, where('email', '==', auth.currentUser.email));
    const querySnapShots = await getDocs(q);

    let tmpProducts = [];

    querySnapShots.forEach(
    (product) => {
      tmpProducts.push({...product.data(), id: product.id});
    }
    );

    setProducts(tmpProducts);
  }

  const renderItem = ({item}) => (
    <Item product={item} navigation={navigation} />
  );

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <SafeAreaView>
      <FlatList data={products} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  )
};

// define your styles



//make this component available to the app
export default ViewAll;
