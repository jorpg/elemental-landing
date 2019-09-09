import React, { Component } from "react";
import Logo from "../../assets/images/logo.svg";

import { Icon } from "react-icons-kit";
import { iosArrowLeft } from "react-icons-kit/ionicons/iosArrowLeft";
import { iosCheckmarkOutline } from "react-icons-kit/ionicons/iosCheckmarkOutline";
import { Link } from "react-router-dom/cjs/react-router-dom";

class FormOne extends Component {
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
              <Link to="/" className="link-back">
                <Icon icon={iosArrowLeft} className="float-left" size={34} />
              </Link>
              Que deseas?
            </h2>
            <div className="content-form">
              <Link to="/genero">
                <div className="btn-selection active">
                  <Icon
                    size={24}
                    icon={iosCheckmarkOutline}
                    className="icon-check"
                  />
                  <span>Bajar de peso</span>
                </div>
              </Link>
              <div className="btn-selection">
                <span>Ganar masa muscular</span>
              </div>
              <div className="btn-selection">
                <span>Mantenerte</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormOne;
