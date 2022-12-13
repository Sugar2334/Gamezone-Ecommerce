import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    
    const { productoId } = useParams()
    console.log(productoId)
    
    // useEffect -> gFetch(productoId) -> un objeto

    return (
        <ItemDetail

            // product={product}
        />
    )
}

export default ItemDetailContainer
