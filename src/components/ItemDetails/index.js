import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    //console.log(item.data);
  };

  return (
    <div>
      <h1>ncx nnx</h1>
    </div>
  );
}
