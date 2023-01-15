import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import "./cards.css";
import Card from "react-bootstrap/Card";
import ControlCarousel from '../../components/carousel/ControlCarousel';



import { query,where,collection,getDocs,getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryFiltrada = categoriaId ? query(queryCollection, where('categoria','==', categoriaId)) : queryCollection

        getDocs(queryFiltrada)
        .then(respuesta => setProducts( respuesta.docs.map(product => ({ id: product.id, ...product.data()}) ) ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      
    }, [categoriaId]);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <>
      <div className="carousel">
        <ControlCarousel />
      </div>
      {loading ? (
        <h2>Cargando productos ...</h2>
      ) : (
        <div className="row">
          {products.map((product) => (
            <Card style={{ width: "24rem" }}>
              <Card.Img variant="top" src={product.foto} />
              <Card.Body>
                <Card.Title>{`${product.name} - ${product.categoria}`}</Card.Title>
                <div className="botones">
                  <Card.Text>
                    ${product.price.toLocaleString("de-DE")}
                  </Card.Text>
                </div>
                <div className="contador">
                  <ItemCount
                    initial={0}
                    stock={20}
                    onAdd={onAdd}
                    productId={product.id}
                    showVerMas={true}
                />
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
