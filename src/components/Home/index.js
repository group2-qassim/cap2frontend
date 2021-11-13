import React from "react";
import { useNavigate } from "react-router-dom";
import music from "../../img/music.png";
import Podcast1 from "../../img/podcast.png";
import MusicVideo1 from "../../img/MusicVideo.png";
import Audiobook1 from "../../img/Audiobook.png";
import TvShow1 from "../../img/TvShow.png";
import Software1 from "../../img/Software.png";
import "./style.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Home</h1>

        <div>
          <img
            src={Podcast1}
            class="img"
            alt="#"
            onClick={() => {
              navigate("/items/podcast");
            }}
          />
          <img
            src={MusicVideo1}
            class="img"
            alt="#"
            onClick={() => {
              navigate("/items/musicVideo");
            }}
          />
          <img
            src={music}
            class="img"
            alt=""
            onClick={() => {
              navigate("/items/music");
            }}
          />
          <img
            src={Audiobook1}
            class="img"
            alt=""
            onClick={() => {
              navigate("/items/audiobook");
            }}
          />
          <img
            src={TvShow1}
            class="img"
            alt=""
            onClick={() => {
              navigate("/items/tvShow");
            }}
          />
          <img
            src={Software1}
            class="img"
            alt=""
            onClick={() => {
              navigate("/items/software");
            }}
          />
          <img
            src={Audiobook1}
            class="img"
            alt=""
            onClick={() => {
              navigate("/items/ebook");
            }}
          />
          <img
            src={Podcast1}
            class="img"
            alt="#"
            onClick={() => {
              navigate("/items/movies");
            }}
          />
          <img
            src={Podcast1}
            class="img"
            alt="#"
            onClick={() => {
              navigate("/items/all");
            }}
          />
        </div>
      </div>
    </>
  );
}
