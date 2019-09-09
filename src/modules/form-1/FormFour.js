import React, { Component } from "react";
import Logo from "../../assets/images/logo.svg";

import { Icon } from "react-icons-kit";
import { iosArrowLeft } from "react-icons-kit/ionicons/iosArrowLeft";
import { iosCheckmarkOutline } from "react-icons-kit/ionicons/iosCheckmarkOutline";
import { Link } from "react-router-dom/cjs/react-router-dom";

class FormFour extends Component {
  render() {
    return (
      <div>
        <div className="bg-form">
          <img
            src={Logo}
            alt="elemental"
            width="400px"
            className="img-fluid mb-3"
          />
          <div className="card-form">
            <h2 className="font-weight-bold">
              <Link to="/edad" className="link-back">
                <Icon icon={iosArrowLeft} className="float-left" size={34} />
              </Link>
              ¿Cuántos mides?
            </h2>
            <div className="content-form"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormFour;
