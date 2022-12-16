import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 
  // definido en app
    let saludo  = ''
    // let saludar = () => alert('soy func de app') 
    return (
        <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path='/' element={ <ItemListContainer saludo={saludo} /> } />
                <Route path='/categoria/:categoriaId' element={ <ItemListContainer saludo={saludo} /> } />
                
                <Route path='/detail/:productoId' element={ <ItemDetailContainer /> } />
                <Route path='/cart' element={<CartContainer />} />                
                {/* <Route path='/notpage' element={<Componente404 />} />                 */}
                
                <Route path='*' element={<Navigate to='/' />}/>
          
            </Routes>   
            
        </BrowserRouter>     
    )
}

export default App

