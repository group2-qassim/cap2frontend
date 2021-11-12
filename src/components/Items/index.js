import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    setItems(items.data.results);
    console.log(items.data.results);
  };

  const goToItem = (item) => {
    navigate(`/${catg}/itemDetails/${item.trackId}`);
  };

  //artistName
  //

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.trackId}
            onClick={() => {
              goToItem(item);
            }}
          >
            <h4>{item.artistName}</h4>
          </div>
        ))}
      </ul>
    </div>
  );
}
