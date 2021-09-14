export type Colors = {
  bug: string
  fairy: string
  ghost: string
  steel: string
  ice: string
  dark: string
  fighting: string
  grass: string
  poison: string
  water: string
  flying: string
  dragon: string
  fire: string
  ground: string
  psychic: string
  electric: string
  rock: string
}
export type Poke = {
  id?: number
  name?: string
  sprites?: {
    other: {
      ['official-artwork']: {
        ['front_default']: string
      }
    }
  }
  types?: [
    {
      slot: number
      type: {
        name: string
      }
    }
  ]
}

export type Pokemon = [Poke, ...Poke[]]
