import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';

interface IHeader {

}

const Header = ({}: IHeader) => {
    return (
        <header className="header">
            <div className="header__center">
                <img
                    alt={'logo'}
                    className={"header__image"}
                    src={'https://blog.saleslayer.com/hubfs/mercado-libre-logo.jpg'} />
                <input type="text" className="header__search" placeholder="Buscar producto..."/>
                <div className={"header__icon"}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </header>
    )
};

export default Header;
