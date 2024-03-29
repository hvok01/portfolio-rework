import React from 'react';

interface CloseProps {
    color?: string;
}

export default function Close ({color}: CloseProps) {
    
    const colorOrWhite = color ? color : '#FBFBFF';

    let styles = {
        fill: colorOrWhite
    }

    return(
        <div>
            <svg version="1.1" baseProfile="basic" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                <polygon style={styles} points="512,475.6 291.4,255.9 511.1,35.3 475.6,0 255.9,220.6 35.3,0.9 0,36.4 220.6,256.1 0.9,476.7 
                        36.4,512 256.1,291.4 476.7,511.1 "/>
            </svg>
        </div>
    );
};