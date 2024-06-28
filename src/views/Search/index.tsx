import React from 'react';
import {useAppSelector} from "../../hooks/hooks";

const Search = () => {
    const {searchProductsRequesting, searchProducts} =
        useAppSelector(state => state.product);

    return (
        <div>
            {searchProductsRequesting && (
                <div className={"loader-container"}>
                    <div className="loader"></div>
                </div>
            )}
          <h1>Search</h1>
        </div>
    )
};

export default Search;
