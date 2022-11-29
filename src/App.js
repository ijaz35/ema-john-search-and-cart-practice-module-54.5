import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/LogIn/Login';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
