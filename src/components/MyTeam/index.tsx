import * as S from './styles'
import VetorUp from '../VetorUp'
import VetorDown from '../VetorDown'
import axios from 'axios'
import React from 'react'
import { Colors, Pokemon, Poke } from '../../interfaces'
import { useEffect, memo } from 'react'

type MyTeamProps = {
  colors: Colors
  selected: object
  pokemons: Pokemon
}

const Index = ({ colors, selected, pokemons }: MyTeamProps) => {
  const [item, setItem] = React.useState([{}, {}, {}, {}, {}, {}])
  const [pokemonSelected, setPokemonSelected] = React.useState<Poke[]>()

  useEffect(() => {
    const pokemonSelected = pokemons
      .filter(({ id }) => id)
      .filter(({ id }) => selected[id - 1])
    setPokemonSelected(pokemonSelected)
    function pokemonItem(pokemonSelected) {
      const editedTaskList = item.map((pokemon, index) => {
        if (pokemonSelected.length && pokemonSelected.length > index) {
          return [...pokemonSelected]
        }
        return pokemon
      })
      setItem(editedTaskList)
    }
    pokemonItem(pokemonSelected)
  }, [selected])

  console.log(pokemonSelected)
  return (
    <S.Team>
      {item?.map((poke, index) => {
        return (
          <S.SelectedPokemon
            key={index}
            style={{ justifySelf: index > 2 ? 'end' : 'center' }}
          >
            <VetorUp
              fillColor={
                colors && colors[pokemonSelected[index]?.types[0].type.name]
              }
            />
            <VetorDown />
            {pokemonSelected?.length > 0 && pokemonSelected?.length > index && (
              <S.PokemonAvatar
                style={{
                  backgroundImage:
                    pokemonSelected[index].sprites.other['official-artwork']
                      .front_default
                }}
              />
            )}
          </S.SelectedPokemon>
        )
      })}
    </S.Team>
  )
}
export default memo(Index)
