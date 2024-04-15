import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/add">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <NavLink className="nav-link active" aria-current="page" to="/add">Add User</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/show">Show User</NavLink>
              </li>              
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar