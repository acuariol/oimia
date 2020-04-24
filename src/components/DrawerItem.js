import React from 'react';
import { Icon, Text, View, Button } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import preset from '../styles/preset';

function DrawerItem({ icon, text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.iconBox}><Icon name={icon} style={styles.icon} /></View>
        <Text style={styles.listItemText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: preset.pa_4,
  },
  iconBox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 22,

  },
  listItemText: {
    color: '#fff',
    paddingLeft: preset.pa_5,
  },
});


export default DrawerItem;
