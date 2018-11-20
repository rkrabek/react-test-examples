import { Button } from '../Button';
import { shallow } from 'enzyme';
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
    let buttonWrapper: any = shallow(<Button onClick={clickHandlerMock} />);
    buttonWrapper.instance().clickHandler();
    expect(clickHandlerMock).toHaveBeenCalledTimes(1);
  })

  it('can take external button texts as input', () => {
    let buttonWrapper: any = shallow(<Button />);
    // logs out text of original implementation or mock implementations
    console.log(buttonWrapper.first().text())
  })
})
