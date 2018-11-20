import React from 'react';
import { ButtonProps } from './Button';

export function withExtraProps(WrappedComponent: React.ComponentType<ButtonProps>, foo: number) {
    return class extends React.Component {
        public render() {
            let extraCalculatedProp = 2 + foo;
            return <WrappedComponent extraCalculatedProp={extraCalculatedProp}/>
        }
    }
}