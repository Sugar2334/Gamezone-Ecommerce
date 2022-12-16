import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import { gFetch } from "../../helpers/gFetch";
import "./cards.css";
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

  const onAdd =(quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }


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
                    <div className="botones">
                    <Card.Text>{product.price}</Card.Text>
                    </div>
                    <div className="contador">
                      <ItemCount initial={0} stock={20} onAdd={onAdd} productId={product.id}/>
                    </div>
                  </Card.Body>
                </Card>
                )
            }
        </div>
      )}
    </>
  );

};

export default ItemListContainer;
