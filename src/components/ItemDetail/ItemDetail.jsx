import React, { useState } from "react";

import "./itemDetail.css";
import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../contexts/CartContext";


export const ItemDetail = ({product}) => {

    const { addtoCart, cartList } =  useCartContext()

    const [intercambiabilidad, setIntercambiabilidad] = useState(false)
    const onAdd = (cantidad) => {
        setIntercambiabilidad (true);
        addtoCart( { ...product, cantidad } )
    }

    console.log(cartList)
  return (
    <div className="body">
        <div className="blog-post">
            <div className="blog-post__img">
                <img src={product.foto} alt="imagen"/>
            </div>
            <div className="blog-post__info">
                <div className="blog-post__date">
                    <h1 className="blog-post__title">{product.name}</h1>
                    <span>{product.categoria}</span>
                    <p className="blog-post__text">${product.price.toLocaleString("de-DE")}</p>
                    <div className="boton">
                        {
                            intercambiabilidad?
                            <Intercambiabilidad />
                            :
                            <div className="contador">
                                <ItemCount initial={1} stock={20} onAdd={onAdd} productId={product.id}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ItemDetail;
