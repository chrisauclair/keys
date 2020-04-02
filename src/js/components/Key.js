import React from 'react';
import '../../css/Key.css'

function Key(props) {

    function handleClick(e) {
        e.preventDefault();
        console.log('The key was clicked.');
    }

    return (
        <div className="Key" onClick={handleClick}>
            {props.note}
        </div>
    );
}

export default Key;
