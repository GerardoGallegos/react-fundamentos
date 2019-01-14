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

  render () {
    return (
      <div className='box'>
        Hijo { this.props.num }
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

  render () {
    return (
      <div className='box'>
        Padre { this.state.num }
        <Hijo num={this.state.num} />
      </div>
    )
  }
}

export default Padre
