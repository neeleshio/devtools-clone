import styled from 'styled-components';

export const StyledExperience = styled.section`
    display: flex;
    font-family: 'Source Code Pro';
    height: 100vh;
    background-color: ${(props) => props.theme.bg};
    color: #ffffff;
    flex-direction: column;

    .doctype {
        color: ${(props) => props.theme.docType};
    }

    .html-lng {
        color: ${(props) => props.theme.tagColor};
    }

    .head-tag-cont {
        color: ${(props) => props.theme.tagColor};
        display: flex;
        align-items: center;

        .arrow-down {
            transform: rotate(-90deg);
        }
    }

    .body-opening-tag {
        display: flex;
        align-items: center;
        
        .doctype {
            color: ${(props) => props.theme.tagColor};
        }

        .arrow-down {
            transform: rotate(-90deg);
        }
    }

    .body-closing-tag {
        color: ${(props) => props.theme.tagColor};
    }

    span {
        display: block;
    }

    .div-container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin-left: 20px;

        .arrow-down {
            transform: rotate(-90deg);
        }

        .rrffcc {
            display: flex;
            align-items: center;

            .rx-tag,
            .rx-close-tag,
            .rx-equals {
                color: ${(props) => props.theme.tagColor};
            }

            .rx-attribute {
                margin-left: 10px;
                color: ${(props) => props.theme.attrColor};
            }

            .rx-attribute-value {
                color: ${(props) => props.theme.attrValueColor};
            }
        }

        .li-container {
            display: flex;
            flex-direction: column;
            /* align-items: center; */

            .tag-and-icon {
                display: flex;
                align-items: center;
            }

            .rx-close-tag {
                margin-left: 20px;
            }

            .ddf {
                display: flex;
                align-items: flex-start;
                flex-direction: row;
                padding-left: 40px;
                font-size: 11px;
                color: ${(props) => props.theme.hightlightBlack};

                .li-colon {
                    color: ${(props) => props.theme.tagColor};
                }

                .li-content {
                    font-size: 13px;
                }
            }

            .rx-tag,
            .rx-close-tag,
            .rx-equals {
                color: ${(props) => props.theme.tagColor};
            }
        }

        .element-wrapper {
            display: flex;
            align-items: center;

            .tag-element {
                color: ${(props) => props.theme.tagColor};
            }
        }
    }
`;
