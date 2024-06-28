import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {searchProducts} from "../../state/product/reducer";
import {Link, useLocation, useNavigate} from 'react-router-dom';

interface IHeader {

}

const Header = ({}: IHeader) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const {searchProductsRequesting, searchProductsSuccess} =
        useAppSelector(state => state.product);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        dispatch(searchProducts({query: searchTerm}));
    };

    const cleanSearch = () => {
        setSearchTerm('');
    };

    useEffect(() => {
        if(searchProductsSuccess){
            if (location.pathname === '/items') {
                navigate(`/items?search=${encodeURIComponent(searchTerm)}`, { replace: true });
            } else {
                navigate(`/items?search=${encodeURIComponent(searchTerm)}`);
            }
        }
    }, [searchProductsSuccess]);

    useEffect(() => {
        if(!searchProductsRequesting && searchTerm === ''){
            const searchParams = new URLSearchParams(location.search);
            const searchQuery = searchParams.get('search');
            if (searchQuery !== null){
                setSearchTerm(searchQuery);
                dispatch(searchProducts({query: searchQuery}));
            }
        }
    }, [location.search]);

    return (
        <header className="header">
            <div className="header__center">
                <Link to={'/'} onClick={cleanSearch}>
                    <img
                        alt={'logo'}
                        className={"header__image"}
                        src={'https://blog.saleslayer.com/hubfs/mercado-libre-logo.jpg'}/>
                </Link>
                <input
                    type="text"
                    className="header__search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                    placeholder="Buscar producto..."/>
                <div className={"header__icon"} onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </header>
    )
};

export default Header;
