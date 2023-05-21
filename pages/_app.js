import '@/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { lightThemecolor, darkThemecolor } from '@/components/Tools/theme';
import '../styles/globals.css';
import '@fontsource/inter/500.css';
import '@fontsource/source-code-pro/400.css';
import Header from '@/components/Header';
import { useState } from 'react';
import { HomeContext, ThemeContext } from '@/components/Context/ThemeContext';

export default function App({ Component, pageProps }) {
    const [darkTheme, setDarkTheme] = useState(true);
    const [count, setBody] = useState(1);
    const [clearConsole, setClearConsole] = useState(false);

    const handleTggleTheme = () => {
        setDarkTheme((prev) => !prev);
    };

    const [obj, setObj] = useState([
        {
            ques: 'Welcome to devtools clone',
            ans: 'Built by Neelesh Shetty - https://neeleshio.cloud',
            error: false,
            elementType: 'string'
        },
        {
            ques: '',
            ans: '',
            error: false,
            elementType: ''
        }
    ]);

    return (
        <>
            <ThemeContext.Provider
                value={{
                    handleTggleTheme,
                    darkTheme,
                    setBody,
                    count,
                    obj,
                    setObj,
                    setClearConsole,
                    clearConsole
                }}>
                <ThemeProvider theme={darkTheme ? darkThemecolor : lightThemecolor}>
                    <Header />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
}
