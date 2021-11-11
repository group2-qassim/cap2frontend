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

function App() {
  return (
    <>
      <div className="App"></div>
      <div class="wrapper">
        <div id="navbar">
          <ul id="home">
            <Link to="/HOME" class="link-style">
              HOME
            </Link>
            <Link to="/Favorite" class="link-style">
              Favorite
            </Link>
          </ul>
        </div>
        <Link  to="/Podcast" class="link-style"><img src={'data:image/jpeg;base64,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'} alt="#"/>
       </Link>
      <Link to="/MusicVideo" class="link-style">
          MusicVideo
        </Link>
        <Link to="/Music" class="link-style">
          Music
        </Link>
        <Link to="/Audiobook" class="link-style">
          Audiobook
        </Link>
        <Link to="/TvShow" class="link-style">
          TvShow
        </Link>
        <Link to="/Software" class="link-style">
          Software
        </Link>
        <Link to="/Ebook" class="link-style">
          Ebook
        </Link>
        <Link to="/Login" class="link-style">
        Login
        </Link>
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
