import React from 'react'
import { Card } from 'semantic-ui-react'
class PokemonCard extends React.Component {


  state = {
    frontCard: true,
  }



  changeCardSide = () => {
    this.setState({ frontCard: !this.state.frontCard })
  }



  render() {

    const pokemon = this.props.pokemon

    return (

      <Card>
        <div className="card" onClick={this.changeCardSide} >
          <div className="image">
            {this.state.frontCard ? (
              <img src={pokemon.sprites.front} alt="oh no!" />
            ) : (<img src={pokemon.sprites.back} alt="oh no!" />)}
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}
export default PokemonCard
