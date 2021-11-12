import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fav from "./components/Fav";
import Home from "./components/Home";
import Search from "./components/Search";
import Items from "./components/Items";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/favorite" element={<Fav />} />
        <Route path="/search/:str" element={<Search />} />
        <Route path="/items/:catg" element={<Items />} />
        <Route path="/:catg/itemDetails/:id" element={<ItemDetails />} />
        <Route path="*" element={<h1> 404 </h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
