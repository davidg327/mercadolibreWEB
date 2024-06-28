import React, {useEffect} from 'react';
import Categories from "../../components/Categories";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {formatCurrency} from "../../functions/functions";
import {getProduct} from "../../state/product/reducer";
import {useLocation, useParams} from "react-router-dom";
import HelmetComponent from "../../components/Helmet";

const Detail = () => {
    const { id } = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const {getProductRequesting, getProductSuccess, product} = useAppSelector(state => state.product)

    useEffect(() => {
        if(!getProductRequesting && !product?.id){
            if (id){
                dispatch(getProduct({id: id}));
            }
        }
    }, [location.search]);

    return (
        <div className={'detail'} >
            <HelmetComponent title={'Detail'} />
            {getProductRequesting && (
                <div className={"loader-container"}>
                    <div className="loader" />
                </div>
            )}
            <Categories />
            {getProductSuccess && (
                <div className={"detail__container-info"}>
                    <div className={"detail__card-info-product"}>
                        <img src={product.picture} className={"detail__detail-image"} alt={product.title}/>
                        <div className={"detail__info_product"}>
                            <div className={"detail__state_product"}>
                                <div>{product.condition === 'new' ? 'Nuevo' : 'Usado'}</div>
                                <div className={"separator"}>-</div>
                                <div>{'234 vendidos'}</div>
                            </div>
                            <div className={"title-product"}>{product.title}</div>
                            <div className={"currency"}>
                                $ {formatCurrency(product.price.amount, product.price.currency, product.price.decimals)}
                            </div>
                            <div className={"button-buy"}>
                                Comprar
                            </div>
                        </div>
                    </div>
                    <div className={"detail__info-description"}>Descripción del producto</div>
                    <span className={"detail__text-description"}>{product.description}</span>
                </div>
            )}
        </div>
    )
};

export default Detail;
