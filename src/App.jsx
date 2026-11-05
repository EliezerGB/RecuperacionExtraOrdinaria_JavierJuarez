import { useState } from 'react'
import { useFetch } from "./hooks/useFetch"
import UsuarioCard from "./components/UsuarioCard"

function App(){
  const{data: usuarios,cargando} = useFetch('https://api.tvmaze.com/shows')
  console.log(usuarios[0]?.name)

  return(
    <div className="container py-5">
      <h1 className="text-center text-primary mb-4">Directorio de Shows</h1>
    {cargando ? (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">cargando shows desde la api...</p>
        </div>
    ):(
      <div className="row">
        <h1>Shows</h1>
        {usuarios.map((usuario)=> {
          <UsuarioCard key={usuario.id} datos={usuario}/>
        })}
        </div>
    )}
    </div>
  )
}

export default App