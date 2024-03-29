import React from 'react';

interface hamburgerProps {
    color: string,
}

export default function Hamburger ({color} : hamburgerProps) {

    let styles = {
        fill: color
    }

    return (
        <div>
            <svg version="1.1" baseProfile="basic" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                <g id="hamburger-icon">
                    <rect x="-1.3" y="63.3" width="514" height="41.1" style={styles} id='hamburger-1'/>
                    <rect x="-0.1" y="235.4" width="514" height="41.1" style={styles} id='hamburger-2'/>
                    <rect x="-0.1" y="407.6" width="514" height="41.1" style={styles} id='hamburger-3'/>
                </g>
            </svg>
        </div>
    );
}
