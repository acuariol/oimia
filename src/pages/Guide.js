import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';
import { connect } from 'react-redux';
import preset from '../styles/preset';
import * as actions from '../store/actions/index';
import lang from '../lang';

const image = { uri: 'http://acuario.cn/screenshot/wallpaper.jpg' };

const Guide = ({ navigation, dispatch }) => {

  const navigate = path => {
    navigation.navigate(path);
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>{lang['app.name']}</Text>
          <Text style={styles.subTitle}>Social Media App</Text>
        </View>
        <View style={styles.bottom}>
          <Button
            style={styles.btn}
            onPress={() => {
              dispatch(actions.toggleLogInType('signIn'));
              navigate('Login');
            }}
          >
            <Text>登录</Text>
          </Button>

          <Button
            style={styles.btn}
            onPress={() => {
              dispatch(actions.toggleLogInType('signUp'));
              navigate('Login');
            }}
          >
            <Text>新建账户</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(80,80,80,0.4)',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    paddingBottom: preset.pa_6,
    fontSize: 40,
    letterSpacing: 2,
    transform: [{ translateY: -60 }],
  },
  subTitle: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1,
    transform: [{ translateY: -60 }],
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    padding: preset.pa_6,
    marginBottom: preset.pa_12,
  },
  btn: {
    marginTop: preset.ma_3,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default connect()(Guide);
