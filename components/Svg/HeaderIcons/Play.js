import React from 'react';

const Play = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 15 13">
        <path d="M7 9.99951L12 6.5L7 3V9.99951Z" fill={fill || "#6E6E6E"}/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V13H15V0H0ZM4 12H1V1H4V12ZM14 12H5V1H14V12Z" fill={fill || "#6E6E6E"}/>
    </svg>
);

export default Play;
