import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/foto-perfil.png";

import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Fernando Bueno" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar