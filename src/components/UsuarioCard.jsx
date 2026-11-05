export default function UsuarioCard({datos}){

    console.log("en card")
    return(
       <>
       <h1>Datos</h1>
       <p>{datos?.name}</p>
       </>
    )
}