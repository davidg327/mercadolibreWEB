import React from 'react';
import {useAppSelector} from "../../hooks/hooks";
import HelmetComponent from "../../components/Helmet";

const Home = () => {
    const {searchProductsRequesting} =
        useAppSelector(state => state.product);
    return (
        <div className={"home"}>
            <HelmetComponent title={'Home'} />
            {searchProductsRequesting && (
                <div className={"loader-container"}>
                    <div className="loader"></div>
                </div>
            )}
            {!searchProductsRequesting && (
                <h1>Para empezar busca un producto</h1>
            )}
        </div>
    )
};

export default Home;
