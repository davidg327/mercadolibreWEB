import React from 'react';
import {useAppSelector} from "../../hooks/hooks";

const Search = () => {
    const {searchProductsRequesting, searchProductsSuccess, categories} =
        useAppSelector(state => state.product);
    console.log(categories, 'categorias');
    return (
        <div className={"search"}>
            {searchProductsRequesting && (
                <div className={"loader-container"}>
                    <div className="loader" />
                </div>
            )}
            {searchProductsSuccess && categories.length > 0 && (
                <div className={"search__categories-row"}>
                    {categories.map((category, index) => (
                        <div key={index} className="search__category">
                            {index > 0 && <span className="category-separator">{' > '}</span>}
                            {category}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};

export default Search;
