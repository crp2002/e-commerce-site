import { IDshirtReducer } from '../reducer';
import { getShirtID } from '../actions';

describe('DetailsPage Reducer', () => {
  let state;
  beforeEach(() => {
    state = null;
  });
  it('should return the initial state', () => {
    const expectedResult = state;
    expect(IDshirtReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the getShirtID action creator properly', () => {
    expect(IDshirtReducer(null, getShirtID(1))).toEqual(1);
  });
});
