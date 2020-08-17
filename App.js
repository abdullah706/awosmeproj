import React, {Component } from 'react';
import { View, Alert,Button,Text, Image, ScrollView, StyleSheet,Vibration, Platform,ActivityIndicator } from 'react-native';
import Box from './componet/Box';
import MyWeb from './componet/MyWeb';

class App extends React.Component  {
  state = {
    myState: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
 }
  
  render(){

  
  return (
     
      <ScrollView style={styles.container}>
             <MyWeb />

             <Text style={styles.first}> {this.state.myState} </Text>
             <ActivityIndicator />
        <View>
         
            <Text style={styles.first}>one</Text>
            <Text style={styles.second}>two</Text>
            <Text style={styles.third}>three</Text>

            
        </View>
      


        
        <Image source={require('./assets/konexio-logo_1.png')}
          style= {{width: 300, height: 100}}
        />
          <Image source={{uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}}
          style= {{width: 300, height: 100}}
         />
    
    <View>
      
     
      { <Button
        title="Press me"
        onPress={() => Alert.alert('HY MY HONY')}
      /> }
    </View>
    <View>
          <Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
        </View>
      </ScrollView>
    
  );
}
}
const styles = StyleSheet.create({
  container: {
    
    backgroundColor : 'black'
  },
  first: {
    fontSize: 30,
    color: 'white',
    marginVertical: 80
  },
  second: {
    color: 'white',
    marginVertical: 80
  },
  Text:{
    fontSize:40,
    color: 'white',
  },
  third: {
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 80
  }

});     

export default App;