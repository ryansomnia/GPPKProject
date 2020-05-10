/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class ContentSlide extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', paddingLeft: 6}}>
          <View style={{padding: 6}}>
            <View
              style={{
                height: 160,
                width: 260,
                borderRadius: 8,
                backgroundColor: 'white',
              }}>
              <Image
                source={this.props.image}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderTopRightRadius: 7,
                  borderTopLeftRadius: 7,
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 8,
                  fontWeight: 'bold',
                  paddingTop: 8,
                }}>
                {this.props.title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  padding: 5,
                  marginLeft: 4,
                  paddingBottom: 10,
                }}>
                {this.props.isi}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ContentSlide;
