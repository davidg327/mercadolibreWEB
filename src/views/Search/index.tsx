import React from 'react';
import {useAppSelector} from "../../hooks/hooks";
import {IProduct} from "../../interface/product";
import {formatCurrency} from "../../functions/functions";

const Search = () => {
    const {searchProductsRequesting, searchProductsSuccess, categories, searchProducts} =
        useAppSelector(state => state.product);

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
            {searchProductsSuccess && searchProducts.length > 0 && (
                <div className={"search__container-info"}>
                    {searchProducts.map((product: IProduct, index) => (
                        <div key={index} className={"search__card-product"}>
                            <div className={"search__card-info-product"}>
                                <img src={product.picture} className={"search__card-image"} alt={product.title}/>
                                <div className={"search__card-details"}>
                                    <div className={"container-price"}>
                                        <div className={"currency"}>
                                            $ {formatCurrency(product.price.amount, product.price.currency, 0)}
                                        </div>
                                        {product.free_shipping && <div className={"new"}/>}
                                    </div>
                                    <div className={"title"}>{product.title}</div>
                                </div>
                            </div>
                            <div>{product.condition}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};

export default Search;
