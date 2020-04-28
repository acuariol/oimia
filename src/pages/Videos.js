import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { View, Text, Icon, Header } from 'native-base';
import ViewPager from '@react-native-community/viewpager';

import Ripple from '../components/Ripple';
import preset from '../styles/preset';
import mock from '../mock';

const screenWidth = Math.floor(Dimensions.get('window').width);

const scrollViewPaddingHorizontal = preset.pa_5;
const gutter = preset.pa_4;
const photoWidth = Math.floor((screenWidth - scrollViewPaddingHorizontal * 2 - gutter) / 2);

class Videos extends Component {
  constructor(props) {
    super(props);
    this.viewPager = React.createRef();
    this.state = {
      page: 0,
    };
  }

  openDrawer = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  renderVideoItem = ({ item }) => {
    return (
      <ImageBackground source={{ uri: item.uri }} style={styles.bgImage}>

      </ImageBackground>
    );
  };

  go = (page: number) => {
    console.log(page);
    this.viewPager.current.setPage(page);
  };

  onPageSelected = (e) => {
    this.setState({ page: e.nativeEvent.position });
  };


  render(): React.ReactNode {

    const { page } = this.state;
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Icon name="md-menu" style={{ color: '#fff' }} onPress={this.openDrawer} />
          <View>
            <Text style={styles.headerTextColor}>视频</Text>
          </View>
          <Icon name="menu" style={{ color: 'transparent' }} />
        </Header>

        <View>
          <View style={styles.tabBar}>
            <View style={{ flex: 1 }}>
              <Ripple onPress={() => this.go(0)}>
                <View style={{ paddingVertical: 12 }}>
                  <Text style={{ textAlign: 'center', color: page === 0 ? '#4050B5' : '#000' }}>Videos</Text>
                </View>
              </Ripple>
            </View>

            <View style={{ flex: 1 }}>
              <Ripple onPress={() => this.go(1)}>
                <View style={{ paddingVertical: 12 }}>
                  <Text style={{ textAlign: 'center',color: page === 1 ? '#4050B5' : '#000' }}>Photos</Text>
                </View>
              </Ripple>
            </View>
          </View>

          <View style={{ height: 1, backgroundColor: '#ccc' }} />

        </View>

        <ViewPager initialPage={0} style={styles.viewPager} ref={this.viewPager} onPageSelected={this.onPageSelected}>
          <View key="1" style={styles.tabVideos}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: preset.pa_5 }}
              data={mock.video.videoList}
              renderItem={this.renderVideoItem}
            />
          </View>
          <View key="2" style={styles.tabPhotos}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingHorizontal: scrollViewPaddingHorizontal, paddingVertical: preset.pa_10 }}
            >
              <View style={styles.photoView}>
                {
                  mock.video.photosList.map((item, index) => (
                    <Image
                      resizeMode="cover"
                      style={[styles.photo, { marginRight: (index + 1) % 2 === 1 ? gutter : 0 }]}
                      key={item.id}
                      source={{ uri: item.uri }}
                    />
                  ))
                }
              </View>
            </ScrollView>

          </View>
        </ViewPager>
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
  tabBar: {
    flexDirection: 'row',
  },
  viewPager: {
    flex: 1,
  },
  tabVideos: {
    flex: 1,
  },
  tabPhotos: {
    flex: 1,
  },
  bgImage: {
    height: 150,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    marginBottom: preset.ma_5,
  },
  photoView: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  photo: {
    width: photoWidth,
    height: photoWidth,
    marginBottom: gutter,
  },
});


export default Videos;
