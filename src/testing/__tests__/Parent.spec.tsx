import { Button } from '../Button';
import { Parent, ParentState } from '../Parent';
import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import * as React from 'react';

describe('The Parent', () => {
  it('clicks stuff', () => {
    // render parent
    // mount is only used here because of a edge case where shallow render does not play
    // nicely with setting state
    let parentWrapper: ReactWrapper<{}, ParentState, Parent> = mount(<Parent />);
    parentWrapper.find(Button).props().onClick();
    expect(parentWrapper.instance().state.counter).toEqual(1);
  });
  
  it('spies on your function and or mocks it', () => {
    let clickHandlerSpy = jest.spyOn(Parent.prototype, 'onClickHandler').mockImplementation((foo) => {return foo});
    let parentWrapper: ShallowWrapper<{}, ParentState, Parent> = shallow(<Parent />);
    // this console log shows it's the spied upon implementation that's being called
    console.log(parentWrapper.find(Button).props().onClick('mock onClick was called'));
    parentWrapper.find(Button).props().onClick();
    expect(clickHandlerSpy).toHaveBeenCalledTimes(2);
  });
});
