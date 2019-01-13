import React from 'react'

class Eventos extends React.Component {
  state = {
    text: '',
    evento: '*'
  }
  
  input = (event) => {
    this.setState({
      text: event.target.value,
      evento: event.type
    })
  }


  manejador = (event) => {
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <a
          href="https://google.com"
          onClick={this.manejador}
          >
           Google
        </a>
      </div>
    )
  }
}

export default Eventos
