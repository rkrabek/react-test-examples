import React from 'react';
export function withExtraProps(WrappedComponent: any, foo: any) {
    return class extends React.Component {
        public render() {
            let extraCalculatedProp = 2 + foo;
            return <WrappedComponent extraCalculatedProp={extraCalculatedProp}/>
        }
    }
}