import { GET_SHIRT_ID } from './constants';

export const getShirtID = (shirtID) => { // eslint-disable-line
  return {
    type: GET_SHIRT_ID,
    shirtID,
  };
};
