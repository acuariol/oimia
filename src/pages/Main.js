import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Side from '../components/Side';

import HomeScreen from './Home';
import NotificationsScreen from './Notifications';
import ProfileScreen from './Profile';
import CommentsScreen from './Comments';
import CollectionsScreen from './Collections';
const Drawer = createDrawerNavigator();

class Main extends Component {
  render(): React.ReactNode {
    return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <Side {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: '首页' }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{ drawerLabel: '通知' }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerLabel: '个人中心' }} />
        <Drawer.Screen name="Comments" component={CommentsScreen} options={{ drawerLabel: '评论' }} />
        <Drawer.Screen name="Collections" component={CollectionsScreen} options={{ drawerLabel: '发现' }} />
      </Drawer.Navigator>
    );
  }
}

export default Main;
