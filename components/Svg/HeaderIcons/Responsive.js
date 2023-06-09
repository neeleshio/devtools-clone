import React from 'react';

const Responsive = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 16">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H0.5C0.223877 5 0 5.22388 0 5.5V15.5C0 15.5864 0.0219727 15.668 0.0605469 15.739C0.0681152 15.7529 0.076416 15.7664 0.0852051 15.7793L0.102783 15.8037L0.120605 15.8257C0.169922 15.8831 0.231934 15.9292 0.302246 15.9595C0.363037 15.9856 0.429932 16 0.5 16H14.5C14.7761 16 15 15.7761 15 15.5V0.5C15 0.223877 14.7761 0 14.5 0H3.5C3.22388 0 3 0.223877 3 0.5V5ZM7 15H14V1H4V5H6.5C6.77612 5 7 5.22388 7 5.5V15ZM6 7V14H1V7H6Z" fill={fill || "#6E6E6E"}/>
    </svg>
);

export default Responsive;
