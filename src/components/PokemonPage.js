import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchName: "",
  }



  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState({ pokemons }))
  }




  filterPokemon = (e) => {
    this.setState({
      searchName: e.target.value,
      pokemons: this.state.pokemons
    })
  }



  postPokemon = (e) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        hp: e.target.hp.value,
        sprites: {front: e.target.frontUrl.value, back: e.target.backUrl.value }})
    }).then(res => res.json()).then(res => console.log(res))
  }






  render() {

   const searchedPokes = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchName))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm postPokemon={this.postPokemon} />
        <br />
        <Search filterPokemon={this.filterPokemon} />
        <br />
        <PokemonCollection pokemons={searchedPokes} />
      </Container>
    )
  }
}
export default PokemonPage
