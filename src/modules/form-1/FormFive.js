import React, { Component } from "react";
import Logo from "../../assets/images/logo.svg";
import VisaLogo from "../../assets/images/visa-pay-logo.svg";

import { Icon } from "react-icons-kit";
import { iosArrowLeft } from "react-icons-kit/ionicons/iosArrowLeft";
import { iosCheckmarkOutline } from "react-icons-kit/ionicons/iosCheckmarkOutline";
import { Link } from "react-router-dom/cjs/react-router-dom";
import ButtonPrimaryOutlined from "../../components/button-primary-outlined";

class FormFive extends Component {
  render() {
    return (
      <div>
        <div className="bg-form-payment">
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
              PYMENT DETAIL
            </h2>
            <div className="content-form mb-2">
              <form className="mb-5">
                <div class="form-row mb-3">
                  <div class="col-md-6">
                    <label className="text-left w-100">Email</label>
                    <input
                      type="text"
                      class="form-control input-form"
                      placeholder="email@mail.com"
                    />
                  </div>
                  <div class="col-md-6">
                    <label className="text-left w-100">
                      Numero de Telefono
                    </label>
                    <input
                      type="text"
                      class="form-control input-form"
                      placeholder="1222 4444 6666"
                    />
                  </div>
                </div>
                <div class="form-row mb-3">
                  <div class="col-md-8">
                    <label className="text-left w-100">Card Number</label>
                    <input
                      type="text"
                      class="form-control input-form"
                      placeholder="email@mail.com"
                    />
                  </div>
                  <div class="col-md-4">
                    <img
                      src={VisaLogo}
                      alt="pay"
                      className="img-fluid"
                      width="60"
                    />
                  </div>
                </div>
                <div class="form-row mb-3">
                  <div class="col-md-7">
                    <label className="text-left w-100">Cardholder Name</label>
                    <input
                      type="text"
                      class="form-control input-form"
                      placeholder="Richard Hendrinks"
                    />
                  </div>
                  <div class="col-md-3">
                    <label className="text-left w-100">Expiration</label>
                    <input
                      type="text"
                      class="form-control input-form"
                      placeholder="17/2021"
                    />
                  </div>
                  <div class="col-md-2">
                    <label className="text-left w-100">CCV</label>
                    <input
                      type="text"
                      class="form-control input-form"
                      placeholder="453"
                    />
                  </div>
                </div>
              </form>
              <ButtonPrimaryOutlined>Checkout</ButtonPrimaryOutlined>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormFive;
