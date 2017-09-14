import { GET_SHIRT_ID } from '../constants';
import { getShirtID } from '../actions';

describe('getShirtID ', () => {
  it('should return the correct action type and shirt id', () => {
    const tempID = 1;
    const expectedResult = {
      type: GET_SHIRT_ID,
      shirtID: tempID,
    };
    expect(getShirtID(tempID)).toEqual(expectedResult);
  });
});
