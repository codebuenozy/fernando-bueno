import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import "../css/informationcontainer.css";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <a href="https://api.whatsapp.com/send?phone=5511970967963">(11) 97096-7963</a>
        </div>
        </div>
        <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <a href="mailto:nando_silverz@hotmail.com">nando_silverz@hotmail.com</a>
        </div>
        </div>
        <div className="info-card">
        <AiFillEnvironment id="location-icon" />
        <div>
          <h3>Localização</h3>
          <p>Suzano/SP</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer