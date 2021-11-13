import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";
import { BsFillCalendarDateFill } from "react-icons/bs";

const BASE_URL = "http://localhost:4000";

export default function Items() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const catg = useParams().catg;
  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = async () => {
    const items = await axios.get(`${BASE_URL}/${catg}`);
    console.log(catg);
    setItems(items.data.results);
    console.log(items.data.results);
  };

  const goToItem = (item) => {
    navigate(`/${catg}/itemDetails/${item.trackId}`);
  };

  return (
    <section className="section-items">
      <div className="cards-box">
        {items.map((item) => (
          <div className="card">
            <div className="fav">
              <button className="icon-btn">
                <AiOutlineHeart />
              </button>
            </div>
            <div
              key={item.trackId}
              onClick={() => {
                goToItem(item);
              }}
            >
              <div className="content-box">
                <p className="card-name">{item.artistName}</p>
                <p className="content-item">
                  <span>
                    <GiEarthAfricaEurope /> Country:
                  </span>{" "}
                  <span>{item.country}</span>
                </p>
                <p className="content-item">
                  <span>
                    <GrCatalog /> Gernre:
                  </span>{" "}
                  <span>{item.primaryGenreName}</span>
                </p>
                <p className="content-item">
                  <span>
                    <BsFillCalendarDateFill /> release Date:
                  </span>
                  <span>
                    {Intl.DateTimeFormat("en-us", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(Date.parse(item.releaseDate))}
                  </span>
                </p>
              </div>
              <img className="card-img" src={item.artworkUrl100} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
