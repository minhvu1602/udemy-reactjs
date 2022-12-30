import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ListProducts from "./components/ListProducts";
import MyCart from "./components/CartShopping";
import ListOrders from "./components/ListOrders";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPost } from "./redux/action/productAction";
import Footer from "./components/Footer";
import "./assets/styles/_all.scss";
import HomePages from "./components/HomePages";

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
          <Route path="/" exact element={<HomePages />} />
          <Route path="/productList" element={<ListProducts />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/order" element={<ListOrders />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
