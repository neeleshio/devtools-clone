import styled from 'styled-components';

export const StyledHome = styled.div`
    display: flex;
    font-family: 'Source Code Pro';
    height: 100vh;
    background-color: ${(props) => props.theme.bg};

    input {
        width: 100%;
        border: none;
        outline: none;
        font-family: 'Source Code Pro';
        font-size: 1rem;
        letter-spacing: -0.5px;
        margin-left: 5px;
        padding-bottom: 3px;
        background-color: ${(props) => props.theme.bg};
        caret-color: ${(props) => props.theme.caretColor};
        color: ${(props) => props.theme.undefinedQuestion};
    }

    .string {
        color: ${(props) => props.theme.stringQuestion};
        caret-color: ${(props) => props.theme.caretColor};
    }

    .number {
        color: ${(props) => props.theme.numQuestion};
        caret-color: ${(props) => props.theme.caretColor};
    }

    .boolean {
        color: ${(props) => props.theme.booleanQuestion};
        caret-color: ${(props) => props.theme.caretColor};
    }

    .null {
        color: ${(props) => props.theme.nullQuestion};
        caret-color: ${(props) => props.theme.caretColor};
    }

    .input-cont {
        width: 100%;
        display: flex;
        flex-direction: column;

        .input-output-cont {
            padding: 2px 0 4px 0;

            &.border {
                /* border-bottom: 1px solid ${(props) => props.theme.ioborder}; */
            }
        }

        .input-element {
            display: flex;
            align-items: center;
            padding: 0 20px;

            span {
                min-width: 18px;
                height: 14px;
            }
        }

        .input-element-ans {
            /* display: none; */
            align-items: center;
            padding: 0 20px;
            border-bottom: 1px solid ${(props) => props.theme.ioborder};

            &.error {
                background-color: ${(props) => props.theme.errorBg};
                border-bottom: 1px solid ${(props) => props.theme.errorBorder};
                border-top: 1px solid ${(props) => props.theme.errorBorder};

                span {
                    height: 17.5px;
                }   

                svg {
                    margin-left: -3px;
                }

                input {
                    background-color: ${(props) => props.theme.errorBg};
                    color: ${(props) => props.theme.errorText};
                }
            }

            span {
                min-width: 18px;
                height: 15px;
            }

            svg {
                margin-left: -5px;
            }

            .string {
                color: ${(props) => props.theme.stringAnswer};
                caret-color: ${(props) => props.theme.caretColor};
            }

            .number {
                color: ${(props) => props.theme.numAnswer};
                caret-color: ${(props) => props.theme.caretColor};
            }

            .boolean {
                color: ${(props) => props.theme.booleanAnswer};
                caret-color: ${(props) => props.theme.caretColor};
            }

            .undefined {
                color: ${(props) => props.theme.undefinedAnswer};
                caret-color: ${(props) => props.theme.caretColor};
            }

            .null {
                color: ${(props) => props.theme.nullAnswer};
                caret-color: ${(props) => props.theme.caretColor};
            }
            .obj {
                font-style: italic;
            }
        }
    }
`;
