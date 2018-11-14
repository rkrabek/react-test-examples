import React from 'react';
import { Button } from './Button';
export class Parent extends React.Component {
  constructor(props: any) {
      super(props);
      this.state = {
          counter: 0
      }
      this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState((prevState) => {
      return prevState.counter += 1;
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <div>{this.state.counter}</div>
        <Button onClick={this.onClickHandler} />
      </React.Fragment>
    )
  }
}