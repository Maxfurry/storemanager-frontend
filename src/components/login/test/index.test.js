import React from 'react';
import { mount } from 'enzyme';
import { Login } from '..';

describe('LoginForm', () => {
  it('should match snapshot', () => {
    const wrapper = mount(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('should change the state after change the input value', () => {
  const name = 'fury';
  const wrapper = mount(<Login />);
  wrapper.find('input[type="text"]').simulate('change', {
    target: { name }
  });
  wrapper.update();
  expect(wrapper.find('input[type="text"]').prop('name')).toContain('name');
  expect(wrapper.find('input[type="password"]').prop('name')).toContain('password');
});

it('should simulate on submit event ', () => {
  const props = {
    userLogin: () => {}
  };
  const wrapper = mount(<Login {... props} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: jest.fn()
  });
  expect(wrapper.find('form')).toBeDefined();
});
