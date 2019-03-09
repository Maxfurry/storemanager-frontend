import React from 'react';
import { shallow } from 'enzyme';
import { FetchProductsComponent } from '..';

describe('Products', () => {
  it('should match snapshot', () => {
    const props = {
      getProducts: jest.fn(),
      product: {
        productsArray: [{
          quantity: 3
        }]
      }
    };
    const wrapper = shallow(<FetchProductsComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const props = {
      getProducts: jest.fn(),
      product: {
        productsArray: [{
          quantity: 0
        }]
      }
    };
    const wrapper = shallow(<FetchProductsComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
