import { Button } from '../Button';
import { Parent } from '../Parent';
import { shallow, mount } from 'enzyme';
import * as React from 'react';

it('clicks stuff', () => {
  // render parent
  let parentWrapper: any = mount(<Parent />);
  parentWrapper.find(Button).props().onClick();
  expect(parentWrapper.instance().state.counter).toEqual(1);
})

it('spies on your function and or mocks it', () => {
  let clickHandlerSpy = jest.spyOn(Parent.prototype, 'onClickHandler').mockImplementation((foo) => {return foo});
  let parentWrapper: any = shallow(<Parent />);
  // this console log shows it's the spied upon implementation that's being called
  console.log(parentWrapper.find(Button).props().onClick('hi'));
  parentWrapper.find(Button).props().onClick();
  expect(clickHandlerSpy).toHaveBeenCalledTimes(2);
})