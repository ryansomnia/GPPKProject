/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 5000);
  });
  return (
    <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
      <View style={{position: 'absolute'}}>
        {/* <Image source={require('../../../icon/backgroud.jpg')} /> */}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../src/assets/icon/gppklogo.png')}
          style={{
            width: 125,
            height: 125,
          }}
        />
        <Text
          style={{
            fontStyle: 'italic',
            color: '#363636',
            fontSize: 15,
          }}>
          MyGppk
        </Text>
        <View style={{paddingTop: 25}}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      </View>
    </View>
  );
};

export default Splash;
