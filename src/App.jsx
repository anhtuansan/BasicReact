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

function App() {
  return (
    <>
      <Nav />


      <Routes>
        <Route path="/" element={<B6 />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/user/:id" element={<UserDetails />} /> */}
      </Routes>

    </>
  );
}
export default App;
