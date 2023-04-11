import ArrowRight from '@/components/Svg/Home/ArrowRight';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { StyledHome } from './styles';
import { lightThemecolor, darkThemecolor } from '@/components/Tools/theme';
import ArrowWithDot from '@/components/Svg/Home/ArrowWithDot';
import { HomeContext, ThemeContext } from '@/components/Context/ThemeContext';
import Close from '@/components/Svg/HeaderIcons/Close';

function Home() {
    const [inputItem, setInputItem] = useState('');
    const [isString, setIsString] = useState('');
    const { darkTheme, count, setBody, obj, setObj, setClearConsole, clearConsole } =
        useContext(ThemeContext);
    const theme = darkTheme ? darkThemecolor : lightThemecolor;
    const [prevArray, setPrevArray] = useState([]);

    const inputRef = useRef(null);
    const simpRef = useRef(null);
    const ansRef = useRef(null);
    const arrowRef = useRef(count);

    const handleAddElement = (e) => {
        if (e.key === 'Enter') {
            if (inputItem) {
                const ar = [...prevArray];
                ar.push(inputItem);
                setPrevArray(ar);

                let resp = {
                    ques: inputItem,
                    ans: '',
                    error: false,
                };
                
                try {
                    let res = eval(inputItem);
                    // simpRef.current.style.display = 'flex';
                    // ansRef.current.value = res;
                    
                    if (typeof res === 'string') {
                        res = "'" + res + "'";
                    }

                    resp = {
                        ...resp,
                        ans: res,
                        error: false,
                    };

                    console.log('inputItem', inputItem)

                    if(res === undefined && inputItem !== '{}') {
                        resp = {
                            ...resp,
                            ans: 'undefined',
                            error: false,
                        };
                    } else if (res === null) {
                        resp = {
                            ...resp,
                            ans: 'null',
                            error: false,
                        };
                    } else if (inputItem === '[]') {
                        resp = {
                            ...resp,
                            ans: '[]',
                            error: false,
                        }; 
                    } else if (inputItem === '{}') {
                        resp = {
                            ...resp,
                            ans: '{}',
                            error: false,
                        }; 
                    }
                } catch (error) {
                    // simpRef.current.style.display = 'flex';
                    // ansRef.current.value = error.message;
                    resp = {
                        ...resp,
                        ans: error,
                        error: true,
                    };
                }

                const arr = [...obj];
                arr[count] = {
                    ...arr[count],
                    ...resp
                };
                arr.push({
                    ques: '',
                    ans: '',
                    error: false,
                    elementType: ''
                });
                setObj(arr);
                setBody((prev) => prev + 1);
            }
            setInputItem('');
        }

        if (e.key === 'ArrowUp') {
            inputRef.current.value = prevArray[arrowRef.current - 1];
            arrowRef.current = arrowRef.current - 1;
        }
    };

    const handleChange = (e) => {
        setInputItem(e.target.value);
        const arr = [...obj];
        arr[count] = {
            ...arr[count],
            ques: e.target.value
        };
        setObj(arr);
        if (clearConsole) setClearConsole(false);
    };

    useEffect(() => {
        inputRef?.current?.focus();
        arrowRef.current = count;
    }, [count]);

    useEffect(() => {
        if(!inputItem) setIsString('')
        const arr = [...obj]
        
        if (!isString) {
            const firstChar = inputItem.charAt(0);
            if (firstChar === "'" || firstChar === '"') {
                arr[count] = {
                    ...arr[count],
                    elementType: 'string'
                };
                setObj(arr);
            } else if (parseInt(inputItem) || parseInt(inputItem) === 0) {
                arr[count] = {
                    ...arr[count],
                    elementType: 'number'
                };
                setObj(arr);
            } else if (inputItem === 'true' || inputItem === 'false') {
                arr[count] = {
                    ...arr[count],
                    elementType: 'boolean'
                };
                setObj(arr);
            } else if (inputItem === 'undefined') {
                arr[count] = {
                    ...arr[count],
                    elementType: 'undefined'
                };
                setObj(arr);
            } else if (inputItem === 'null') {
                arr[count] = {
                    ...arr[count],
                    elementType: 'null'
                };
                setObj(arr);
            } else if (inputItem === '[]' || inputItem === '{}') {
                arr[count] = {
                    ...arr[count],
                    elementType: 'obj'
                };
            }
                setObj(arr);
        }
    }, [inputItem]);

    return (
        <StyledHome>
            <div className="input-cont">
                {obj.map((el, idx) => (
                    <div
                        key={idx}
                        className={`${el.ans ? 'input-output-cont border' : 'input-output-cont'}`}>
                        <div id={idx} className="input-element">
                            <span>
                                <ArrowRight
                                    fill={count === idx ? theme.arrowCursor : theme.arrowQuestion}
                                />
                            </span>
                            <input
                                onKeyUp={handleAddElement}
                                readOnly={count !== idx}
                                ref={inputRef}
                                onChange={handleChange}
                                className={el.elementType}
                                value={el.ques}
                            />
                        </div>

                        <div
                            className={`input-element-ans`}
                            ref={simpRef}
                            style={{ display: `${((el.ans || el.ans === 0 || el.ans === false || el.ans === undefined || el.ans === null) && !el.error) ? 'flex' : 'none'} ` }}>
                            <span>
                                <ArrowWithDot fill={theme.arrowAnswer} />
                            </span>
                            <input readOnly ref={ansRef} value={el.ans} className={el.elementType}/>
                        </div>

                        <div
                            className={`input-element-ans ${el.error && 'error'}`}
                            ref={simpRef}
                            style={{ display: `${(el.error) ? 'flex' : 'none'} ` }}>
                            <span>
                                <Close />
                            </span>
                            <input readOnly ref={ansRef} value={el.ans} className={el.elementType}/>
                        </div>
                    </div>
                ))}
            </div>
        </StyledHome>
    );
}

export default Home;
