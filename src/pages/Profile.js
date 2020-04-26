import React, { Component } from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Image } from 'react-native';
import { Icon, Text, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import mock from '../mock';
import lang from '../lang';

import preset from '../styles/preset';

const profile_cover  = 'http://acuario.cn/assets/oimia/profile_cover.jpg';

const halfScreenHeight = Math.floor(Dimensions.get('window').height * 0.4);
const screenWidth = Math.floor(Dimensions.get('window').width);

const scrollViewPaddingHorizontal = preset.pa_5;
const gutter = preset.pa_4;
const photoWidth = Math.floor((screenWidth - scrollViewPaddingHorizontal * 2 - gutter) / 2);

class Profile extends Component {

  openDrawer = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  render(): React.ReactNode {

    const { barData } = mock.profile;
    const itemArr = Object.keys(barData).map(key => (
      <View key={key}>
        <Text style={[styles.coverViewTextColor, styles.num]}>{barData[key]}</Text>
        <Text style={[styles.coverViewTextColor, styles.label]}>{lang[`profile.${key}`]}</Text>
      </View>
    ));

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name='md-menu' style={{ color: '#fff' }} onPress={this.openDrawer} />
        </View>

        <ImageBackground source={{uri:profile_cover}} style={styles.bgImage}>
          <View style={styles.coverView}>
            <Text style={[styles.coverViewTextColor, styles.title]}>UserName</Text>
            <Text style={[styles.coverViewTextColor, styles.address]}>{mock.profile.address}</Text>

            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']}>
              <View style={styles.showBar}>
                {itemArr}
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingHorizontal:scrollViewPaddingHorizontal, paddingVertical: preset.pa_10 }}
        >
          <View style={styles.photoView}>
            {
              mock.profile.photosList.map((item, index) => (
                <Image
                  resizeMode="cover"
                  style={[styles.photo, { marginRight: (index + 1) % 2 === 1 ? gutter : 0 }]}
                  key={item.id}
                  source={{uri:item.uri}}
                />
              ))
            }
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 54,
    position: 'absolute',
    zIndex: 99999,
    paddingHorizontal: preset.pa_2,
    top: 0,
    left: 0,
    right: 0,
  },
  headerTextColor: {
    color: '#fff',
  },
  bgImage: {
    height: halfScreenHeight,
    resizeMode: 'cover',
    justifyContent: 'center',
    width:'100%'
  },
  coverView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
  },
  coverViewTextColor: {
    color: '#fff',
  },
  showBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: preset.pa_4,
  },
  photoView: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },

  title: {
    textAlign: 'center',
    fontSize: 26,
  },

  address: {
    textAlign: 'center',
    fontSize: 13,
    paddingBottom: preset.pa_5,
    paddingTop: preset.pa_3,
  },

  num: {
    fontSize: 26,
  },

  label: {
    fontSize: 12,
    transform: [{ translateY: -4 }],
  },

  photo: {
    width: photoWidth,
    height: photoWidth,
    marginBottom:gutter
  },

});


export default Profile;
