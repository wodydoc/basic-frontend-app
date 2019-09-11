import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
    render() {
        return (
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{delay: 1000, duration: 1000}}
        >
            { props => (
                <div style={props}>
                    <div style={c2Style}>
                        <h1>By singing Spanish songs</h1>
                        
                    </div>

                </div>
            )}
        </Spring>
        )
    }
}

const c2Style = {
    // background: 'slateblue',
    // color:'white',
    padding: '1.5rem'
}

export default Component2;
