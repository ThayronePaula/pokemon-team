import styled from 'styled-components'

export const Team = styled.section`
  max-width: 360px;
  height: 245px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`

export const SelectedPokemon = styled.div`
align-self: center;
  width: 70px;
  height: 70px;
  position: relative;
`
export const PokemonAvatar = styled.div`
  position: absolute;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-image: url(${props => props.style.backgroundImage});
  background-size: cover;
  background-position: top center;
`
