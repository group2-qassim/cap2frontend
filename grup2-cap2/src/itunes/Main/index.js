import {React,Link} from 'react-router-dom'
import "./style.css"
import music from "../../img/music.png";
import Podcast1 from "../../img/podcast.png";
import MusicVideo1 from "../../img/MusicVideo.png";
import Audiobook1 from "../../img/Audiobook.png";
import TvShow1 from "../../img/TvShow.png";
import Software1 from "../../img/Software.png";

function Main() {
    return (
        <>
             <div>
             <Link to="/Podcast" class="link-style">
          <img src={Podcast1} class="img" alt="#" />
        </Link>
        <Link to="/MusicVideo" class="link-style">
          <img src={MusicVideo1} class="img" alt="#" />
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
      </>
        
    )
}

export default Main
