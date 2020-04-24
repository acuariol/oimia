import * as actionType from '../actionType';

export const signIn = ({ username, password }) => {
  return {
    type: actionType.SIGN_IN,
    payload: {
      username,
      password,
    },
  };
};

export const toggleLogInType = (type) => {
  return {
    type: actionType.TOGGLE_LOGIN_TYPE,
    payload: {
      type,
    },
  };
};
