/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class SlideNews extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            padding: 12,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: '#0779e4',
              width: 85,
              padding: 5,
              borderRadius: 7,
            }}>
            <Text style={{color: 'white', marginLeft: 5}}>Renungan</Text>
          </View>
          <Text style={{fontSize: 10, paddingTop: 5, color: '#61A756'}}>
            Tampilkan Semua >>
          </Text>
        </View>
      </View>
    );
  }
}

export default SlideNews;
