import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {IProduct} from "../../interface/product";
import {formatCurrency} from "../../functions/functions";
import {useNavigate} from "react-router-dom";
import {getProduct} from "../../state/product/reducer";
import Categories from "../../components/Categories";

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {searchProductsRequesting, searchProductsSuccess, categories, searchProducts} =
        useAppSelector(state => state.product);

    const redirectDetail = (id: string) =>  {
        navigate(`/items/${id}`);
        dispatch(getProduct({id: id}));
    }

    return (
        <div className={"search"}>
            {searchProductsRequesting && (
                <div className={"loader-container"}>
                    <div className="loader" />
                </div>
            )}
            <Categories />
            {searchProductsSuccess && searchProducts.length > 0 && (
                <div className={"search__container-info"}>
                    {searchProducts.map((product: IProduct, index) => (
                        <div onClick={() => redirectDetail(product.id)} key={index} className={"search__card-product"}>
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
