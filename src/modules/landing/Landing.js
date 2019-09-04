import React, { Component } from "react";
import Logo from "../../assets/images/logo.svg";
import ButtonPrimary from "../../components/button-primary";

class Landing extends Component {
  render() {
    return (
      //header
      <div className="header">
        <div className="text-center">
          <img src={Logo} alt="logo" className="img-fluid" width="70%" />
          <p>Transforma tu cuerpo y tu mente en 3 meses</p>
        </div>
        <h1>Que deseas?</h1>
        <div className="row">
          <div className="col-4">
            <p>BAJAR DE PESO</p>
          </div>
          <div className="col-4">
            <p>BAJAR MASA MUSCULAR</p>
          </div>
          <div className="col-4">
            <p>MANTENERTE</p>
          </div>
        </div>
        <div>
          <ButtonPrimary>Comenzar ahora</ButtonPrimary>
        </div>
      </div>
    );
  }
}
export default Landing;
