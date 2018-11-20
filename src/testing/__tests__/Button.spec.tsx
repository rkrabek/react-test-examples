import { Button, ButtonProps } from '../Button';
import { shallow, ShallowWrapper } from 'enzyme';
import * as buttonHelper from '../buttonHelper';
import * as React from 'react';

// This enables manual mocking from __mocks__ folder
// jest.mock('../buttonHelper');

// In file manual mocking
// jest.spyOn(buttonHelper, 'getButtonText').mockImplementation(() => 'spied on text');

describe('The Button', () => {
  it('handles clicks', () => {
    // render parent
    let clickHandlerMock = jest.fn()
    let buttonWrapper: ShallowWrapper<ButtonProps, null, Button> = shallow(<Button onClick={clickHandlerMock} />);
    buttonWrapper.props().clickHandler();
    expect(clickHandlerMock).toHaveBeenCalledTimes(1);
  })

  it('can take external button texts as input', () => {
    let buttonWrapper: ShallowWrapper<ButtonProps, null, Button> = shallow(<Button />);
    // logs out text of original implementation or mock implementations
    // try uncommenting the different methods of mocking above and see the
    // console log text change
    console.log(buttonWrapper.first().text())
  })
})
