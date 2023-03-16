import { useState, useEffect } from "react";

function useFetchPeli(tipo, categoria) {
  const[peliculas, setPeliculas] = useState([])
  const[isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    setIsLoading(true)
    fetch(`https://api.themoviedb.org/3/${tipo}/${categoria}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es`)
    .then(res => res.json())
    .then(data => {
      setPeliculas(data.results)
      setIsLoading(false)
    })
  },[])

  // return [peliculas, isLoading]
  return ({
    peliculas: peliculas,
    isLoading: isLoading
  })
}

export default useFetchPeli;