import Link from 'next/link';
import React from 'react';

export default function Logo(props: any) {

  const black = '#0C0C0C';
  const white = '#FBFBFF';
  const color = props.color;

  let styles = {
      fill: black,
  }

  if(color === "white") {
      styles.fill = white;
  } else {
      styles.fill = black;
  }

  return (
      <Link href="/">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 800 800">
          <g>
              <path style={styles} d="M464,800H336V585.7H108V0l128,0v457.7h100V0h356v585.7H464V800z M464,457.7h100V128H464V457.7z"/>
          </g>
          </svg>
      </Link >
  );
}