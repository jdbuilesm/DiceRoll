export default function Resultado({ sum, max }) {
    console.log("componente resultado");
  
    if (!sum) {
      return null;
    }
  
    return (
      <div>
        <h1>Resultado</h1>
        <p>total obtenido: {sum}</p>
        <p>de un maximo posible: {max * 6}</p>
      </div>
    );
  }
  