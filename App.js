
import { StatusBar } from 'expo-status-bar';
import { doc,setDoc,getDoc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';
import { StyleSheet, Button, Text, View ,TextInput} from 'react-native';

import {db} from "./core/config"

export default function App() {
  //storing user data
  const [userDoc , setUserDoc] = useState(null)
  const [text, setText] = useState("")


  const Create = () =>{
    //creating new doc in firebase
    //before that enable firebase in firebase console
    const myDoc = doc(db,  "MyCollection","dXxtCblkxrWH6RiN3bnD")
    //your document goes here
    const docData = {
      "name ":"kevin",
      "bio":"coder"
    }
    setDoc(myDoc,docData)
    //handling promises
    .then(()=>{
      //mark: success
      alert("document created")
    })
    .catch((error)=>{
      //mark failure
      alert(error.message)
    })

  }
  //read from firebase document
  const Read = () =>{
    const myDoc = doc(db,  "MyCollection","dXxtCblkxrWH6RiN3bnD")

    getDoc(myDoc)
    .then((snapshot)=>{
      //mark: success
      if(snapshot.exists){
        setUserDoc(snapshot.data())

      }
      else{
        alert("no doc found")
      }
      
    })
    .catch((error)=>{
      //mark failure
      alert(error.message)
    })

  }
  const Update = (value,merge) =>{
    //updating doc
    const myDoc = doc(db,  "MyCollection","dXxtCblkxrWH6RiN3bnD")
    //if you set merge to true then it will existing doc otherwise it will be a fresh one

    setDoc(myDoc,value,{merge:merge})
    .then(()=>{
      //mark: success
      alert("updated created")
    })
    .catch((error)=>{
      //mark failure
      alert(error.message)
    })
  }
  const Delete = () =>{
    //deleting document

     const myDoc = doc(db,  "MyCollection","dXxtCblkxrWH6RiN3bnD")
     deleteDoc(myDoc)
     .then(()=>{
      //mark: success
      alert("deleted created")
      setText("")
    }).catch((error)=>{
      //mark failure
      alert(error.message)
    })

  }
  return (
    <View style={styles.container}>
    <Button title="create new doc" onPress={Create}></Button>
    <Button title="Read" onPress={Read}></Button>
    {
    userDoc != null &&
    <Text>bio:{userDoc.bio}</Text>
}
<TextInput Style={{width:"95%",
fontSize:18,
padding:12,
borderColor:'gray',
borderWidth: 0.2
}}
placeholder="Type here" onChangeText={(text)=>{setText(text)}}value={text}></TextInput>
  <Button title="Update Doc" onPress={()=>{
    Update({
      "bio":text
    },true)}} ></Button>
    <Button title="Delete Doc" onPress={Delete }></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
