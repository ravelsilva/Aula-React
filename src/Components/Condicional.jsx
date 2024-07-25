import React from "react";

const Condicional = (props) => {
  return (
    <>
      <h1>O número é {props.numero}</h1>

      {props.numero % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
    </>
  );
};

export default Condicional;
