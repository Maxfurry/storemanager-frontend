import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '..';

describe('LoginForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
