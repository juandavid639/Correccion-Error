import React, { useState}  from 'react';
import Posteos from './components/Posteos';
import Estatus from './components/Estatus';

// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

export function App() {
  
  return (
    <div className="App">
      <Estatus />
      <Posteos />
    </div>
  );
}

export default App;
