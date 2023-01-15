import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'
import "./firebase/config";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar2 from './components/Navbar/Navbar2';
import Navbar3 from './components/Navbar/Navbar3';
import { CartContextProvider } from './contexts/CartContext';




function App() { 
  // definido en app
    let saludo  = ''
    // let saludar = () => alert('soy func de app') 
    return (
            <CartContextProvider>

                <BrowserRouter>

                    <div className='App'>
                        <Navbar2 />
                        <Navbar />
                        <Navbar3 />
                        
                        <Routes >
                            <Route path='/' element={ <ItemListContainer saludo={saludo} /> } />
                            <Route path='/categoria/:categoriaId' element={ <ItemListContainer saludo={saludo} /> } />
                            <Route path='/detail/:productoId' element={ <ItemDetailContainer /> } />
                            <Route path='/cart' element={<CartContainer />} />                
                            
                            
                            <Route path='*' element={<Navigate to='/' />}/>
                    
                        </Routes>   
                    </div>
                    
                </BrowserRouter>
                
            </CartContextProvider>
    )
}

export default App

