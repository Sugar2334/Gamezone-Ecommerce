import { useCartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom";
import "./CartContainer.css";

import { addDoc, collection,getFirestore } from 'firebase/firestore'
import { useState } from "react";

const CartTotal = (product) => {
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        confirmarEmail: "",
        phone: ""
})
    const { cartList, vaciarCarrito} = useCartContext();

    const generarOrden = () => {
        
      const { name, email, confirmarEmail, phone } = dataForm;
      
      if(name === "") {
        alert("Por favor ingrese un nombre")
      } else if(email === "") {
        alert("Por favor ingrese un mail")
      } else if(phone === "") {
        alert("Por favor ingrese un telefono")
      } else if(email !== confirmarEmail) {
        alert("Los Emails no coinciden")
      } else {
        const order = {}
        order.buyer = dataForm
  
        order.item = cartList.map( ({ name, id, price }) => ({name, id, price}) )
        const db = getFirestore()
        const queryOrder = collection(db, 'orders')
  
        addDoc(queryOrder, order).then(({id}) => {
            alert(`Orden registrada 
             Codigo de Orden: ${id}
             Cliente: ${dataForm.name} 
             Total: $${precioTotal.toLocaleString("de-DE")}`)
            vaciarCarrito()
            setDataForm({
                name:"",
                email:"",
                phone:""
            })
        })
      }
    }

    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name] : e.target.value
        })
    }


    const precioTotal = cartList.reduce(
        (acc, el) => acc + parseInt( el.price*el.cantidad), 0);



        if (cartList.length === 0) {
            return (
              <>
                <div className="container-fluid my-5">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                      <h4>Aún no agregaste elementos en el carrito</h4>
                    </div>
                    <div className="col-12 col-md-6">
                      <Link to="/" className="btn btn-secondary">
                        Ir a hacer compras
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          }
    return <div className="container">
    <div className='cartTotal'>
        <form onSubmit={generarOrden}>
            <div className="form-group w-100">
                <label htmlFor="name">Nombre</label>
                <input 
                type="text" 
                className="form-control" 
                name="name" 
                placeholder="Ingresa el nombre" 
                value={dataForm.name} required
                onChange={handleOnChange}
                />
                <label htmlFor="email">Email</label>
                <input 
                type="text" 
                className="form-control" 
                name="email" 
                placeholder="Ingresa el email" 
                value={dataForm.email} required
                onChange={handleOnChange}
                />
                <input 
                type="text" 
                className="form-control" 
                name="confirmarEmail" 
                placeholder="Confirme el email" 
                value={dataForm.confirmarEmail} required
                onChange={handleOnChange}
                />
                <label htmlFor="telefono">Telefono</label>
                <input 
                type="text" 
                className="form-control" 
                name="phone" 
                placeholder="Ingresa el número" 
                value={dataForm.phone} required
                onChange={handleOnChange}
                />
            </div>
        </form>
        <div className="contenedor">
            <button className="btn btn-primary" onClick={() => vaciarCarrito(product.id)}>Vaciar Carrito</button>
        <button className="btn btn-success" onClick={generarOrden}>
            Generar Orden
          </button>
        </div>
        <h3>Total a pagar: ${precioTotal.toLocaleString("de-DE")}</h3>
    </div>
    </div>
};

export default CartTotal;