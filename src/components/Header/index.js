import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const viewSearchPage = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${e.target.value}`);
    }
  };

  return (
    <div class="wrapper">
      <div id="navbar">
        <div id="home">
          <Link to="/" class="link-style">
            HOME
          </Link>
          <Link to="/favorite" class="link-style">
            Favorite
          </Link>
        </div>
        <input
          type="text"
          name="searchText"
          onKeyPress={(e) => {
            viewSearchPage(e);
          }}
        />
      </div>
    </div>
  );
}
