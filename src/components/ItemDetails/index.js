import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { AiOutlineHeart } from "react-icons/ai";


const BASE_URL = "http://localhost:4000";

export default function ItemDetails() {
  const id = useParams().id;
  const catg = useParams().catg;
  const [item, setItem] = useState({});

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    const item = await axios.get(`${BASE_URL}/${catg}/${id}`);
    setItem(item.data);
    console.log(item.data);
  };

  return (
    <section className="section-description">
      <div className="container">
        <div className="desc-grid">

            
          <div className="img-desc">
          <div className="fav">
              <button className="icon-btn">
                <AiOutlineHeart />
              </button>
            </div>
            <img src={item.artworkUrl100} />
          </div>
          <div className="content-desc">
            <div className="item-desc">
              <span className="title">{item.artistName}</span>
            </div>
            <div className="item-desc">
            
            <p>Kind: </p><span>{item.kind}</span>
            </div>
            <div className="item-desc">
              <p>Collection Name:</p>
              <span>{item.collectionName}</span>
            </div>
            <div className="item-desc">
              <p>Price:</p>
              <span>
                {item.collectionPrice} {item.currency}
              </span>
            </div>
            <div className="item-desc">
              <p>Release date:</p>
              <span>{item.releaseDate}</span>               
            </div>
            <div className="item-desc">
              <p>Country:</p>
              <span>{item.country}</span>
            </div>
            <div className="item-desc">
              <p>Genres:</p>
              <span>{item.genres}</span> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
