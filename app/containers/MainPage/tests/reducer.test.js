import { categoryReducer } from '../reducer';
import { updateCategory } from '../actions';

describe('MainPage Reducers', () => {
  let state;

  beforeEach(() => {
    state = null;
  });
  it('should return the initial state', () => {
    const expectedResult = state;
    expect(categoryReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the updateCategory action creator properly', () => {
    expect(categoryReducer(null, updateCategory('Train'))).toEqual('train');
  });
});
