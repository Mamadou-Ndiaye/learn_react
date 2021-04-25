import React from 'react'

function Menu() {
  return (
    
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
 
        <a className="navbar-brand" href="#">Logo</a>
        
        
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <a className="nav-link" href="/">Docs </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/tutoriel">Tutoriel</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/community">Community</a>
            </li>
        </ul>
</nav>

    
  )
}

export default Menu
