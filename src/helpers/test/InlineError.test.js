import React from 'react';
import { shallow } from 'enzyme';
import InlineError from '../InlineError';

describe('SignIn Form', () => {
  test('should matches the snapshot', () => {
    const wrapper = shallow(<InlineError />);
    expect(wrapper).toMatchSnapshot();
  });
});
