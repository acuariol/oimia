import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import NotificationsScreen from './Notifications';
import Side from '../components/Side';

const Drawer = createDrawerNavigator();

class Main extends Component {
  render(): React.ReactNode {
    return (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <Side {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerLabel: '首页' }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{ drawerLabel: '通知' }} />
      </Drawer.Navigator>
    );
  }
}

export default Main;
