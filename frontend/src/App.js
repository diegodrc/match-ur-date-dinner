import React from "react";
import { useSelector } from "react-redux";

import { selectStep } from "./redux/features/step/stepSlice";
import TelaInicial from "./components/TelaInicial/TelaInicial";

const App = () => {
  const step = useSelector(selectStep);

  return <div className="App">{step === "telaInicial" && <TelaInicial />}</div>;
};
export default App;
