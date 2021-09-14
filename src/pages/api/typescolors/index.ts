import { NextApiRequest, NextApiResponse } from 'next'

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req

    switch (method) {
      case 'GET':
        res.status(200).json({
          bug: '#89960B',
          fairy: '#DA93DD',
          ghost: '#AD6EEC',
          steel: '#8F8E9E',
          ice: '#9BDEFB',
          dark: '#322C26',
          fighting: '#80311D',
          grass: '#68BB2B',
          poison: '#924694',
          water: '#5CC1ED',
          flying: '#5D74D5',
          dragon: '#6B57D2',
          fire: '#EC5D35',
          ground: '#D0B155',
          psychic: '#DA3063',
          electric: '#F4CB38',
          rock: '#9D853C',
          normal: '#C3C0B8'
        })
        break
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: 'error.message' })
  }
}
export default handle
