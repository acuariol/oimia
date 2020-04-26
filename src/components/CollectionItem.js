import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import lang from '../lang';
import preset from '../styles/preset';


function CollectionItem({ style, item, photoWidth }) {

  return (
    <View style={[...style, { borderWidth: 1, borderColor: 'rgba(215,215,215,0.73)' }]}>
      <Image resizeMode="cover" source={{ uri: item.uri }} style={{ width: '100%', height: photoWidth - 50 }} />
      <View style={styles.content}>
        <Text>{item.title}</Text>
        <View style={styles.action}>

          <Text style={styles.actionText}>
            {item.photos} {lang['collection.photos']}
          </Text>
          <View style={styles.verticalLine} />
          <Text style={styles.actionText}>
            {item.videos} {lang['collection.videos']}
          </Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: preset.pa_3,
  },
  action: {
    flexDirection: 'row',
    marginVertical: preset.pa_1,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 12, color: '#676767',
  },
  verticalLine: {
    width: 1,
    height: '100%',
    marginVertical: preset.pa_1,
    backgroundColor: '#ccc',
    marginHorizontal: preset.pa_2,
  },
});


export default CollectionItem;
