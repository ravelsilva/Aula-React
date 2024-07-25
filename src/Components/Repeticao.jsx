import products from "./data/products";
import React from "react";
import "./Repeticao.css";
const Repeticao = () => {
  function getProdutosListItem() {
    return products.map((prod) => (
      <li key={prod.id}>
        Item: {prod.name} - Valor: R${prod.price}
      </li>
    ));
  }

  return (
    <>
      <h2>Repeticao</h2>
      <ul>{getProdutosListItem()}</ul>
    </>
  );
};

export default Repeticao;
