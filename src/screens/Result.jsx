import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button,TouchableOpacity,  SafeAreaView } from 'react-native';
import {BarChart} from "react-native-chart-kit";


export default function Result() {
  return (
    <SafeAreaView style={{backgroundColor:"#fff"}}>
        <View style={styles.container}>
         


                    <View >
                    <Text style={styles.para}>The results of all products 
                        entered for sale</Text>
                    </View>

                    
                    <View >
                    <Text style={styles.spa}></Text>
                    </View>
                    <View style={styles.pl}>

                    <View style={{backgroundColor: '#B4C9FF', height: 129, width: 203}}>
                    <Text style={{color: '#191919', fontSize: 30, alignSelf: 'center', fontFamily:'bold',}}>Profit</Text>
                    <Text style={{color: '#191919', fontSize: 76, alignSelf: 'center'}}>0</Text>
                    </View>

                    <View style={{backgroundColor: '#E6DBFF', height: 129, width: 205}}>
                    <Text style={{color: '#191919', fontSize: 30, alignSelf: 'center', fontFamily:'bold',}}>Loss</Text>
                    <Text style={{color: '#191919', fontSize: 76, alignSelf: 'center'}}>0</Text>
                    </View>
                    </View>

                    <View style={styles.Graph}>
                    <View style={styles.bar}>
                    <BarChart
                    
                            data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                data: [
                                    Math.random() * 0,
                                    Math.random() * 20,
                                    Math.random() * 50,
                                    Math.random() * 100,
                                    Math.random() * 150,
                                   
                                ]
                                }
                            ]
                            }}
                            width={380} // from react-native
                            height={200}
                            yAxisLabel="R"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                            backgroundColor: "green",
                            backgroundGradientFrom: "green",
                            backgroundGradientTo: "black",
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "green"
                            }
                            }}
                            bezier
                            style={{
                            marginVertical: 8,
                            borderRadius: 16
                            }}
                     />
                     </View>
                    </View>
                    <View style={{flexDirection:"row"}} >
                     
                       <View style={styles.jtg}>     
                      <TouchableOpacity style={styles.Daily} >
                      <Text style={{color: '#191919', fontSize: 30, alignSelf: 'center', fontFamily:'bold',}}>Daily</Text>
                      </TouchableOpacity>
                      
                      
                      <TouchableOpacity style={styles.week} >
                      <Text style={{color: '#191919', fontSize: 30, alignSelf: 'center', fontFamily:'bold',}}>Weekly</Text>
                      </TouchableOpacity>
                   
                      </View>
                      <View style={styles.tfgy}>
                    
                      <TouchableOpacity style={styles.monthly}>
                      <Text style={{color: '#191919', fontSize: 30, alignSelf: 'center', fontFamily:'bold',}}>Monthly</Text>
                      </TouchableOpacity>
      
                      
                      <TouchableOpacity style={styles.annually} >
                      <Text style={{color: '#191919', fontSize: 30, alignSelf: 'center', fontFamily:'bold',}}>Anually</Text>
                      </TouchableOpacity>

                      </View>
                 
                    </View>
                  
        
      </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    

  
  },
  hed:{

    backgroundColor:'#96DED1',
    

  },
  para:{
    marginTop: 20,
    backgroundColor: '#D6F8FF',
    height: 70,
    width:409,
    marginLeft:12,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
     alignSelf: 'center',
      fontFamily:'bold'
  },
 
  Graph:{
    marginTop: 20,
    width:361,
    height:207,
  },
  period:{
    marginTop: 20,
    
  },
  spa:{
    backgroundColor: '#9FD1FF',
    width: 409,
    height: 30,
    marginLeft:12,
  },
  p:{

    width:205,
    height: 100,
    backgroundColor:'#B4C9FF',
    alignSelf:'center',
    fontSize:25,
    


  },
  l:{
    width: 204,
    height: 100,
    backgroundColor:'#E6DBFF',
    fontSize:25,
    fontFamily:'bold',
    backgroundColor:'#E6DBFF',
    fontFamily:'bold',

  },
  pl:{
    flexDirection:"row",
    marginLeft:10,
    
    
  },
  monthly:{
    marginTop: 30,
    marginLeft:80,
    backgroundColor:'#96DED1',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    width:144,
    height:55,  
  },
  week:{
    marginTop: 10,
    backgroundColor:'#96DED1',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    width:144,
    height:55,  
  },
  annually:{
    marginTop: 10,
    marginLeft:80,
    backgroundColor:'#96DED1',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    width:144,
    height:55,  
  },
  Daily:{
    marginTop: 30,
    borderRadius:10,
    backgroundColor:'#96DED1', 
    alignItems: 'center',
    justifyContent: 'center',
    width:144,
    height:55,  
        
  },
  bar:{
    height: 50,
    width:30,
  },


});
