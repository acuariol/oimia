import React, { Component } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import * as Helper from '../utils/helper';
import preset from '../styles/preset';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import lang from '../lang';
import DrawerItem from './DrawerItem';

class Side extends Component {

  alert = () => {
    Alert.alert(
      '确定退出登录吗？',
      null,
      [
        { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: '确定', onPress: this.handleLogOut },
      ],
      { cancelable: false },
    );
  };

  handleLogOut = () => {
    const { navigation } = this.props;
    Helper.loginOut().then(success => {
      if (success) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Guide' }],
        });
      } else {
        Alert.alert(
          '退出登录出错！',
          null,
          [
            { text: '确定', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          ],
          { cancelable: false },
        );

      }
    });
  };

  render(): React.ReactNode {

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{lang['app.name']}</Text>

        <DrawerContentScrollView style={styles.listArea}>
          <DrawerItem icon="logo-twitter" text="首页" onPress={() => navigation.jumpTo('Home')} />
          <DrawerItem icon="md-headset" text="通知" onPress={() => navigation.jumpTo('Notifications')} />
          <DrawerItem icon="md-headset" text="个人中心" onPress={() => navigation.jumpTo('Profile')} />
          <DrawerItem icon="md-headset" text="评论中心" onPress={() => navigation.jumpTo('Comments')} />
          <DrawerItem icon="md-headset" text="发现" onPress={() => navigation.jumpTo('Collections')} />
          <DrawerItem icon="md-headset" text="视频" onPress={() => navigation.jumpTo('Videos')} />
        </DrawerContentScrollView>

        <DrawerItem icon="ios-log-out" text="退出登录" onPress={this.alert} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4050B5',
    flex: 1,
    padding: preset.pa_7,
    justifyContent: 'space-between',
  },
  listArea: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: preset.pa_10,
  },

});

export default Side;
