export default function Navbar({setpagina}){
    return(
        <nav className= "navbar navbar-expand navbar-dark bg-dark px-4 mb-4">
            <span className = "navbar-brand">Shows ITR</span>
            <div className="navbar-nav ms-auto">
                <button className=" nav-link btn text-white me-3" onClick={()=> setpagina('inicio')}>Inicio</button>
                <button className="nav-link btn texr-white" onClick={()=> setpagina('usuarios')}>usuarios</button>
            </div>
        </nav>
    )
}