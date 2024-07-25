import "./App.css";
import Primeiro from "./Components/Primeiro";
import ComParametro from "./Components/ComParametro";
import React from "react";
import ComFilhos from "./Components/ComFilhos";
import Card from "./Components/layout/Card";
import Repeticao from "./Components/Repeticao";
import Condicional from "./Components/Condicional";
const App = () => {
  return (
    <div className="container">
      <Card titulo="#01 Primeiro Componente">
        <Primeiro />
      </Card>
      <Card titulo="#02 Com parametros">
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
      </Card>
      <Card titulo="#03 Com filhos">
        <ComFilhos>
          <ul>
            <li>Ravel</li>
            <li>Eliza</li>
            <li>Miguel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#04 Repetição">
        <Repeticao />
      </Card>
      <Card titulo="#06 Condicional">
        <Condicional numero={10} />
      </Card>
    </div>
  );
};

export default App;
