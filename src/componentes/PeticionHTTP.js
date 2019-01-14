import React from 'react'

class PeticionHTTP extends React.Component {
  state = {
    users: [],
    cargando: true
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({
        users: data,
        cargando: false
      }))
  }

  render () {
    return (
      <div>
        <h1>Solicitud HTTP</h1>
        <h2>{ this.state.message }</h2>
        { this.state.cargando
          ? (
            <div>Cargando...</div>
          )
          : (
            <ul>
              { this.state.users.map(user => (
                <li key={user.id}>
                  { user.name }
                  <a href={`https://${user.website}`}>
                    Website
                  </a>  
                </li>
              )) }
            </ul>
          )
        }
      </div>
    )
  }
}

export default PeticionHTTP
