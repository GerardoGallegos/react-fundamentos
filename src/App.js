import React from 'react'
import EstilosEnLinea from './componentes/EstilosEnLinea'

const App = () => (
  <div>
    <EstilosEnLinea name={'Sandia'} price={5.00} />
    <EstilosEnLinea name={'Naranja'} price={1.50} />
    <EstilosEnLinea name='Kiwi' price={3.30} />
  </div>
)

export default App
