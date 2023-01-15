import { useCartContext } from "../../contexts/CartContext"

import "./CartContainer.css";
import CartTotal from "./CartTotal";


const CartContainer = () => {

  const { cartList, removeElement} = useCartContext()
  const rendercartList = () => {
      return cartList.map((product) =>{
  
        return (
          <>
          <div className="tabla">
          <div className="cartContent" key={product.id}>
            <img src={product.foto} alt="product.name" />
            <h2 className="count">{product.cantidad}</h2>
            <h3 className="name">{product.name}</h3>
            <h4 className="price">${(product.price*parseInt(product.cantidad)).toLocaleString("de-DE")}</h4>
            <button className="btn btn-danger" style={{height:40}} onClick={() => removeElement(product.id)}>Borrar</button>
          </div>        
          </div>
          </>
        );
      });
     
    }
    return ( 
      <>
      {rendercartList()}
      <CartTotal/>
      </>
    )
  };
  
  export default CartContainer
  