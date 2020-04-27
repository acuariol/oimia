import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import { View, Text, Icon, Header } from 'native-base';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


function Tabs() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Ved" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>

  );
}

class Videos extends Component {

  openDrawer = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };


  render(): React.ReactNode {
    return (

      <View style={styles.container}>
        <Header style={styles.header}>
          <Icon name='md-menu' style={{ color: '#fff' }} onPress={this.openDrawer} />
          <View>
            <Text style={styles.headerTextColor}>视频</Text>
          </View>
          <Icon name='menu' style={{ color: 'transparent' }} />
        </Header>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextColor: {
    color: '#fff',
  },
});


export default Videos;
