import React from 'react';
import {useAppSelector} from "../../hooks/hooks";

const Categories = () => {
    const {searchProductsSuccess, categories} =
        useAppSelector(state => state.product);

    return (
        <div className={"categories-row"}>
            {searchProductsSuccess && categories.length > 0 && categories.map((category, index) => (
                <div key={index} className="category">
                    {index > 0 && <span className="category-separator">{' > '}</span>}
                    {category}
                </div>
            ))}
        </div>
    )
};

export default Categories;
