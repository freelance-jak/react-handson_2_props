import React from "react";
import ReactDOM from "react-dom";

import ColorfulMsg from "./components/ColorfulMsg";

const App = () => {
  return (
    <>
      <h2>Reactハンズオン！</h2>
      <ColorfulMsg color="blue">Reactは難しくないよー</ColorfulMsg>
      <ColorfulMsg color="green">Vueも難しくないよー</ColorfulMsg>
      <ColorfulMsg color="red">Angularは、、、</ColorfulMsg>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
