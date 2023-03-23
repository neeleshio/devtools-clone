import React, { useState } from 'react'
import ArrowDown from '../Svg/HeaderIcons/ArrowDown'
import { StyledDropdown } from './styles'

function Dropdown({ defaultOption ,options, wrapperClass }) {
  const [open, setOpen] = useState(false)
  const [option, setOption] = useState(defaultOption)

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  const handleOption = (e) => {
    setOption(e.target.id)
    setOpen(false)
  }

  return (
    <StyledDropdown className={wrapperClass}>
      <div onClick={handleOpen} className="select-box">
        <span>{option}</span>
        <ArrowDown/>
      </div>
      {open && (
        <div className='options-cont' onClick={handleOption}>
        {options.map(el => (
          <div className='option' key={el.text}>
            <span id={el.text} className="name">{el.text}</span>
            {el.id && (
              <span>{el.id}</span>
            )}
          </div>
          ))}
        </div>
      )}
    </StyledDropdown>
  )
}

export default Dropdown