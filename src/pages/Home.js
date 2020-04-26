import React, { Component, createRef } from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Container,
  Footer,
  Drawer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
  View,
} from 'native-base';

import { connect } from 'react-redux';



class Home extends Component {


  openDrawer = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  render() {

    return (
      <Container>
        <Header style={styles.header}>
          <Icon name='md-menu' style={{ color: '#fff' }} onPress={this.openDrawer} />
          <View>
            <Text style={styles.headerTextColor}>首页</Text>
          </View>
          <Icon name='menu' style={{ color: 'transparent' }} />
        </Header>
        <View style={{ flex: 1, backgroundColor: '#f4f4f4', padding: 10 }}>

        </View>

      </Container>

    );
  }

}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextColor: {
    color: '#fff',
  },
});


export default connect()(Home);
