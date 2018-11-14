import { Parent } from '../Parent';
import { Button } from '../Button';
import { mount, ReactWrapper } from 'enzyme';

import * as React from 'react';

it('is updated when ', () => {
  // render parent
  let parent: ReactWrapper = mount(<Parent />);
  parent.find(Button).simulate('click');
  expect(parent.first().text()).toEqual('1');
  parent.find(Button).simulate('click');
  expect(parent.first().text()).toEqual('2');
})
