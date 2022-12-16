import React from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ItemDetail = (product) => {
  return (
    <Card style={{ width: "24rem" }}>
        {
            product &&                  
            <div>
            <Card.Img variant="top" src={product.foto} />
            <Card.Body>
                <Card.Title>{`${product.name} - ${product.categoria}`}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <div className="botones">
                <Link to={`/detail/${product.id}`}>
                    <Button
                    style={{ marginRight: "0rem" }}
                    variant="btn btn-success btn-block"
                    >
                    Comprar
                    </Button>
                </Link>
                <Button
                    style={{ marginLeft: ".5rem" }}
                    variant="btn btn-primary btn-block"
                >
                    Agregar al carrito
                </Button>
                </div>
            </Card.Body>
        </div>}
    </Card>
  );
};

export default ItemDetail;
