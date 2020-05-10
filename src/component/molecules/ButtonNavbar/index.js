/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {Button} from 'react-native-paper';

const ButtonNav = ({navigation}) => {
  return (
    <View
      style={{height: 54, flexDirection: 'row', backgroundColor: '#d1cebd'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => this.props.navigation.navigate('NewsScreen')}>
          <Image
            source={require('../../../assets/icon/home_black.png')}
            style={{resizeMode: 'contain', height: 32}}
          />
        </Button>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/icon/news.png')}
          style={{resizeMode: 'contain', height: 25, width: 50}}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../assets/icon/chat.png')}
          style={{height: 29, resizeMode: 'contain'}}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../../assets/icon/user.png')}
          style={{resizeMode: 'contain', height: 26, width: 50}}
        />
      </View>
    </View>
  );
};

export default ButtonNav;
