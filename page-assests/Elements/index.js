import ThreeDot from '@/components/Svg/Experience/ThreeDot';
import ArrowDown from '@/components/Svg/HeaderIcons/ArrowDown';
import React, { useState, useEffect } from 'react';
import { StyledExperience } from './styles';
import { companies } from './constants';

function Elements() {
    const [state, setState] = useState(companies);
    const [doc, setDoc] = useState({});

    useEffect(() => {
        setDoc(window.document.querySelector('.ttt'));
    }, []);

    const handleExpand = (element, id) => {
        const companyName = `company${id + 1}`;
        const company = state[`company${id + 1}`];

        const a = company.findIndex((res) => res.element === element);

        company[a] = {
            ...company[a],
            expand: false
        };

        const obj = {
            ...state,
            [companyName]: company
        };

        setState(obj);
    };

    const handleUnCollapse = (el, idx) => {
        return (
            <div
                className="rrffcc"
                style={{ marginLeft: idx * 15 }}
                onClick={() => handleExpand(el.element, idx)}>
                <ArrowDown />
                <span className="rx-tag">{`<${el.element}`}</span>
                {el.attr.map((res) => (
                    <>
                        <span className="rx-attribute">{res.title}</span>
                        <span className="rx-equals">{'="'}</span>
                        <span className="rx-attribute-value">{res.value}</span>
                        <span className="rx-close-tag">{'"'}</span>
                    </>
                ))}
                <span className="rx-close-tag">{'>'}</span>
            </div>
        );
    };

    const handleList = (el, idx) => {
        return (
            <div className="li-container" style={{ marginLeft: idx * 15 }}>
                <div className="tag-and-icon">
                    <ArrowDown />
                    <span className="rx-tag">{`<${el.element}>`}</span>
                </div>
                {el.content.map((el, i) => (
                    <div className="ddf" key={i}>
                        <span className="li-colon">{`"`}</span>
                        <span className="li-content">{el}</span>
                        <span className="li-colon">{`"`}</span>
                    </div>
                ))}
            </div>
        );
    };

    return <StyledExperience></StyledExperience>;
}

export default Elements;
