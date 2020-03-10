import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#f6f6f6'}}>
        </View>
        <View style={styles.sliderBar}>
        <View style={{marginHorizontal:2, justifyContent:'center',borderRadius:10, marginLeft:4 , height:80, flex: 1, backgroundColor:'#c00000'}}>
          <Text style={{textAlign:'center'}}>Renungan #1</Text>
        </View>
        <View style={{marginHorizontal:2, justifyContent:'center',borderRadius:10, height:80, flex: 1, backgroundColor:'#c00000'}}>
          <Text style={{textAlign:'center'}}>Renungan #2</Text>
        </View>
        <View style={{marginHorizontal:2,justifyContent:'center', borderRadius:10, marginRight:4 , height:80, flex: 1, backgroundColor:'#c00000'}}>
          <Text style={{textAlign:'center'}}>Renungan #3</Text>
        </View>
        </View>
        <View style={[{backgroundColor:'#f7b32d'},styles.menuBar]}>
          <View style={styles.childBar}>
            <Image style={{width: 26, height: 26 }} source={require('./icon/home_black.png')}/>
            <Text style={{fontSize: 10, color: '#f8f9fc', marginTop: 4}}>Home</Text>
          </View>

          <View style={styles.childBar}>
            <Image style={{width: 26, height: 26 }} source={require('./icon/language_black.png')}/>                
            <Text style={{fontSize: 10, color: '#f8f9fc', marginTop: 4}}>News</Text>
          </View>

          <View style={styles.childBar}>
            <Image style={{width: 26, height: 26 }} source={require('./icon/chat.png')}/>                
            <Text style={{fontSize: 10, color: '#f8f9fc', marginTop: 4}}>Chat</Text>
          </View>

          <View style={styles.childBar}>
            <Image style={{width: 26, height: 26 }} source={require('./icon/error_outline_black.png')}/>        
            <Text style={{fontSize: 10, color: '#f8f9fc', marginTop: 4}}>About</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  menuBar:{
    height: 54,
    flexDirection:'row'

  },
  childBar:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  sliderBar:{
    flex:1,
    height:54,
    flexDirection:'row',
    alignItems:'center'
  }
});