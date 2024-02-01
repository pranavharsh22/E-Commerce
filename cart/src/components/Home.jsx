import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import { searchGlobal } from "../jotai";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [searchValue] = useAtom(searchGlobal);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  const[query,setQuery]=useState('')

  
  return (
    <div className="home-container">
     
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
          <h2>Mobile Phones</h2>
          <div className="products">
            {data.filter(itm => itm.name?.toLowerCase().includes(searchValue?.toLowerCase()))?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt="" />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
