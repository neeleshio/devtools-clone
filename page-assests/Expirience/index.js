import ThreeDot from '@/components/Svg/Experience/ThreeDot';
import ArrowDown from '@/components/Svg/HeaderIcons/ArrowDown';
import React, { useState } from 'react';
import { StyledExperience } from './styles';
import { companies } from './constants';

function Experience() {
    const [state, setState] = useState(companies);
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

    return (
        <StyledExperience>
            <div>
                <span className='doctype'>{`<!DOCTYPE html>`}</span>
                <span className='html-lng'>{`<html lang="en">`}</span>
                <div className="head-tag-cont">
                    <ArrowDown />
                    <span>{`<head>`}</span>
                    <ThreeDot />
                    <span>{`<head>`}</span>
                </div>
                <div className='body-opening-tag'>
                <ArrowDown />
                <span className='doctype'>{`<body>`}</span>
                </div>
                {Object.values(state).map((company, index) => (
                    <div className="div-container" key={index}>
                        {company.map((el, idx) => {
                            const l = company.length / 2;
                            const arr = [];
                            for (let i = 0; i <= company.length; i++) {
                                if (i % 2 !== 0) arr.push(i);
                            }

                            return idx < l ? (
                                el.element === 'scope' ? (
                                    handleList(el, idx)
                                ) : (
                                    handleUnCollapse(el, idx)
                                )
                            ) : (
                                <div
                                    key={idx}
                                    className="element-wrapper"
                                    style={{ marginLeft: `${(idx - arr[idx - l]) * 15}px` }}>
                                    <span className="tag-element">{`<${el.element}>`}</span>
                                </div>
                            );
                        })}
                    </div>
                ))}
                <span className='body-closing-tag'>{`<body/>`}</span>
            </div>
        </StyledExperience>
    );
}

export default Experience;
