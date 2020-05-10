/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SearchBar = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#588da8',
          height: 54,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', position: 'relative'}}>
          <View style={{paddingVertical: 7, paddingLeft: 10}}>
            <TextInput
              placeholder="Cari renungan disini.."
              style={{
                fontSize: 10,
                backgroundColor: 'white',
                borderRadius: 5,
                paddingLeft: 30,
                paddingRight: 135,
                paddingVertical: 0,
              }}
            />

            <Image
              source={require('../../../assets/icon/search.png')}
              style={{
                resizeMode: 'contain',
                height: 15,
                width: 30,
                position: 'absolute',
                top: 13,
                left: 11,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: 17,
          left: 270,
        }}>
        <Image
          source={require('../../../assets/icon/bell.png')}
          style={{resizeMode: 'contain', height: 20, width: 50}}
        />
      </View>
    </View>
  );
};
export default SearchBar;
