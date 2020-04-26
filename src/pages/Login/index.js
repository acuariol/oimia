import React, { useState } from 'react';

import { ImageBackground, ScrollView } from 'react-native';
import { Text, View } from 'native-base';

import { connect } from 'react-redux';
import styles from './styles';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import * as actions from '../../store/actions/index';
import lang from '../../lang';

const SignInImage = { uri: 'http://acuario.cn/screenshot/sign_in_bg.jpg' };
const SignUpImage = { uri: 'http://acuario.cn/screenshot/sign_up_bg.png' };

const Login = ({ navigation, loginType: type, dispatch }) => {

  const setType = (type) => {
    dispatch(actions.toggleLogInType(type));
  };


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground source={type === 'signIn' ? SignInImage : SignUpImage} style={styles.image}>
          <View style={styles.imageInner}><Text style={styles.title}>{lang['app.name']}</Text></View>
        </ImageBackground>
      </View>

      <ScrollView style={styles.formArea} contentContainerStyle={{ padding: 20 }}>
        {type === 'signIn' ?
          <SignIn setType={() => setType('signUp')} navigation={navigation} />
          : <SignUp setType={() => setType('signIn')} navigation={navigation} />}
      </ScrollView>
    </View>
  );
};


export default connect(state => ({ loginType: state.loginType }))(Login);
