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
    }

    .string {
        color: ${(props) => props.theme.stringQuestion};
        caret-color: ${(props) => props.theme.caretColor};
    }

    .input-cont {
        width: 100%;
        display: flex;
        flex-direction: column;

        .input-output-cont {
            padding: 2px 20px;

            &.border {
                border-bottom: 1px solid ${(props) => props.theme.ioborder};
            }
        }

        .input-element {
            display: flex;
            align-items: center;

            span {
                min-width: 18px;
                height: 14px;
            }
        }

        .input-element-ans {
            /* display: none; */
            align-items: center;

            span {
                min-width: 18px;
                height: 15px;
            }

            svg {
                margin-left: -5px;
            }
        }
    }
`;
