import React, { useState, useEffect } from 'react'
import { StyledHeader } from './styles';
import Link from 'next/link';
import { MENU_LIST } from '@/components/Constants/headerConstants';
import SquareArrow from '@/components/Svg/HeaderIcons/SquareArrw';
import Responsive from '@/components/Svg/HeaderIcons/Responsive';
import Close from '@/components/Svg/HeaderIcons/Close';
import Message from '@/components/Svg/HeaderIcons/Message';
import Gear from '@/components/Svg/HeaderIcons/Gear';
import Dots from '@/components/Svg/HeaderIcons/Dots';
import IconButton from '@/components/IconButton';
import { Seperator } from '@/components/CommonStyles';

function Navbar() {
  return (
    <StyledHeader>
        <div className='navbar-container'>
            <div className='left-nav'>
                <IconButton icon={<SquareArrow/>} />
                <IconButton icon={<Responsive/>} />
            </div>
            <Seperator/>
            <nav>
                {MENU_LIST.map((el) => (
                    <Link key={el.text} href={el.href}>{el.text}</Link>
                ))}
            </nav>
        </div>
        <div className='header-right'>
            <div className='messages-btns'>
                <button>
                    <Close/>
                <span>0</span>
                </button>
                <button>
                    <Message/>
                    <span>0</span>
                </button>
            </div>
            <Seperator/>
            <div className='setting-btns'>
                <IconButton icon={<Gear/>} />
                <IconButton icon={<Dots/>} />
            </div>
        </div>
    </StyledHeader>
  )
}

export default Navbar;