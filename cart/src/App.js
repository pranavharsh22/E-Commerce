import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { useGetAllProductsQuery } from "./features/productsApi";


function App() {
  const{data}=useGetAllProductsQuery()
 
  
 
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />

        <Routes>
          <Route exact path="/cart"  Component={Cart} />
          <Route exact path="/"  Component={Home}  />
          <Route exact path="/notfound" Component={NotFound} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
