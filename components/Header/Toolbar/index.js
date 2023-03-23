import Clear from '@/components/Svg/HeaderIcons/Clear';
import Sun from '@/components/Svg/HeaderIcons/Sun';
import Gear from '@/components/Svg/HeaderIcons/Gear';
import Play from '@/components/Svg/HeaderIcons/Play';
import React, { useContext, useState } from 'react';
import { StyledToolbar } from './styles';
import IconButton from '@/components/IconButton';
import Dropdown from '@/components/Dropdown';
import { DEFAULT_LEVELS, SOCIAL_LIST } from '@/components/Constants/headerConstants';
import { Seperator } from '@/components/CommonStyles';
import Close from '@/components/Svg/HeaderIcons/Close';
import { ThemeContext } from '@/components/Context/ThemeContext';

function Toolbar() {
    const { handleTggleTheme } = useContext(ThemeContext);
    const { setObj, setBody, setClearConsole } = useContext(ThemeContext);
    const [filterInput, setFilterInput] = useState('');

    const handleClearConsole = () => {
        const arr = [
            {
                ques: '',
                ans: ''
            }
        ];
        setObj(arr);
        setBody(0);
        setClearConsole(true);
    };

    return (
        <StyledToolbar>
            <div className="left-section">
                <div className="left-buttons">
                    <IconButton icon={<Play />} />
                    <IconButton icon={<Clear />} onClick={handleClearConsole} />
                </div>
                <Seperator />
                <Dropdown
                    options={SOCIAL_LIST}
                    defaultOption="social"
                    wrapperClass="social-dropdown"
                />
                <Seperator />
                <IconButton
                    icon={<Sun />}
                    className="theme-toggle-btn"
                    onClick={handleTggleTheme}
                />
                <Seperator />
                <div className="filter-input">
                    <input
                        type="text"
                        placeholder="Filter"
                        onChange={(e) => setFilterInput(e.target.value)}
                        value={filterInput}
                    />
                    {filterInput && (
                        <button className="clear-btn" onClick={() => setFilterInput('')}>
                            <Close fill="#BCBCBB" />
                        </button>
                    )}
                </div>
            </div>
            <Dropdown
                defaultOption="default levels"
                options={DEFAULT_LEVELS}
                wrapperClass="social-dropdown"
            />
        </StyledToolbar>
    );
}

export default Toolbar;
