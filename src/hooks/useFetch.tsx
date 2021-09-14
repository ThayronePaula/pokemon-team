import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch<T>(url: string, options?:object) {
  const [data, setData] = useState<T>(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading('loading...')
    setData(null)
    setError(null)
    axios
      .get(url, options)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        setError('An error occurred. Awkward..')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}
export default useFetch
