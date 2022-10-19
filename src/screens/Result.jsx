import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button,TouchableOpacity } from 'react-native';
import {BarChart} from "react-native-chart-kit";


export default function Result() {
  return (
    <View style={{backgroundColor:"white"}}>
                <View style={styles.container}>


                    <View >
                    <Text style={styles.para}>The results of all products 
                        entered for sale</Text>
                    </View>

                    <View >
                    <Text style={styles.space}></Text>
                    </View>

                    <View style={styles.pl} >
                    <Text style={styles.p}>Profit</Text>

                    <Text style={styles.l}>Loss</Text>
                    </View>

                    <View style={styles.Graph}>
                    <Text>Profit$Loss Graph</Text>
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
                      <Text>Daily</Text>
                      </TouchableOpacity>
                      
                      
                      <TouchableOpacity style={styles.week} >
                      <Text>Weekly</Text>
                      </TouchableOpacity>
                   
                      </View>
                      <View style={styles.tfgy}>
                    
                      <TouchableOpacity style={styles.monthly}>
                      <Text>Monthly</Text>
                      </TouchableOpacity>
      
                      
                      <TouchableOpacity style={styles.annually} >
                      <Text>Anually</Text>
                      </TouchableOpacity>

                      </View>
                 
                    </View>
                  

            </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    paddingTop: 50,
  
  },
  hed:{

    backgroundColor:'#96DED1',
    

  },
  para:{
    marginTop: 20,
    backgroundColor: '#D6F8FF',
    height: 99,
    width:409,
  },
 
  Graph:{
    marginTop: 20,
    width:361,
    height:207,
  },
  period:{
    marginTop: 20,
    
  },
  space:{
    backgroundColor: '#D6F8FF',
    width: 409,
    height: 45,
  },
  p:{

    width:205,
    height: 129,
    backgroundColor:'#B4C9FF',
    alignSelf:'center',
    fontSize:25,
    fontFamily:'bold',

  },
  l:{
    width: 204,
    height: 129,
    backgroundColor:'#E6DBFF',
    fontSize:25,
    fontFamily:'bold',

  },
  pl:{
    flexDirection:"row",
    
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
