import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <View style={{flex: 1, backgroundColor: '#f6f6f6' }}></View>
          <View style={{height: 54, flexDirection:'row', backgroundColor:'#ffb400' }}>
              



              <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                        <Image style={{width: 26, height: 26 }} source={require('./icon/home_black.png')}/>
                <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Home</Text>
              </View>

              <View style={{flex: 1, alignItems:'center', justifyContent:'center' }}>
                        <Image  style={{width: 26, height: 26 }} source={require('./icon/language_black.png')}/>                
                <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>News</Text>
              </View>

              <View style={{flex: 1, alignItems:'center', justifyContent:'center' }}>
                        <Image style={{width: 26, height: 26 }} source={require('./icon/chat.png')}/>                
                <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Chat</Text>
              </View>


              <View style={{flex: 1, alignItems:'center', justifyContent:'center' }}>
                      <Image style={{width: 26, height: 26 }} source={require('./icon/error_outline_black.png')}/>        
                <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>About</Text>
              </View>





          </View>
     
      </View>
    );
  }
}
const styles = StyleSheet.create ({

});