import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import {BarChart} from "react-native-chart-kit";


export default function Result() {
  return (
    <View style={{backgroundColor:"white"}}>
                <View style={styles.container}>

                    <View style={styles.hed}>
                    <Text>View Result</Text>
                    </View>

                    <View >
                    <Text style={styles.para}>The results of all products 
                        entered for sale</Text>
                    </View>

                    <View >
                    <Text style={styles.space}></Text>
                    </View>

                    <View style={styles.pl}>
                    <Text style={styles.p}>Profit</Text>
                    <Text style={styles.l}>Loss</Text>
                    </View>

                    <View style={styles.Graph}>
                    <Text>Profit$Loss Graph</Text>
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
                                    Math.random() * 200
                                ]
                                }
                            ]
                            }}
                            width={500} // from react-native
                            height={220}
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
                    <View style={styles.period}>
                    <Button title='Daily'/>
                    <Button title='Weekly'/>
                    <Button title='Monthly'/>
                    <Button title='Anually'/>
                    </View>

            </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hed:{

    backgroundColor:'#96DED1',
    

  },
  para:{
    marginTop: 20,
    backgroundColor: '#D6F8FF',
    height: 50,
  },
 
  Graph:{
    marginTop: 20,
  },
  period:{
    marginTop: 20,
    
  },
  space:{
    backgroundColor: '#9FD1FF',
    width: 500,
    height: 50,
  },
  p:{

    width: 250,
    height: 50,
    backgroundColor:'#B4C9FF',
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",


  },
  l:{
    width: 250,
    height: 50,
    backgroundColor:'#E6DBFF',
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
