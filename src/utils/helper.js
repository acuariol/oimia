import { getStoreItem, removeStoreItem, setStoreItem } from './util';
import to from 'await-to-js';

export const isLogin = async () => {
  const [err, username] = await to(getStoreItem('username'));
  if (err) return null;
  return username;
};


export const loginOut = async () => {
  const [err, success] = await to(removeStoreItem('username'));
  if (err) return null;
  return success;
};

export const loginIn = async (username) => {
  const [err, success] = await to(setStoreItem('username', username));
  if (err) return false;
  return success;
};
