import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import AddItems from './components/AddItems/AddItems';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SingleItem from './components/SingleItem/SingleItem';
import ProductDetails from './components/ProductDetails/ProductDetails';
// import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }> </Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='inventory/:id' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
