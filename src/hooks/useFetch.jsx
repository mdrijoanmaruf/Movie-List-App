import React, { useEffect, useState } from 'react'

const useFetch = (apiPath, queryTerm='') => {
    const [data , setData] = useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=ed502838dc57d4bda8fe9116240c0124&query=${queryTerm}`
    console.log(url)

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
    }, [url])
  return {data}
}

export default useFetch