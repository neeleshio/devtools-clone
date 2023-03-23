import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.navBg};
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    border-bottom: 2px solid ${(props) => props.theme.border};
    font-family: Inter;

    .navbar-container {
        display: flex;

        .left-nav {
            display: flex;
            align-items: center;

            button + button {
                margin: 0 15px 0 20px;
            }
        }

        nav {
            text-decoration: none;
            display: flex;
            align-items: center;
            font-size: 0.9rem;

            a {
                color: ${(props) => props.theme.textColor};
                font-weight: 500;
                padding: 0 18px;
            }
        }
    }

    .header-right {
        display: flex;
        align-items: center;

        .messages-btns {
            display: flex;

            button {
                border: 2px solid ${(props) => props.theme.border};
                border-radius: 3px;
                display: flex;
                align-items: center;
                padding: 2px 6px;
                background-color: ${props => props.theme.navBg};

                span {
                    height: 14px;
                    margin-left: 4px;
                    color: ${(props) => props.theme.textColor};
                }
            }

            button + button {
                margin-left: 10px;
            }
        }

        .setting-btns {
            height: 16px;

            button {
                height: 16px;

                &:first-child {
                    margin: 0 25px;
                }
            }
        }
    }
`