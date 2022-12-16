import React from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./itemDetail.css";

export const ItemDetail = ({product}) => {
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
                    <p className="blog-post__text">{product.price}</p>
                    <div className="boton">
                    <Link to={`/detail/${product.id}`}>
                            <Button style={{ marginRight: '0rem'}}variant="btn btn-success btn-block">Comprar</Button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ItemDetail;
