import useFetchPeli from "../hooks/useFetchPeli";
import SeccionPeliculas from "./SeccionPeliculas";

function Home() {

  // const [series, isLoading] = useFetchPeli("tv", "popular")  
  const { peliculas: series, isLoading: isLoadingSeries  } = useFetchPeli("tv", "popular")
  const { peliculas, isLoading } = useFetchPeli("movie", "popular")

  return (

    <div >
      <SeccionPeliculas 
        titulo= "peliculas populares"
        isLoading={isLoading}
        peliculas={peliculas}
        isTv={false}
      />

      <SeccionPeliculas 
        titulo= "series populares"
        isLoading={isLoadingSeries}
        peliculas={series}
        isTv={true}
      />
    </div>

);
}

export default Home;