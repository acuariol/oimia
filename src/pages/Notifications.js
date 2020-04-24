import React, { Component } from 'react';
import { View, Text, Header, Icon, Footer, FooterTab, Container ,Button} from 'native-base';
import { StyleSheet } from 'react-native';


class Notifications extends Component {
  openDrawer = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  render(): React.ReactNode {
    return (
      <Container>
        <Header style={styles.header}>
          <Icon name='md-menu' style={{ color: '#fff' }} onPress={this.openDrawer} />
          <View>
            <Text style={styles.headerTextColor}>通知</Text>
          </View>
            <Icon name='md-more' style={{ color: '#fff' }} />
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


export default Notifications;
