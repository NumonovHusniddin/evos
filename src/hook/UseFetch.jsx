import { useEffect, useState } from "react"

export function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isloading, setISLoading] = useState(false)
 

  useEffect(()=> {
    const fetchData = async () => {
      setISLoading(true)
      const request = await fetch(url)
      const response = await request.json()
      setData(response)
      setISLoading(false)
    }
    fetchData()
  }, [url])

  return { data, isloading }
}