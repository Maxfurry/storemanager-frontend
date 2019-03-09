import React from 'react';
import { shallow } from 'enzyme';
import RedirectLoader from '..';

describe('RedirectLoader', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<RedirectLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});
