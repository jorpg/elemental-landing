import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ButtonPrimaryWhite = ({ title }) => (
  <Link to="/que-deseas" className="btn btn-primary-white">
    Comenzar ahora
  </Link>
);

export default ButtonPrimaryWhite;
