import React, { useState } from "react"

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



export const ItemCount = ({initial,stock,onAdd,productId, showVerMas}) => {
    const [ contador, setearContador ] = useState(initial) 

    const increase = () => {
        setearContador(contador + 1)
    } 
    
    const decrease = () => {
        setearContador(contador -1)
    }

    return (
        <center>
        <button
            disabled={stock <= 0}
            className="btn btn-primary btn-block"
            style={{ marginRight:'1rem'}}
            onClick={() => onAdd(contador)}  
        > 
            Agregar al carrito 
        </button>
        <button
            disabled={contador >= stock}
            className="btn btn-success btn block"
            onClick={increase} 
        > 
            + 
        </button>     
        <label
            style={{marginLeft:'.4rem', marginRight:'.4rem'}}
            htmlFor="">{contador}
        </label>
      
        <button
            disabled={contador <= 1}
            className="btn btn-danger btn-block" 
            onClick={decrease} 
        > 
            - 
        </button> 
        {
            showVerMas &&
            <Link to={`/detail/${productId}`}>
                        <Button style={{ marginTop:'1rem'}}variant="btn btn-success btn-block">Ver Mas</Button>
            </Link>
        }
    </center>
    )
}

export default ItemCount;