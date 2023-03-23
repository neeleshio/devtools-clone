import styled from 'styled-components'

export const StyledDropdown = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 0.9rem;
  display: inline-flex;

  .select-box {
    display: flex;
    align-items: center;

    span {
        margin-right: 6px;
    }
  }

  input {
    cursor: pointer;
  }

  .options-cont {
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.bg};
    top: 63px;
    width: 200px;

    .option {
      display: flex;
      flex-direction: column;
      padding: 5px 15px;

      &:first-child {
        background-color: ${(props) => props.theme.socialDropdownBg};
        color: ${(props) => props.theme.bg};
      }

      &:hover {
        background-color: ${(props) => props.theme.socialDropdownBg};
        color: ${(props) => props.theme.bg};
      }
    }
  }
`