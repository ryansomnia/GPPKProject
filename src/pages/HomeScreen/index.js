/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {CardItem, Body, Card, Container, Left, Header} from 'native-base';
import Carousel from 'react-native-banner-carousel';

const images = [
  '../../../icon/banner1.jpeg',
  '../../../icon/banner2.jpeg',
  '../../../icon/banner3.jpeg',
];

const {width} = Dimensions.get('window');
const height = (width * 100) / 60; //60%

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: '#f9f9f9', flex: 1}}>
      {/*---------SEARCH ------*/}
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
                  borderRadius: 8,
                  paddingLeft: 30,
                  paddingRight: 135,
                  paddingVertical: 0,
                }}
              />
              <Image
                source={require('../../../icon/search.png')}
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
            source={require('../../../icon/bell.png')}
            style={{resizeMode: 'contain', height: 20, width: 50}}
          />
        </View>
      </View>
      {/*---------COVER ------*/}
      <ScrollView>
        <View style={{marginTop: 5}}>
          <Image
            source={require('../../../icon/banner1.jpeg')}
            style={{width: '100%', height: 200, resizeMode: 'contain'}}
          />
        </View>
        {/*---------SLIDE NEWS ------*/}
        <View style={{backgroundColor: '#dbdbdb', height: 5}} />
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
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row', paddingLeft: 6}}>
            <View style={{padding: 6}}>
              <View
                style={{
                  height: 140,
                  width: 250,
                  borderRadius: 8,
                  backgroundColor: 'white',
                }}>
                <Image
                  source={require('../../../icon/banner3.jpeg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderTopRightRadius: 7,
                    borderTopLeftRadius: 7,
                  }}
                />
                <Text style={{fontSize: 13, marginLeft: 8, fontWeight: 'bold'}}>
                  - Renungan
                </Text>
                <Text style={{fontSize: 12, padding: 5}}>
                  Tuhan Berkuasa di area yang kamu akui
                </Text>
              </View>
            </View>
            <View style={{paddingHorizontal: 6}}>
              <View
                style={{
                  height: 150,
                  width: 220,
                  borderRadius: 8,
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                }}>
                <Image
                  source={require('../../../icon/banner2.jpeg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderTopRightRadius: 7,
                    borderTopLeftRadius: 7,
                  }}
                />
                <Text style={{fontSize: 13, marginLeft: 8, fontWeight: 'bold'}}>
                  - Prayer Request
                </Text>
                <Text style={{fontSize: 12, padding: 5}}>
                  Tuhan Berkuasa di area yang kamu akui
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {/*------------NEWS------------*/}
        <View style={{padding: 16}}>
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
        <View>
          <View
            style={{
              height: 190,
              width: '100%',
              backgroundColor: 'white',
              paddingBottom: 5,
            }}>
            <Image
              source={require('../../../icon/gambar1.jpg')}
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
              - Prayer Request
            </Text>
            <Text style={{fontSize: 12, padding: 5}}>
              Tuhan Berkuasa di area yang kamu akui
            </Text>
          </View>
          <View style={{backgroundColor: '#dbdbdb', height: 10}} />
        </View>
        <View style={{paddingTop: 10}}>
          <View>
            <View
              style={{
                height: 170,
                width: '100%',
                backgroundColor: 'white',
              }}>
              <Image
                source={require('../../../icon/gambar2.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                }}
              />
              <Text style={{fontSize: 13, marginLeft: 8, fontWeight: 'bold'}}>
                - Online Service
              </Text>
              <Text style={{fontSize: 12, padding: 5}}>
                Tuhan Berkuasa di area yang kamu akui
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/*--------BottomNavBar---------*/}
      <View style={{flex: 1}} />
      <View
        style={{height: 54, flexDirection: 'row', backgroundColor: '#d1cebd'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../../icon/home_black.png')}
            style={{resizeMode: 'contain', height: 32}}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../icon/news.png')}
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
            source={require('../../../icon/chat.png')}
            style={{height: 29, resizeMode: 'contain'}}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../../icon/user.png')}
            style={{resizeMode: 'contain', height: 26, width: 50}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default HomeScreen;
