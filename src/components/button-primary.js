import React from "react";
import { Link } from "react-router-dom";

const ButtonPrimary = ({ title }) => (
  <Link to="/que-deseas" className="btn btn-primary">
    Comenzar ahora
  </Link>
);

export default ButtonPrimary;
