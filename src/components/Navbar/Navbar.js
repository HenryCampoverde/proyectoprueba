import { useState } from "react"

const Navbar = () => {
    const [user, setUser] = useState(null)

    const login = () => {
      setUser({id:1,nombre:"HCJ"})
    }
    const logout = () => {
      setUser(null)
    }
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-primary bg-gradient">
  <div className="container-fluid ">
    <span>Usuario: {user? user.nombre : "Desconocido"}</span>
    <button className="navbar-toggler text-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-black" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Citas
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Jose</a></li>
            <li><a className="dropdown-item" href="#">Alberto</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Walter</a></li>
            <li><a className="dropdown-item" href="#">Henrysito</a></li>
            
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 text-black" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success text-black" type="submit">Buscar</button>
      </form>
      {user 
          ? (<button 
                className="btn btn-outline-success" 
                type="Button" 
                onClick = {logout} >Cerrar Sesion
        </button>)
          : (<button 
                className="btn btn-outline-success" 
                type="Button" 
                onClick = {login} >Iniciar Sesion
        </button>)
      }
    </div>
  </div>
</nav>
    )
}

export default Navbar 