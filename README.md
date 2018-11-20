This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# react-test-examples
Some examples of how to test react components and mock modules

`withExtraProps.tsx` - HOC which adds an extra prop to the component it wraps

`Parent.tsx` - Component which renders a counter and a Button component which increments the counter when clicked

`Button.tsx` - Component which renders a button and takes a callback as a prop to call when the button is clicked

`buttonHelper.ts` - A simple util file which exports a function which returns a string

`.spec` files are unit tests
`.test` files are integration tests
