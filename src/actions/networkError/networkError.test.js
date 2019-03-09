import NETWORK_ERROR from './actionType';
import networkError from './networkErrorAction';

describe('Network error', () => {
  const payload = 'ajhkjai839eqhenack';
  it('should return an action object once the network error action is called', () => {
    expect(networkError(payload)).toEqual({
      type: NETWORK_ERROR,
      payload
    });
  });
});
