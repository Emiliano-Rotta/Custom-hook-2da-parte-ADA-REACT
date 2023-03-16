import useFetchPeli from "../hooks/useFetchPeli";

function Ultimos() {

  const { peliculas, isLoading } = useFetchPeli("movie", "upcoming")
  console.log(peliculas)

  return (

      <div >
          <h1>Ultimos PELICULAs</h1>
          {isLoading && <h1>CARGANDOOOOOOOO.....</h1>}
          {peliculas?.map(p => (
            <h4 key={p.id}>{p.title}</h4>
          ))}
        

      </div>

  );
}

export default Ultimos;