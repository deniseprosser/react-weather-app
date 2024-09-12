import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city"
              className="search-bar"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="search-button" />
          </div>
        </div>
      </form>
    </div>
  );
}
