import React from 'react';

const SquareArrow = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14">
        <path d="M0 0.5C0 0.223877 0.223877 0 0.5 0H11.5C11.7761 0 12 0.223877 12 0.5V4H11V1H1V11H4V12H0.5C0.409668 12 0.324951 11.9761 0.251953 11.9343C0.101318 11.8481 0 11.6858 0 11.5V0.5Z" fill={fill || "#6E6E6E"}/>
        <path d="M12.1848 12.8479L13.1355 11.801L9.99536 8.94824L12.896 6.80713L4.80933 5.19263L7.19043 13.0874L9.04443 9.99512L12.1848 12.8479Z" fill={fill || "#6E6E6E"}/>
    </svg>
);

export default SquareArrow;
