import React from 'react'
import styled from 'styled-components'

const StyledIconButton = styled.button`
    height: 18px;
    background-color: ${(props) => props.theme.navBg};
`

function IconButton({ icon, className, onClick }) {
  return (
    <StyledIconButton className={className} onClick={onClick}>
        {icon}
    </StyledIconButton>
  )
}

export default IconButton