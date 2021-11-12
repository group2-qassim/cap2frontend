import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Audiobook from "./itunes/Audiobook";
import Ebook from "./itunes/Ebook";
import Favorite from "./itunes/Favorite";
import Home from "./itunes/Home";
import Music from "./itunes/Music";
import MusicVideo from "./itunes/MusicVideo";
import Podcast from "./itunes/Podcast";
import Software from "./itunes/Software";
import TvShow from "./itunes/TvShow";
import Header from "./itunes/Header";
import Login from "./itunes/Login";
import Main from "./itunes/Main";


function App() {
  return (
    <>
    
      <div className="App"></div>
      <div class="wrapper">
        <div id="navbar">
          <div id="home">
            <Link to="/HOME" class="link-style">
              HOME
            </Link>
            <Link to="/Favorite" class="link-style">
              Favorite
            </Link>
            <Link to="/Login" class="link-style">
              Login
            </Link>
          </div>
        </div>
        <Main/>
      </div>

      <Routes>
        <Route exact path="/Audiobook" element={<Audiobook />} />
        <Route path="/Ebook" element={<Ebook />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Music" element={<Music />} />
        <Route exact path="/MusicVideo" element={<MusicVideo />} />
        <Route exact path="/Podcast" element={<Podcast />} />
        <Route exact path="/Software" element={<Software />} />
        <Route exact path="/TvShow" element={<TvShow />} />
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>

      <div id="footer">
        <h2>All &copy; footer</h2>
      </div>
    </>
  );
}

export default App;
