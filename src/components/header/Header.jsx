import React from 'react'
import "./Header.css"
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"><a href="#"><img src="https://conselhodobrasil.org/wp-content/uploads/2020/07/ONG_CPB_branco-300x235.png" alt="" /></a></div>
        <nav className="header__nav">
          <ul>
            <li><a href="#"> Home </a></li>
            <li><a href="https://conselhodobrasil.org/" target="_blank"> Sobre Nós </a></li>
            <li><a href="https://conselhodobrasil.org/contato/" target="_blank"> Contato </a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header