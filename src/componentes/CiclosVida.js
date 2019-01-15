import React from 'react'

class CiclosVida extends React.Component {
  constructor () {
    super()
    console.log('Constructor')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentDidUpdate (prevProps) {
    console.log(prevProps, this.props)
    console.log('componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    console.log('render')
    return (
      <div>
        <h1>Ciclos de Vida</h1>
        <h2>{ this.props.fecha }</h2>
      </div>
    )
  }
}

class Base extends React.Component {
  state = {
    montado: false,
    fecha: 'Fecha Actual'
  }

  montar = () => {
    this.setState({ montado: true })
  }

  desmontar = () => {
    this.setState({ montado: false })
  }

  actualizar = () => {
    this.setState({
      fecha: new Date().toLocaleString()
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.montar}>Montar</button>
        <button onClick={this.actualizar}>Actualizar</button>
        <button onClick={this.desmontar}>Desmontar</button>
        { this.state.montado && <CiclosVida fecha={this.state.fecha}/> }
      </div>
    )
  }
}

export default Base

