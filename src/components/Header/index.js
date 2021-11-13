import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import "./style.css";
import { BsSearch } from "react-icons/bs";
export default function Header() {
  const navigate = useNavigate();
  const viewSearchPage = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${e.target.value}`);
    }
  };
  return (
    <div>
      <div id="navbar2">
        <img className="logo2" src={logo} class="img" alt="#" />
        <div id="home2">
          <Link to="/" className="space">
            Home
          </Link>
          <Link to="/favorite" className="space">
            Favorite
          </Link>
        </div>

        <div className="seacsh-box2">
          <input
            className="search2"
            placeholder="Search..."
            type="text"
            name="searchText"
            onKeyPress={(e) => {
              viewSearchPage(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}
