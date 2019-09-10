import React from "react";
import { Link } from "react-router-dom";

const ButtonPrimaryOutlined = ({ title, url }) => (
  <Link to="/" className="btn btn-primary-outlined">
    {title}
  </Link>
);

export default ButtonPrimaryOutlined;
