import React from "react";

const ComFilhos = (props) => {
  return <div>
    <h3>Os filhos:</h3>
    {
      props.children
    }
  </div>;
};

export default ComFilhos;
