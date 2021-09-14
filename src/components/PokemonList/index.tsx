import React, { useState, useCallback, useEffect } from 'react'
import { Colors, Pokemon } from '../../interfaces'
import * as S from './styles'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'
import MyTeam from '../MyTeam'
const Index = () => {
  const [pokemons, setPokemons] = useState<Pokemon>([{}])
  const { data, loading } = useFetch<Colors>(
    `http://localhost:3000/api/typescolors`
  )
  const getDataColors = useCallback(async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=199'
    )
    const json = await response.data
    // console.log(json)
    let pokemonPush = []

    for (let i = 0; i < response.data.results.length; i++) {
      pokemonPush.push(axios.get(`${json.results[i].url}`))
    }
    axios.all(pokemonPush).then(
      axios.spread((...spread) => {
        const pokemonPush: Pokemon = [{}]
        for (let pokemonItem of spread) {
          pokemonPush.push(pokemonItem.data)
        }
        setPokemons(prev => [...prev, ...pokemonPush])
      })
    )
  }, [])

  useEffect(() => {
    getDataColors()
  }, [getDataColors])

  const [clickedIndex, setClickedIndex] = useState({})

  const handleClick = (index: number) => () => {
    setClickedIndex(state => ({
      ...state,
      [index]: !state[index]
    }))
  }
  if (!pokemons) return null
  return (
    <>
      <MyTeam colors={data} selected={clickedIndex} pokemons={pokemons} />
      <h3 style={{ maxWidth: 360, margin: '0 auto' }}>Choose the pokemon</h3>
      <S.ContainerList>
        {pokemons
          .filter(({ id }) => id)
          .map(({ id, name, sprites, types }, index) => {
            if (name) {
              return (
                <S.ListItem key={id} onClick={handleClick(index)}>
                  <S.PokemonId>
                    {clickedIndex[index] ? (
                      'selected'
                    ) : (
                      <S.TextId>#{id}</S.TextId>
                    )}
                  </S.PokemonId>
                  <S.PokemonInfo>
                    <S.PokemonAvatar
                      style={{
                        backgroundImage:
                          sprites?.other['official-artwork'].front_default
                      }}
                    />
                    <S.PokemonName>{name}</S.PokemonName>
                  </S.PokemonInfo>
                  <S.ContentLineType>
                    {types.map(({ type }, index) => {
                      if (!loading) {
                        return (
                          <S.LineType
                            style={{
                              border: `2px solid ${data?.[type.name]}`
                            }}
                            key={index}
                          />
                        )
                      }
                    })}
                  </S.ContentLineType>
                </S.ListItem>
              )
            }
          })}
      </S.ContainerList>
    </>
  )
}

export default Index
