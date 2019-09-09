import React, { Component } from "react";
import Logo from "../../assets/images/logo.svg";
import IconMen from "../../assets/images/men.svg";
import IconWoman from "../../assets/images/woman.svg";

import { Icon } from "react-icons-kit";
import { iosArrowLeft } from "react-icons-kit/ionicons/iosArrowLeft";
import { iosCheckmarkOutline } from "react-icons-kit/ionicons/iosCheckmarkOutline";
import { Link } from "react-router-dom/cjs/react-router-dom";

class FormThree extends Component {
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
              <Link to="/que-deseas" className="link-back">
                <Icon icon={iosArrowLeft} className="float-left" size={34} />
              </Link>
              ¿Cuántos años tienes?
            </h2>
            <div className="content-form"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormThree;
