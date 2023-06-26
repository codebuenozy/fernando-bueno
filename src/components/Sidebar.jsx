import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/foto-perfil.png";

import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Fernando Bueno" />
      <p className="title">Desenvolvedor JS</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1d9OpNXN_AbUOvKbUXp4sm5JmIORLFWQy/view?usp=sharing" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar