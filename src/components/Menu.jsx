import React from 'react';
import { Link,NavLink} from 'react-router-dom';


function Menu() {
  return (
    
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
 
        <a className="navbar-brand" href="#">Logo</a>
        
        
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                 <Link className="nav-link" to="/">Docs </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/tutoriel">Tutoriel</Link>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/community/">Community</NavLink>
            </li>
        </ul>
</nav>

    
  )
}

export default Menu
