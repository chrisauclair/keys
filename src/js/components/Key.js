import React from 'react';
import '../../css/Key.css'
const Synth = window.Synth;

function Key(props) {

    function handleClick(e) {
        e.preventDefault();
        Synth.play('piano', props.note, props.octave, 2);
    }

    return (
        <div className="Key" onClick={handleClick}>
            {props.note}{props.octave}
        </div>
    );
}

export default Key;
