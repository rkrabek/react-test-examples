import { Button } from '../Button';
import { withExtraProps } from '../withExtraProps';
import { shallow } from 'enzyme';
import React from 'react';

// jest.mock('../Button', () => () => { return <div></div> });
jest.mock('../Button', () => ({
    Button: () => {
      return null;
      //<div id="mockUserCom" onClick={props.onClick}></div>)
    }
  }));

it('calls extra calback', () => {
    // let result = shallow(<Button />);
    let HOC = withExtraProps(Button, 5);
    let result = shallow(<HOC />);
    expect(result.props()).toEqual({count: 7});
})