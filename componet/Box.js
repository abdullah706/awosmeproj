import React, {Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Platform } from 'react-native';


class Box extends React.Component  {
  render(){

  
  return (
      
      <View style={{
          ...styles.container,
          ...styles.containerActive }}>
        <Text>one</Text>
     
       
      </View>
     

     );
}
}



export default Box;