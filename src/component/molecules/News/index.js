/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const News = () => {
  return (
    <View>
      <View style={{paddingTop: 16, paddingLeft: 16}}>
        <View
          style={{
            backgroundColor: 'green',
            width: 50,
            padding: 5,
            borderRadius: 7,
          }}>
          <Text style={{color: 'white'}}>News</Text>
        </View>
      </View>
    </View>
  );
};

export default News;
