import * as actionType from './actionType';

export default {
  state: {
    loginType: 'signIn',
  },

  effects: {},

  reducers: {
    [actionType.TOGGLE_LOGIN_TYPE](state, { payload }) {
      return {
        ...state,
        loginType: payload.type,
      };
    },

  },

};
