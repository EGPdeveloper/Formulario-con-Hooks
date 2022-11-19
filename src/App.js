import React from "react";
import Formulario from "./componentes/Formulario/Formulario";

/*  
Inicializar Proyecto en terminal: npm start
Detener el proyecto: Ctrl+C 
PascalCase AplicacionSegundaPalabra, Usar mayusculas para las palabras
camelCase onClick
*/

class App extends React.Component {




  render() {
    return(
      <div className="container">
        <h1>Formulario</h1>
        <Formulario />
    
      </div>     
    );
    
  }
}

export default App;
