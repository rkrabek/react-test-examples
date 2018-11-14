import React from 'react';
import { getButtonText } from './buttonHelper';

export class Button extends React.Component {
    public props: any;

    constructor(props: any) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.onClick();
    }

    render() {
        return (<button onClick={this.clickHandler}>{getButtonText()}</button>);
    }
}