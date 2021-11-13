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

export default function Fav() {
  const navigate = useNavigate();
  const [fav, setFav] = useState([]);
  const [change, setChange] = useState(0);

  useEffect(() => {
    //getAllItems();
    getAllFav();
  }, []);

  const getAllFav = async () => {
    const items = await axios.get(`${BASE_URL}/user/getFav`);
    setFav(items.data);
    //console.log(items.data);
  };

  const goToItem = async (item) => {
    console.log(item);
    axios
      .post(`${BASE_URL}/user/addToCurrent`, {
        result: item,
      })
      .then(function (response) {
        navigate(`/itemDetails/${item.trackId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setInFav = (itemObj) => {
    setChange(change + 1);
    const found = fav.find((found) => {
      return found.itemObj.trackId == itemObj.trackId;
    });

    if (found == undefined)
      axios
        .post(`${BASE_URL}/user/addToFav`, {
          itemObj,
        })
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    else {
      // console.log(found);
      axios
        .post(`${BASE_URL}/user/deleteFav`, {
          itemObj,
        })
        .then(function (response) {
          //console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    getAllFav();
  }, [change]);

  return (
    <section className="section-items">
      <div className="cards-box">
        {fav.map((item) => (
          <div className="card">
            <div className="fav">
              <button
                className="icon-btn"
                onClick={() => {
                  setInFav(item.itemObj);
                }}
              >
                <AiFillHeart />
              </button>
            </div>
            <div
              key={item.itemObj.trackId}
              onClick={() => {
                goToItem(item.itemObj);
              }}
            >
              <div className="content-box">
                <p className="card-name">{item.itemObj.artistName}</p>
                <p className="content-item">
                  <span>
                    <GiEarthAfricaEurope /> Country:
                  </span>{" "}
                  <span>{item.itemObj.country}</span>
                </p>
                <p className="content-item">
                  <span>
                    <GrCatalog /> Gernre:
                  </span>{" "}
                  <span>{item.itemObj.primaryGenreName}</span>
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
                    }).format(Date.parse(item.itemObj.releaseDate))}
                  </span>
                </p>
              </div>
              <img
                className="card-img"
                src={
                  item.itemObj.artworkUrl600 !== undefined
                    ? item.itemObj.artworkUrl600
                    : item.itemObj.artworkUrl512 !== undefined
                    ? item.itemObj.artworkUrl512
                    : item.itemObj.artworkUrl100
                }
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
