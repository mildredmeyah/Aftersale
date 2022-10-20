//import liraries
import React, {useState, useEffect} from 'react';
import { SafeAreaView, FlatList, View, Text, Button, Alert, TouchableOpacity, } from 'react-native';
import { auth, db } from '../config/firebase';
import { getDocs, doc, collection, query, where, deleteDoc } from 'firebase/firestore';



// create a component



  

const ViewAll = () => {
    const [products, setProducts] = useState([]);
    const DeleteAlert = ({product}) => {
      /*Alert.alert(
        'Are You Sure!',
        'This option will delete your product permanantly',
        [
        {
            text: 'Delete',
            onPress: () => console.log('Delete it')
        },
        {
            text: 'Cancel',
            onPress: () => console.log('Dont Delete')
        },
        ],
        {
            cancelable: true,
        })
        
      alert('This is shit')*/
      alert(product.name + 'Is deleted in your database')
    }

    const handleDelete = (product) => {
      
    }
    
    const Item = ({product, navigation}) =>
      (
        
      
          <View>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>{product.name + ' ' + product.quantity}</Text>
                <View style={{display: 'flex', flexDirection: 'row', marginRight: '10%'}}>
                  <Button title='Edit' />
                  <TouchableOpacity onPress={()=>handleDelete(product)}>
                    <Text style={{fontSize: 15, color: "red"}}>Delete</Text>
                  </TouchableOpacity>
                  <Button title='Sell' onPress={()=>alert('The id for '+product.name+' is '+product.id)} />
                </View>
              </View>
          </View>
        )

   

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
