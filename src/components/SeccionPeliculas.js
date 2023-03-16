const SeccionPeliculas = ({ titulo, isLoading, peliculas, isTv }) => {
    return (
        <>
            <h1>{titulo}</h1>
            {isLoading && <h1>CARGANDOOOOOOOO.....</h1>}
            {peliculas?.map(p => (        
            <h4 key={p.id}>{isTv ? p.name : p.title}</h4>
    ))}
        </>
    )
}

export default SeccionPeliculas;