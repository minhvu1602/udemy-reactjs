import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartShopping from "./components/CartShopping";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPost } from "./redux/action/productAction";
import ImageBG from "./components/ImageBg";

function App() {
  const dispatch = useDispatch();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    function fetchData() {
      dispatch(getListPost());
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<ImageBG />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/cart" element={<CartShopping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
