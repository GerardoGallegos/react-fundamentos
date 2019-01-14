import React from 'react'

class Nieto extends React.Component {
  render () {
    return (
      <div className='box'>
        Nieto
        { this.props.saludo }
        <strong>
          { this.props.numero }
        </strong>
      </div>
    )
  }
}

class Hijo extends React.Component {
  state = {
    saludo: 'Hola Ninja PRO'
  }

  manejadorClick = () => {
    this.props.clickHijo(500)
  }

  render () {
    return (
      <div className='box'>
        Hijo { this.props.num }
        <button
          onClick={this.manejadorClick}
        >
          Ejecutar
        </button>
        <Nieto
          saludo={this.state.saludo}
          numero={this.props.num}
        />
      </div>
    )
  }
}

class Padre extends React.Component {
  state = {
    num: 0
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        num: this.state.num + 1
      })
    }, 1000)
  }

  actualizar = (numero) => {
    this.setState({
      num: numero
    })
  }

  render () {
    return (
      <div className='box'>
        Padre { this.state.num }
        <Hijo
          num={this.state.num}
          clickHijo={this.actualizar}  
        />
      </div>
    )
  }
}

export default Padre
