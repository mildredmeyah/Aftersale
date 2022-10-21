//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// create a component
const RoundBtn = ({ antIconName, size, color, style, onPress }) => {
    return (
      <AntDesign
        name={antIconName}
        size={size || 24}
        color={color}
        style={[style.icon, { ...style }]}
        onPress={onPress}
        />
    )
  };

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default RoundBtn;
