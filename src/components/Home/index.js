import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
export default function Home() {
  const navigate = useNavigate();

  //movie, podcast, music,  tvShow, software, ebook, all ,musicVideo

  let items = [
    {
      name: "podcast",
      link: "/items/podcast",
      img: "https://images.squarespace-cdn.com/content/v1/59a09811cd0f681bc9d6e848/1518732849326-6RDF3Z7NJT5QRCXN0G92/Mic.gif?format=1000w",
    },
    {
      name: "software",
      link: "/items/software",
      img: "https://7huck.com/images/app-dev.gif",
    },
    {
      name: "movies",
      link: "/items/movies",
      img: "https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif",
    },
    {
      name: "music",
      link: "/items/music",
      img: "https://i.pinimg.com/originals/d7/a9/95/d7a995f34f372832860215bbe65f2cc1.gif",
    },
    {
      name: "tvShow",
      link: "/items/tvShow",
      img: "https://cdn4.vectorstock.com/i/1000x1000/93/33/retro-old-vintage-television-on-white-background-vector-20569333.jpg",
    },
    {
      name: "ebook",
      link: "/items/ebook",
      img: "https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif",
    },
    {
      name: "musicVideo",
      link: "/items/musicVideo",
      img: "https://i.pinimg.com/originals/be/00/bd/be00bde483fb57dd98481f3af1036920.gif",
    },
    {
      name: "all",
      link: "/items/all",
      img: require(`./../../img/all.png`).default,
    },
  ];

  return (
    <>
      <section className="main1">
        <section className="section-items1">
          <div className="cards-box">
            {items.map((item, index) => (
              <div className="card1">
                <div
                  key={index}
                  onClick={() => {
                    navigate(item.link);
                  }}
                >
                  <img className="card-img" src={item.img} />
                  <h1>hello</h1>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
