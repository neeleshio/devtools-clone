import React from 'react';

const ArrowWithDot = ({ fill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 8 9">
        <path
            d="M5.16208 7.3645L4.12289 8.40356L0.280975 4.56177L4.12253 0.718994L5.16183 1.7583L2.35886 4.56128L5.16208 7.3645Z"
            fill={fill || '#BAB9BA'}
        />
        <path
            d="M6.5 5.5C7.05229 5.5 7.5 5.05225 7.5 4.5C7.5 3.94775 7.05229 3.5 6.5 3.5C5.94771 3.5 5.5 3.94775 5.5 4.5C5.5 5.05225 5.94771 5.5 6.5 5.5Z"
            fill={fill || '#BAB9BA'}
        />
    </svg>
);

export default ArrowWithDot;
