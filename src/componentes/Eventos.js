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

  render () {
    return (
      <div>
        <input
          onChange={this.input}
          onCopy={this.input}
          onPaste={this.input}
        />
        <h1>{ this.state.text }</h1>
        <h2>{ this.state.evento }</h2>
      </div>
    )
  }
}

export default Eventos
