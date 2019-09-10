import React, { Component } from "react";
import Logo from "../../assets/images/logo.svg";

import { Icon } from "react-icons-kit";
import { iosArrowLeft } from "react-icons-kit/ionicons/iosArrowLeft";
import { Link } from "react-router-dom/cjs/react-router-dom";
import ButtonPrimaryOutlined from "../../components/button-primary-outlined";

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
            <div className="content-form">
              <form className="mb-5">
                <div class="form-group">
                  <label for="exampleInputEmail1" className="text-left w-100">
                    Cm
                  </label>
                  <input
                    type="text"
                    class="form-control input-form"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="0"
                  />
                </div>
              </form>
              <ButtonPrimaryOutlined>Siguiente</ButtonPrimaryOutlined>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormFour;
