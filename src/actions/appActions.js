import ACTIONS from '../constants/actionTypes';

export const configLoaded = config => {
  return {
    type: ACTIONS.CONFIG_LOADED,
    config: config,
  };
};

export const requestHeirarchy = () => {
  return {
    type: ACTIONS.REQUEST_HEIRARCHY
  };
};

export const receiveHeirarchy = payload => {
  return {
    type: ACTIONS.RECEIVE_HEIRARCHY,
    heirarchy: payload,
  };
};