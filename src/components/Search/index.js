import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

export default function Search() {
  const str = useParams().str;
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems();
  }, [str]);

  const getAllItems = async () => {
    const results = await axios.get(`${BASE_URL}/search/all/${str}`);
    setItems(results.data.results);
    console.log(results.data.results);
  };
  return (
    <div>
      <h1>search</h1>
    </div>
  );
}
