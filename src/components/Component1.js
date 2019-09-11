import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            { props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Learn Spanish</h1>
                        
                    </div>

                </div>
            )}
        </Spring>
    )
}

const c1Style = {
    // background: 'lightgrey',
    // color:'brown',
    padding: '1.5rem',
}
