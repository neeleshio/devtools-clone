import React, { useState } from 'react';
import ArrowDown from '../Svg/HeaderIcons/ArrowDown';
import { StyledDropdown } from './styles';

function Dropdown({ defaultOption, options, wrapperClass }) {
    const [open, setOpen] = useState(false);
    const [option, setOption] = useState(defaultOption);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const handleOption = (option, href) => {
        setOption(option);
        setOpen(false);
        if (href) window.open(href, '_blank');
    };

    return (
        <StyledDropdown className={wrapperClass}>
            <div onClick={handleOpen} className="select-box">
                <span>{option}</span>
                <ArrowDown />
            </div>
            {open && (
                <div className="options-cont">
                    {options.map((el) => (
                        <div
                            className="option"
                            key={el.text}
                            onClick={() => handleOption(el.text, el.href)}>
                            <span id={el.text} className="name">
                                {el.active && <span>✔</span>} {el.text}
                            </span>
                            {el.id && <span>{el.id}</span>}
                        </div>
                    ))}
                </div>
            )}
        </StyledDropdown>
    );
}

export default Dropdown;
