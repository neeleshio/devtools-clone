import styled from "styled-components"

export const StyledToolbar = styled.div`
    background-color: ${(props) => props.theme.navBg};
    display: flex;
    padding: 5px 20px;
    border-bottom: 2px solid ${(props) => props.theme.border};
    font-family: Inter;
    height: 100%;

    .left-section {
        display: flex;
        width: 80%;
    }

    .left-buttons {
        display: flex;
        align-items: center;

        button {
            height: 16px;
        }

        button + button {
            margin: 0 15px 0 20px;
        }
    }

    .social-dropdown {
        margin: 0 18px;
    }

    .theme-toggle-btn {
        margin: 0 12px;
    }

    .filter-input {
        display: flex;
        position: relative;
        width: 100%;

        input {
            width: 100%;
            border-radius: 0px;
            border: 2px solid ${(props) => props.theme.filterBorder};
            background-color: ${props => props.theme.bg};
            margin: -2px 0;
            margin-left: 10px;
            padding: 0 10px;
            outline: none;

            &::placeholder {
                font-family: Inter;
                color: ${(props) => props.theme.textColor};
            }
        }

        .clear-btn {
            position: absolute;
            right: 0;
            margin: 2px 6px 0 0;
            cursor: pointer;
            width: 14px;
            height: 14px;
            background-color: ${props => props.theme.bg};
        }
    }
`