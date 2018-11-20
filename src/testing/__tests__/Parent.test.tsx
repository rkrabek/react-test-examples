import { Parent } from '../Parent';
import { Button } from '../Button';
import { mount, ReactWrapper } from 'enzyme';

import * as React from 'react';

// integration test without mocking
it('displayed counter text is updated when child button is clicked ', () => {
  // render parent
  let parent: ReactWrapper<{}, {}, Parent> = mount(<Parent />);
  parent.find(Button).simulate('click');
  expect(parent.first().text()).toEqual('1');
  parent.find(Button).simulate('click');
  expect(parent.first().text()).toEqual('2');
})
