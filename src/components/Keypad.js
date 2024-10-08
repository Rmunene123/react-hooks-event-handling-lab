// Code Keypad Component Here

import React from 'react';

function Keypad() {
    // Event handler function for the onChange event
    const handleChange = () => {
        console.log('Entering password...');
    };

    return (
        <div>
            
            <input 
                type="password" 
                onChange={handleChange} 
            />
        </div>
    );
}

export default Keypad;
