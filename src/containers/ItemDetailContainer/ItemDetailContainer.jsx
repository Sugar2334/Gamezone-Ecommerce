import React from "react";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail"

import { doc,getDoc,getFirestore } from 'firebase/firestore'


export const ItemDetailContainer = () => {
    const[products, setProducts] = useState(null);

    const { productoId } = useParams();

    useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, "productos", productoId);
      getDoc(queryDoc).then((res) => setProducts({ id: res.id, ...res.data() }));
    }, [productoId]);

return (
    <>
        {
            products &&
            <ItemDetail product={products}/>
        }
    </>
);
}

export default ItemDetailContainer;
