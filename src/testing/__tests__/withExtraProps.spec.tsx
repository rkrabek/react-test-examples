import { Button } from '../Button';
import { withExtraProps } from '../withExtraProps';
import { shallow } from 'enzyme';
import React from 'react';

// jest mock module factory
jest.mock('../Button', () => ({
  Button: () => {
    return null;
  }
}));

describe('The withExtraProps HOC', () => {
  it('passes an extra prop to the newly composed component', () => {
    let ButtonWithExtraProps = withExtraProps(Button, 5);
    let result = shallow(<ButtonWithExtraProps />);
    expect(result.props()).toEqual({extraCalculatedProp: 7});
  });
});
