import { useState } from "react";

function Contador() {

  const [valor, setValor] = useState(0) 
  // let valor = 0

  const addMaisUm = () => setValor((prev) => prev + 1);

  return (
    <>
      <h1>{valor}</h1>
      <button onClick={ addMaisUm }>Add +</button>
    </>
  )
}

export default Contador