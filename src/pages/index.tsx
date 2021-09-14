import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import PokemonList from '../components/PokemonList'
import styled from 'styled-components'
const Container = styled.section`
  margin: 0 auto;
`
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Pokemon team</title>
      </Head>
      <Header />
      <PokemonList />
    </Container>
  )
}

export default Home
