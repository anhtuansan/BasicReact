import "./App.css";
import Home from "./components/home/Home.jsx";

import ParentComponent from "./components/learnPros/ParentComponent.jsx";
// import HomePage from "./components/learnBootstrap/HomePage/HomePage.jsx";
import Test from "./components/learnBootstrap/HomePage/Test.jsx";

import HeaderB5 from "./components/buoi5/HeaderB5.jsx";
import FooterB5 from "./components/buoi5/FooterB5.jsx";
import B5 from "./components/buoi5/B5.jsx";
import B5Practice from "./components/b5practice/B5Practice.jsx";
import Nav from "./components/buoi6/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import B6 from "./components/buoi6/B6.jsx";
import About from "./components/buoi6/About.jsx";
import UserDetails from "./components/buoi6/UserDetails.jsx";
import NavB6 from "./components/b6practice/NavB6.jsx";
import HomeB6 from "./components/b6practice/HomeB6.jsx";
import ProductList from "./components/b6practice/ProductList.jsx";
import TestB6 from "./components/buoi6/TestB6.jsx";
import Detail from "./components/b6practice/Detail.jsx";

function App() {
  return (
    <>
      {/* <NavB6 /> */}
      <Nav />

      <Routes>
        {/* <Route path="/" element={<HomeB6 />} /> */}
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/detail" element={<Detail />} />

        <Route path="/" element={<B6 />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<TestB6 />} />

        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}
export default App;
