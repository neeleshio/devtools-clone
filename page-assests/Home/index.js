import ArrowRight from '@/components/Svg/Home/ArrowRight';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { StyledHome } from './styles';
import { lightThemecolor, darkThemecolor } from '@/components/Tools/theme';
import ArrowWithDot from '@/components/Svg/Home/ArrowWithDot';
import { HomeContext, ThemeContext } from '@/components/Context/ThemeContext';
import Close from '@/components/Svg/HeaderIcons/Close';

function Home() {
    const [inputItem, setInputItem] = useState('');
    const [isString, setIsString] = useState(false);
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
                    error: false
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
                        error: false
                    };
                } catch (error) {
                    // simpRef.current.style.display = 'flex';
                    // ansRef.current.value = error.message;
                    resp = {
                        ...resp,
                        ans: error.message,
                        error: true
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
                    error: false
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
        if (!isString) {
            const firstChar = inputItem.charAt(0);
            if (firstChar === "'" || firstChar === '"') {
                setIsString(true);
            }
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
                                className={isString && 'string'}
                                value={el.ques}
                            />
                        </div>

                        {/* <div>
                            <span>
                                <Close />
                            </span>
                        </div> */}

                        <div
                            className="input-element-ans"
                            ref={simpRef}
                            style={{ display: `${el.ans ? 'flex' : 'none'} ` }}>
                            <span>
                                <ArrowWithDot fill={theme.arrowAnswer} />
                            </span>
                            <input readOnly ref={ansRef} value={el.ans} />
                        </div>
                    </div>
                ))}
            </div>
        </StyledHome>
    );
}

export default Home;
