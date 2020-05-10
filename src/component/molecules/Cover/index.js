/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';

const CoverHome = () => {
  return (
    <View style={{marginTop: 5}}>
      <Image
        source={require('../../../assets/icon/banner1.jpeg')}
        style={{width: '100%', height: 200, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default CoverHome;
