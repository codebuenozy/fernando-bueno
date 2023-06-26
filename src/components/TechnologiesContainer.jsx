import {DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiReact, DiMongodb, DiMysql, DiGit, DiNpm, DiSass} from 'react-icons/di';

import "../css/technologiescontainer.css";

const technologies = [
  {id: "git", name: "Git", icon: <DiGit />, url: "https://git-scm.com/docs/git", description: "Sistema de controle de versão distribuído."},
  {id: "html", name: "HTML", icon: <DiHtml5 />, url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML", description: "Linguagem de marcação utilizada para estruturação."},
  {id: "css", name: "CSS", icon: <DiCss3 />, url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS", description: "Linguagem de estilização em cascata"},
  {id: "js", name: "JavaScript", icon: <DiJsBadge />, url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", description: "Linguagem de programação interpretada e multi-paradigma."},
  {id: "node", name: "NodeJS", icon: <DiNodejsSmall />, url: "https://nodejs.org/pt-br/docs", description: "Ambiente de execução JS do lado do servidor."},
  {id: "npm", name: "NPM", icon: <DiNpm />, url: "https://docs.npmjs.com/", description: "Gerenciador de pacotes para o ecossistema NodeJS."},
  {id: "sass", name: "SASS", icon: <DiSass />, url: "https://sass-lang.com/documentation", description: "Pré-processador CSS que permite escrever de forma mais eficiente."},
  {id: "react", name: "React", icon: <DiReact />, url: "https://pt-br.react.dev/blog/2023/03/16/introducing-react-dev", description: "Biblioteca JS para construir interfaces de usuário interativas."},
  {id: "mysql", name: "MySQL", icon: <DiMysql />, url: "https://dev.mysql.com/doc", description: "Sistema de gerenciamento de banco de dados relacional."},
  {id: "mongo", name: "MongoDB", icon: <DiMongodb />, url: "https://www.mongodb.com/docs", description: "Banco de dados NoSQL orientado a documentos."}
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <a href={tech.url}>{tech.description}.</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer