import { Dimensions, StyleSheet } from 'react-native';
import preset from '../../styles/preset';

const halfScreenHeight = Math.round(Dimensions.get('window').height * 0.4);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageInner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(80,80,80,0.4)',
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    letterSpacing: 2,
    padding: preset.py_4,
  },
  top: {
    height: halfScreenHeight,
    // flex: 2,
  },
  formArea: {
    flex: 1,
    // padding: preset.pa_8,
    // height: halfScreenHeight,
  },
  formItem: {
    marginTop: preset.mt_5,
  },
  btn: {
    marginTop: preset.mt_10,
    marginBottom: preset.mb_12,
    display: 'flex',
    justifyContent: 'center',
  },
  helpText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles
