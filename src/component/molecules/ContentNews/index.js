/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class ContentNews extends Component {
  render() {
    return (
      <View style={{paddingTop: 16}}>
        <View
          style={{
            height: 210,
            width: '100%',
            backgroundColor: 'white',
            paddingBottom: 5,
          }}>
          <Image
            source={this.props.image}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'cover',
              flex: 1,
            }}
          />
          <Text
            style={{
              fontSize: 13,
              marginLeft: 8,
              fontWeight: 'bold',
              paddingTop: 10,
            }}>
            {this.props.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              padding: 5,
              marginLeft: 5,
              paddingBottom: 10,
            }}>
            {this.props.isi}
          </Text>
        </View>
        <View style={{backgroundColor: '#dbdbdb', height: 10}} />
      </View>
    );
  }
}

export default ContentNews;
