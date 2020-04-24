import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Thumbnail, View } from 'native-base';
import * as Helper from '../utils/helper';

import { delay } from 'lodash';

class Welcome extends Component {

  delayId = null;

  componentDidMount(): void {
    this.delayId = delay(this.handleNavigation, 1200);
  }

  componentWillUnmount(): void {
    clearTimeout(this.delayId);
  }

  handleNavigation = () => {
    const { navigation } = this.props;
    Helper.isLogin().then(username => {
      if (username) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Guide' }],
        });
      }
    });

  };

  render(): React.ReactNode {
    return (
      <>
        <StatusBar hidden />
        <View style={styles.container}>
          <Thumbnail square style={styles.image} source={{ uri: 'http://acuario.cn/screenshot/logo.png' }} />
        </View>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {},
});


export default Welcome;
