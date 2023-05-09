import React from "react";
import "./sidelink.css";
import { Link, useLocation } from "react-router-dom";

export const Sidelink = ({ name, icon, url }) => {
  const location = useLocation();
  return (
    <Link
      to={url}
      className={"sidelink__root " + (location.pathname === url ? "sidelink__root--active" : "")}
    >
      <div className="sidelink__icon">{icon}</div>
      <p className="sidelink__name">{name}</p>
    </Link>
  );
};
