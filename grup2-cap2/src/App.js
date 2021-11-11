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
import music from "./img/music.png";
import Podcast1 from "./img/podcast.png";
import MusicVideo1 from "./img/MusicVideo.png";
import Audiobook1 from "./img/Audiobook.png";
import TvShow1 from "./img/TvShow.png";
import Software1 from "./img/Software.png";

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
        <Link to="/Podcast" class="link-style">
          <img src={Podcast1} class="img" alt="" />
        </Link>
        <Link to="/MusicVideo" class="link-style">
          <img src={MusicVideo1} class="img" alt="" />
        </Link>
        <Link to="/Music" class="link-style">
          <img src={music} class="img" alt="" />
        </Link>
        <Link to="/Audiobook" class="link-style">
          <img src={Audiobook1} class="img" alt="" />
        </Link>
        <Link to="/TvShow" class="link-style">
          <img src={TvShow1} class="img" alt="" />
        </Link>
        <Link to="/Software" class="link-style">
          <img src={Software1} class="img" alt="" />
        </Link>
        <Link to="/Ebook" class="link-style">
          <img src={Audiobook1} class="img" alt="" />
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
