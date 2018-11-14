import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// // someUtil.js exports named functions
// export const fooFunction = (value) => {
//   return value + 2;
// };

// // someComponent to to test uses someUtil 
// import { fooFunction } from './someUtil';
// export class SomeComponent extends React.Component {
//   render() {
//     return (<div>{fooFunction(1)}</div>)
//   }
// }

// // someComponent.test.js FOR NAMED IMPORTS EXAMPLE 
// import * as SomeUtil from './someUtil';
// const fooFunctionMock = jest.spyOn(SomeUtil, 'fooFunction').mockImplementation(() => { return 'hi' }); 
// // OR (maybe)
// const someUtilMock = jest.genMockFromModule('./someUtil');
// someUtilMock.fooFunction = jest.fn(() => {return 'hi'});
// // OR (maybe)
// import * as SomeUtil from './someUtil';
// jest.mock('./someUtil')
// SomeUtil.fooFunction = jest.fn(() => {return 'hi'})


// // in test
// // 1. call something in module you're testing to trigger fooFunction
// expect(SomeUtil.fooFunction).toHaveBeenCalledTimes(1)


// import module from 'module'
// jest.mock('module')

// expect(module.myMethod).toHaveBeenCalledWith('hi')

// // buttonComponent.js
// export default class ButtonComponent extends React.Component {
//   render() {
//     return (<button onClick={this.props.onClick}></button>);
//   }
// }

// // parentComponent.js
// import ButtonComponent from './ButtonComponent';
// class ParentComponent extends React.Component {
//   onClickHandler() {
//     window.alert('clicked!');
//   }
  
//   render() {
//     return (
//       <ButtonComponent onClick={this.onClickHandler} />
//     )
//   }
// }

// // parentComponent.test.js 
// import ButtonComponent from './ButtonComponent';
// jest.mock('./ButtonComponent', () => {
//   return jest.fn().mockImplementation(({ onClick }) => {
//     {
//       onClick: onClick
//     }
//   });
// });
// it('', () => {
//   // render parent  
//   parentWrapper = shallow()
//   parentWrapper.find(ButtonComponent).onClick()
// })

// // OR (maybe)
// const ButtonComponent = jest.genMockFromModule('./ButtonComponent')

// // someOtherFile.js 
// // mocking a class - automocks everything at the top level of the object
// import SomeClass from './SomeClass';
// jest.mock('./SomeClass')

// //  have values return something -> use jest module factory
// jest.mock('./SomeClass', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       getValue: jest.fn()
//     }
//   })}
// })

// jest.mock('./moment', () => {
//   return {
//     getTime: jest.fn(),
//     getNotTime: jest.fn()
//   }
// });

// expect(moment.getTime).toHaveBeenNthCalledWith("a time")