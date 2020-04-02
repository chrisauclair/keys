import React from 'react';
import Key from "./Key";

function Keyboard() {
    return (
        <div className="Keyboard">
            <Key note={'C'} octave={3} />
            <Key note={'D'} octave={3} />
        </div>
    );
}

export default Keyboard;
