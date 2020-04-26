import React, { PureComponent } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { Header, Icon, Text, View } from 'native-base';
import CommentItem from '../components/CommentItem';
import mock from '../mock';
import preset from '../styles/preset';

class Comments extends PureComponent {

  state = {
    selected: (new Map(): Map<string, boolean>),
  };

  keyExtractor = item => item.id;

  onPressItem = (id: string) => {

    this.setState((state) => {
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id));
      return { selected };
    });
  };

  renderItem = ({ item }) => (
    <CommentItem
      item={item}
      onPressItem={this.onPressItem}
      selected={!!this.state.selected.get(item.id)}
    />
  );

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
            <Text style={styles.headerTextColor}>评论</Text>
          </View>
          <Icon name='menu' style={{ color: 'transparent' }} />
        </Header>

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: preset.pa_5 }}
          data={mock.comments.list}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => {
            return (
              <View style={{ height: 1, width: '100%', backgroundColor: '#dcdcdc', marginVertical: preset.pa_5 }} />
            );
          }}
        />
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


export default Comments;
