import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ProductContext } from "../Contexts/ProductContexts"


function Navbar() {

  const {products , title} = useContext(ProductContext)
 
  


  return (
   <>
   
   <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  <div className="container-fluid">
    <NavLink  className={(navData) => `nav-link ${navData.isActive ? "active" : ""}`} to="am">{title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink  className={(navData) => `nav-link ${navData.isActive ? "active" : ""}`} to="/">Home ({products.length})
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink  className={(navData) => `nav-link ${navData.isActive ? "active" : ""}`} to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className={(navData) => `nav-link ${navData.isActive ? "active" : ""}`} to="/blog">Blog</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  className={(navData) => `nav-link ${navData.isActive ? "active" : ""}`} to="/contact">Contact</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
   
   </>
  )
}

export default Navbar