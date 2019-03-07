import React from 'react';
import { shallow } from 'enzyme';
import Products from '..';

describe('Products', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Products />);
    expect(wrapper).toMatchSnapshot();
  });
});
