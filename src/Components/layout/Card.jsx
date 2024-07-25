import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="conteudo">
        {props.children}{" "}
        {/*Tudo que eu passar dentro da tag vai aparecer aqui*/}
      </div>

      <div className="footer">{props.titulo}</div>
    </div>
  );
};

export default Card;
