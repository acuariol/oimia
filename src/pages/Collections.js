import React, { Component } from 'react';

import { Dimensions, FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import { View, Text, Header, Icon } from 'native-base';
import preset from '../styles/preset';
import mock from '../mock';
import CollectionItem from '../components/CollectionItem';

const screenWidth = Math.floor(Dimensions.get('window').width);

const scrollViewPaddingHorizontal = preset.pa_5;
const gutter = preset.pa_4;
const photoWidth = Math.floor((screenWidth - scrollViewPaddingHorizontal * 2 - gutter) / 2);


class Collections extends Component {
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
            <Text style={styles.headerTextColor}>发现</Text>
          </View>
          <Icon name='menu' style={{ color: 'transparent' }} />
        </Header>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: scrollViewPaddingHorizontal, paddingVertical: preset.pa_10 }}
        >
          <View style={styles.photoView}>
            {
              mock.collection.list.map((item, index) => (
                <CollectionItem
                  photoWidth={photoWidth}
                  item={item}
                  style={[styles.photo, { marginRight: (index + 1) % 2 === 1 ? gutter : 0}]}
                  key={item.id}
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
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextColor: {
    color: '#fff',
  },
  photoView: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  photo: {
    width: photoWidth,
    marginBottom: gutter,
  },
});


export default Collections;
