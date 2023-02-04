import { useState } from "react";
import { Link } from "react-router-dom";

import './intercambiabilidad.css';


const ButtonCart= () => {

    return (
        <>
        <div className="container">
            <div className="btn-1">
                <Link to='/cart' >
                    <button
                        className="btn btn-primary"
                        >Finalizar Compra</button>
                </Link>
                </div>
                <div className="btn-2">
                <Link to='/'>
                    <button
                    className="btn btn-primary"
                    >Seguir comprando</button>
                </Link>
            </div>
        </div>
        </>
    )
}


const ItemCount= ({handleInter})=> {
    
    return (
        <button
                className="btn btn-outline-success"
                onClick={handleInter}
            >Agregar al carrito</button>
    )
}

const Intercambiabilidad = () => {
    const [ inputType, setInputType ] = useState('button')

    const onAdd=()=>{
        setInputType('input')
    }

    return (
        <div>
            {
                inputType !== 'button' ?
                    <ItemCount handleInter={onAdd} />
                :
                    <ButtonCart />
            }
               
        </div>
    )
}



export default Intercambiabilidad