import React, { FC, useState } from 'react'
import logo from '../assets/img/header/logo.svg'

export enum HeaderVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface HeaderProps {
    width: string;
    height?: string;
    variant: HeaderVariant;
    onClick: (num: number) => void; // if return string/number and ...
}
const Header: FC<HeaderProps> = ( 
    {
        width,
        height,
        variant,
        onClick,
        children
    }) => {

    const [state, setState] = useState(0);

    return (
        <div className='header'>
            <div className="full-container">
                <div className="header__wrap">
                    <div className="header__left">
                        <div className="header__logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="header__location">
                            <span className='header__location--icon'>Укажите адрес доставки</span>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__search">search</div>
                        <div className="header__login">login</div>
                        <div className="header__cart">cart</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header