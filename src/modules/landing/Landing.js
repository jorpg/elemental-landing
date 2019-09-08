import React, { Component } from "react";
import Logo from "../../assets/images/logo-iso.png";
import IsoText from "../../assets/images/logo-text-white.png";
import ButtonPrimary from "../../components/button-primary";
import LogoRP from "../../assets/images/rp.png";
import LogoSugarwod from "../../assets/images/sugarwod.png";
import LogoTelegram from "../../assets/images/telegram.png";
import LogoText from "../../assets/images/elemental-fonts.svg";

import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { instagram } from "react-icons-kit/fa/instagram";
import { share2 } from "react-icons-kit/icomoon/share2";
import ButtonPrimaryWhite from "../../components/button-primary-white";

class Landing extends Component {
  render() {
    return (
      //header
      <div>
        <div className="header">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center">
              <div className="mr-3">
                <img src={Logo} alt="logo" className="img-fluid" />
              </div>
              <div>
                <img src={IsoText} alt="logo" className="img-fluid" />
                {/* <p className="m-0 subtitle-logo">
                  Transforma tu cuerpo y tu mente en 3 meses
                </p> */}
              </div>
            </div>
            <h1 className="title-opt">Que deseas?</h1>
            <div className="content-text-opt text-center">
              <div>
                <h5 className="text-opt">BAJAR DE PESO</h5>
              </div>
              <div>
                <h5 className="text-opt">GANAR MASA MUSCULAR</h5>
              </div>
              <div>
                <h5 className=" text-opt">MANTENERTE</h5>
              </div>
            </div>
            <div className="text-center">
              <ButtonPrimary></ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="section-1">
          <div className="container">
            <div className="d-flex mb-5">
              <div className="media-elemental"></div>
              <div className="ml-4">
                <h3 className="text-primary-section">Que es</h3>
                <h1 className="title-section">Elemental Platform?</h1>
                <p className="text-section">
                  Que es elemental Platform? En su primera fase de
                  implementación, es la unión detres aplicaciones que serán
                  complementos de tu coach virtual, creando un sistema de
                  transformación a través de tres procesos principales, la
                  nutrición, elentrenamiento fisico y el coaching 24/7. para
                  motivarte y llevarte de la mano en tu proceso de
                  transformación.
                  <br />
                  Buscamos la creación de nuevos hábitos saludables, que te
                  ayuden a blindarte contra las enfermedades crónicas, mejorando
                  asi tu calidad de vida. para lograr todas las metas que te
                  propongas con un cuerpo y una mente sana Contamos con un staff
                  de coaches profesionales de mucha experienciainternacional
                  listos para darte el soporte que necesitas para cuando lo
                  necesites.
                </p>
              </div>
            </div>
            <div className="row text-center content-sponsor">
              <div className="col p-sponsor">
                <div>
                  <img
                    src={LogoRP}
                    alt="RP"
                    className="img-fluid mb-4"
                    width="120"
                  />
                </div>
                <small className="text-center text-sponsor">
                  RP Diet, para realizar un conteo de macros eficiente,enfocado
                  en tu meta personal, bien sea perdida de peso,ganancia de masa
                  muscular o simplemente mantenimiento,esta herramienta es top
                  en los procesos de transformaciones fisicas en el mundo,
                  dignos aleados a nuestro sistema detransformación herramienta
                  de fácil uso para armar tus comidas eficientemente con
                  propositos especificos
                </small>
              </div>
              <div className="col divider-center">
                <div>
                  <img
                    src={LogoSugarwod}
                    alt="RP"
                    className="img-fluid mb-4"
                    width="180"
                  />
                </div>
                <small className="text-center text-sponsor">
                  Sugarwod, que nos ayudara a entregarte una rutina
                  deentrenamiento adaptadas a tus necesidades y a tus
                  metaspermitiéndonos trackear tus resultados de entrenamiento
                  ycomprobar las métricas para ver tus avances y asi crear
                  rutinas mas eficientes para ti; Trabajamos con tresmodelos
                  principales de entrenamientos, Crossfit,
                  Gimnasiosconvencionales y funcional (para realizarlos outdoor)
                  Puedes seleccionar el que mas te convenga
                </small>
              </div>
              <div className="col p-sponsor">
                <div>
                  <img
                    src={LogoTelegram}
                    alt="RP"
                    className="img-fluid mb-3"
                    width="160"
                  />
                </div>
                <small className="text-center text-sponsor">
                  Telegram sera el canal para darte soporte motivación yayuda
                  cuando la necesites porque detrás de todo este sistema esta un
                  staff de coaches de mucha experienciainternacional, en la
                  preparación fisica y mental para el logode metas, por ultimo
                  pero no menos importante tendremospara ti un grupo de soporte
                  que interactúa diariamentepara motivar y dar soporte mutuo en
                  este proceso.
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="container">
            <div className="content-section-2">
              <div>
                <h3 className="title-section-2">
                  Estas preparados para dar <br /> un paso adelante a tus metas
                </h3>
                <div>
                  <small>
                    unete a nosotros y se uno de los primeros en probar esta
                    innovador coaching que te hara llegar a tus metetas.
                  </small>
                </div>
              </div>
              <div className="my-4">
                <ButtonPrimaryWhite></ButtonPrimaryWhite>
              </div>
            </div>
          </div>
        </div>
        <div className="section-1">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <h1 className="title-section mb-5">
                  Preguntas <br /> Frecuentes
                </h1>
              </div>
              <div className="col">
                <div className="mb-4">
                  <h4 className="text-primary-section">Lorem Ipsum</h4>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </small>
                </div>
                <div className="mb-4">
                  <h4 className="text-primary-section">Lorem Ipsum</h4>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </small>
                </div>
                <div>
                  <h4 className="text-primary-section">Lorem Ipsum</h4>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="banner-left">
            <div className="content-text-banner">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="banner-right">
            <div className="content-text-banner">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div>
            <img
              src={LogoText}
              alt="Elemental"
              className="img-fluid"
              width="200"
            />
          </div>
          <div>
            <small className="m-0">Copyright Elemental Platform</small>
          </div>
          <div>
            <a>
              <small className="link-footer-text">Quiénes somos</small>
            </a>
          </div>
          <div>
            <a>
              <small className="link-footer-text">Términos y Condiciones</small>
            </a>
          </div>
          <div>
            <a className="link-footer">
              <Icon className="icon-footer" size={14} icon={share2} />
            </a>
            <a className="link-footer">
              <Icon className="icon-footer" size={18} icon={facebook} />
            </a>
            <a className="link-footer">
              <Icon className="icon-footer" size={18} icon={instagram} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
