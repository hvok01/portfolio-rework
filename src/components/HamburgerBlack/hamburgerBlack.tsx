import React from 'react';

export default function HamburgerBlack() {

    const black = '#0C0C0C';

    let styles = {
        fill: black
    }

    return (
        <div>
            <svg version="1.1" baseProfile="basic" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                <g id="hamburger-icon">
                    <rect x="-1.3" y="63.3" width="514" height="41.1" style={styles}/>
                    <rect x="-0.1" y="235.4" width="514" height="41.1" style={styles}/>
                    <rect x="-0.1" y="407.6" width="514" height="41.1" style={styles}/>
                </g>
            </svg>
        </div>
    );
}
