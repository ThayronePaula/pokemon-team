import styled from 'styled-components'

export const ContainerList = styled.ul`
  max-width: 280px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-row-gap: 16px;
`
export const ListItem = styled.li`
  width: 60px;
  position: relative;
  z-index: 999;
`
export const PokemonId = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #90adc6;
  position: absolute;
`
export const TextId = styled.h5`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
`
export const PokemonInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* height: 45px; */
`
export const PokemonAvatar = styled.div`
  margin-top: 18px;
  width: 45px;
  height: 45px;
  background-image: url(${props => props.style.backgroundImage});
  background-size: cover;
  background-position: top center;
`
export const PokemonName = styled.h6`
  color: #333652;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  margin: 10px 0;
`
export const ContentLineType = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LineType = styled.div`
  width: 28px;
  border: ${props => props.style.border};
  &:first-child {
    margin-left: 3px;
    margin-right: 2px;
  }
`
