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
      <a href="https://doc-0o-24-docs.googleusercontent.com/docs/securesc/r202msvn8ltqh7bb1caotntts84hh1fb/eu4bhad3jlk5ohdbr5hgm2lccqvdet1c/1687769475000/14306609080216797965/14306609080216797965/1d9OpNXN_AbUOvKbUXp4sm5JmIORLFWQy?e=download&ax=ADWCPKCJYVyFBgBCcYh77Z788qWLv0Zfg8kRGZoACcACConOZgDcCWoOeQI30dYdZqrZdiXMEw_TWeghVC41i5Bv0kc2mucFIGwemKWtF8BwGoVk801OOlGoYDDCenujAfgRF8nnnmuG_dwaaKkfGMBo7iDJ_wcaLPL2bglRloAysvI2aL4Eu9CPHpV1Oj5ef2qwGPB9MxJmoPbCWF-Xf3w1TRc6fa8qn8KaZ55uYU9JF9GA4PSCSyoIr0guQRo6mFz9mmkMcLn18fvZfOHZhRlXw--CbmUU7OZ1cjngokqGDPOFOSIluQ92WyV-g-Awf-YH7xViWmZ9I0PHVTaffQ59ERyHrwFLwIvBFLXp72zr6Mcsb79Jifj-0Kj0YeC1RzrPn89zbYlWbu_2mBQ1PjTyBtzYhlwfULRWrmt6LZ3OtiZGsu3lKvuVCOy_3-J_or_HBFnaSPYIja8RKbNd7qBol-ntT2lnHAm224Gs6F-lBOkrbCdUIbYIBIfgR_8MtXRl33jAhDJ3GI5iiQzZfqny1e9IYk20z8XkO2H-uMh7Id_edzxvIOGVfVeQ7C1O6splHyVj2o_fAxuvzTTLrF5vN06XnZTpwydLcnK1zfD7fE2mcl4nuRrl6zwmGqoiKRLYxdI-u_8dwi5npYucgRp7tol4mk241vM6GsEkN3-8zcsVLwZv7YvJ-OGDmhzIrBVKrS9c6Ttqv1LKsnJZyO_G2gZ0wFtztoBgomFbwT3PMFEH4gU9ioXgbqxXfRlEeapmnpqYT15TB5ej2gR7IsClONuZqo3W2K6tQWAdWpkJzdJHvG2JNlkufN8mLZluIyBJDDm98OZiv5p9rGd56Cap0-Zi5tjGZC41WrMLvwVUdwOyORcmqyZnuNZx9dxIXg3W52rv1i9GZbFteaRaqlFgeELesNb-sNtJcg52&uuid=0935d29d-5e04-4fa9-9cfc-9f846f32d969&authuser=1&nonce=1om5n9f0q35sm&user=14306609080216797965&hash=e1doomebqfea9nf1190n4ad7udjkqc0g" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar