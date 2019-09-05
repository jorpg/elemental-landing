import React, { Component } from "react";
import Logo from "../../assets/images/logo.svg";
import ButtonPrimary from "../../components/button-primary";
import LogoRP from "../../assets/images/rp.png";
import LogoSugarwod from "../../assets/images/sugarwod.png";
import LogoTelegram from "../../assets/images/telegram.png";

class Landing extends Component {
  render() {
    return (
      //header
      <div>
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
            <ButtonPrimary></ButtonPrimary>
          </div>
        </div>
        <div className="section-1">
          <div className="container">
            <div className="d-flex mb-5">
              <div className="media-elemental"></div>
              <div className="ml-4">
                <p>Que es</p>
                <h1>Elemental Platform?</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <img src={LogoRP} alt="RP" className="img-fluid" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
              <div className="col">
                <img src={LogoSugarwod} alt="RP" className="img-fluid" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
              <div className="col">
                <img src={LogoTelegram} alt="RP" className="img-fluid" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="container">
            <div className="content-section-2">
              <div>
                <h3>
                  Estas preparados para dar <br /> un paso adelante a tus metas
                </h3>
                <div>
                  <small>
                    unete a nosotros y se uno de los primeros en probar esta
                    innovador coaching que te hara llegar a tus metetas.
                  </small>
                </div>
              </div>
              <div>
                <ButtonPrimary></ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
