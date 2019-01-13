import React from 'react'
import EstilosConClase from './componentes/EstilosConClase'

const App = () => (
  <div>
    <EstilosConClase name={'Sandia'} price={5.00} />
    <EstilosConClase name={'Naranja'} price={1.50} />
    <EstilosConClase name='Kiwi' price={3.30} />
  </div>
)

export default App
