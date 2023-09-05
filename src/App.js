import { createBrowserRouter , createRoutesFromElements ,RouterProvider , Route } from 'react-router-dom';
import './App.css';
import Product from './Component/Product';
import Navigation from './Component/Navigation';
import Dahbord from './Component/Dahbord';
import Cart from './Component/Cart';



function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navigation/>}>

    <Route index element={<Dahbord/>}></Route>
    <Route path='cart' element={<Cart/>}></Route>
  </Route>

))




  return (
    <div className="App">
      <RouterProvider router={router}/>
  
    </div>
  );
}

export default App;
