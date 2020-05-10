/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonNav from '../../component/molecules/ButtonNavbar';
import CoverHome from '../../component/molecules/Cover';
import News from '../../component/molecules/News';
import SearchBar from '../../component/molecules/SearchBar';
import SlideNews from '../../component/molecules/SlideNews';
import ContentSlide from '../../component/molecules/ContentSlide';
import ContentNews from '../../component/molecules/ContentNews';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: '#f9f9f9', flex: 1}}>
      <SearchBar />
      <View
        style={{
          backgroundColor: 'red',
          height: 10,
          width: 10,
          position: 'absolute',
          borderRadius: 10,
          top: 14,
          left: 295,
        }}
      />
      <ScrollView>
        <CoverHome />
        <SlideNews />
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            <ContentSlide
              title="Renungan"
              image={require('../../assets/icon/banner3.jpeg')}
              isi="Iblis berkuasa di area yang kamu sembunyikan"
            />
            <ContentSlide
              title="Renungan"
              image={require('../../assets/icon/gambar2.jpg')}
              isi="Iblis berkuasa di area yang kamu sembunyikan"
            />
          </View>
        </ScrollView>
        <News />
        <ContentNews
          title="Renungan"
          image={require('../../assets/icon/gambar1.jpg')}
          isi="Iblis berkuasa di area yang kamu sembunyikan"
        />
        <ContentNews
          title="Renungan"
          image={require('../../assets/icon/gambar2.jpg')}
          isi="Iblis berkuasa di area yang kamu sembunyikan"
        />
      </ScrollView>
      <View style={{flex: 1}} />
      <ButtonNav />
    </View>
  );
};

export default HomeScreen;
