import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import { gFetch } from "../../helpers/gFetch";
import "./cards.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      gFetch()
        .then((resp) =>
          setProducts(
            resp.filter((product) => product.categoria === categoriaId)
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  console.log(categoriaId);
  return (
    <>
      <h2>{saludo}</h2>
      {/* [1,2,3] -> [<p key={} >1</p>, <p>2</p>, <p>3</p>] */}

      {loading ? (
        <h2>Cargando productos ...</h2>
      ) : (
        <div className="row">
            {
                products.map( product =>
                  <Card style={{ width: '24rem' }}>
                  <Card.Img variant="top" src={product.foto} />
                  <Card.Body>
                    <Card.Title>{`${product.name} - ${product.categoria}`}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <div className="botones">
                    <Link to={`/detail/${product.id}`}>
                      <Button style={{ marginRight: '0rem'}}variant="btn btn-success btn-block">Comprar</Button>
                    </Link>
                    <Button style={{ marginLeft: '.5rem'}} variant="btn btn-primary btn-block">Agregar al carrito</Button>
                    </div>
                  </Card.Body>
                </Card>
                )
            }
        </div>
      )}

      <ItemCount />
    </>
  );
};

export default ItemListContainer;
