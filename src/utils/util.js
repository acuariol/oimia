import AsyncStorage from '@react-native-community/async-storage';

const getStoreItem = async (name = '') => {
  try {
    return await AsyncStorage.getItem(name);
  } catch (error) {
    return error;
  }
};

const setStoreItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return error;
  }
};

const removeStoreItem = async (name = '') => {
  try {
    const isHas = await AsyncStorage.getItem(name);
    if (!isHas) return false;
    await AsyncStorage.removeItem(name);
    return true;
  } catch (error) {
    return error;
  }
};


export { getStoreItem, setStoreItem, removeStoreItem };
