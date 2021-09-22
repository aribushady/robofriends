import React from 'react';

const Scroll = (props) => {
    return(
    <div style={{overflowY: 'scroll', height: '600px', margin: '50px', padding: '25px' }}>
        {props.children}
    </div>
    );
}

export default Scroll;