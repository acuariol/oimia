import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Thumbnail, Icon } from 'native-base';
import preset from '../styles/preset';
import lang from '../lang';

class CommentItem extends PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.item.id);
  };

  render() {
    const { item } = this.props;
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.itemContainer}>

          <View>
            <Thumbnail large square source={{ uri: item.avatar }} />
          </View>
          <View style={styles.content}>
            <Text style={{ color: textColor, fontSize: 14 }}>
              {item.username}
            </Text>

            <Text style={{ fontSize: 12 }} ellipsizeMode="tail" numberOfLines={2} >
              {item.comment}
            </Text>

            <View style={styles.action}>
              <View style={styles.actionItem}>
                <Icon name="md-time" style={styles.actionIcon} />
                <Text style={styles.actionText}>
                  {item.time} {lang['comments.time']}
                </Text>
              </View>

              <View style={styles.actionItem}>
                <Icon name="md-heart" style={styles.actionIcon} />
                <Text style={styles.actionText}> {item.like}</Text>
              </View>

              <View style={styles.actionItem}>
                <Icon name="md-text" style={styles.actionIcon} />
                <Text style={styles.actionText}>{item.commentNum}</Text>
              </View>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  content: {

    flex: 1,
    paddingHorizontal: preset.pa_4,
    justifyContent: 'space-between',

  },
  action: {
    flexDirection: 'row',

  },
  actionText: {
    fontSize: 12,
    color: '#6d6d6d',
    paddingRight: preset.pa_6,
  },
  actionIcon: {
    fontSize: 12,
    color: '#6d6d6d',
    marginRight: preset.pa_1,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


export default CommentItem;
