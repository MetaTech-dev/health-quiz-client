import React from 'react';

function ComponentX(props) {
    console.log(props)
    return (
        <div>{props.text}</div>
    )
}

export default ComponentX;