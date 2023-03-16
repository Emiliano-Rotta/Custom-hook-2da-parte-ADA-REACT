import useFetchPeli from "../hooks/useFetchPeli";

function Populares() {

  const { peliculas, isLoading } = useFetchPeli("movie", "popular")

  return (

      <div >
          <h1>Populares</h1>
          {isLoading && <h1>CARGANDOOOOOOOO.....</h1>}
          {peliculas?.map(p => (
            <h4 key={p.id}>{p.title}</h4>
          ))}
        

      </div>

  );
}

export default Populares;