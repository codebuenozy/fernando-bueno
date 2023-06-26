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
      <a href="https://doc-0o-24-docs.googleusercontent.com/docs/securesc/r202msvn8ltqh7bb1caotntts84hh1fb/rj4tahavqjeru4rcm7n0k6eoonngu1bd/1687761900000/14306609080216797965/14306609080216797965/1d9OpNXN_AbUOvKbUXp4sm5JmIORLFWQy?e=download&ax=ADWCPKAdf-ZbqvYaPK1cwsvF9twAkUaeaQx3otjFflhToJO6cdZOmlHComPnHGF92889eNV60KCc_-inxS-NHgeUKHTtpDf0GDQZS4W9g1oHZAKsORtSzrf77AosxFuRKOhtiHEfMDsB_5kj_aTnpt2ei42Yxi1_C68YIpSXuNzyPKIXmcPiIXiy32Ai-GK1NOz9VRm3EIrsZ6L1V4FaMpFC5sGoD_ygIhbMi1v_LuFAg_XQi9RSLA__X6BOUnq09TABXl6zWSeYJu5HKSpruwQgEHBI3ONrY-aho7U8NnhnQSeh6cFBQbtTe3ZG0AyiiZLuZ28Y7JYmQ6fmKz8jwMZXIZcJvidC2aijt8ntx00bju0e_lWHroiRnJe18BIdDAk8RXXLek6fNHMcTZ1y-t9YnYOLPvtqBWZhJP46mrdWGdI8BHyjnnYbQ3TndZGVWCYuShotO3yJUmfkR6AQ_H91bRCKWjcWrh17TUztSFODEHdaUePYrTtVKy5oSaQhRg-6Y3IRwe8yDhOAwAsSloCsRlxB81mp_d4zk2w3tUZ6hWnJFUh-muw6-FLpNjVl8pYcgf29Y9z6T0A5MuE4xuqywGT_sFgBkVfvIsyA88k_rPdGeIswRbD_OkOphUNgnifsbfHlumo2LgFEzffAxkBZCbal30ksiF-JGjpgKQejlEfFe1WNZJd5kIoHu9u04oFblbRzNkr69ob9GIarLdUZjC3CZOXTG5fKDtizvf0DBuhQ8l5DrrqKN5y8mIG-mcqqMzvkO9ZGwbQh5Z2wYYUGLYAG9sGTeRXd4pOn84UzMI1o6p3NPu63WfkmiTYW5PW5sx1Q0mg6C7BpOHrLTY5KhdLfg0IJtjcdugGDvS9E3bmYYBkdrm2LYZ0_0zoXTc-30b4PB3r8mv5zWUkgmgAP3OEfizvzhIgGlHqn&uuid=040f58ee-6005-473e-b6ca-ea0d415653f1&authuser=1&nonce=70poevp2itmq0&user=14306609080216797965&hash=ivuvra71g1o1seqt0tessd5vje5rj8s6" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar