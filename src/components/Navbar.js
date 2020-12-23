import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Navbar =() => {
    return (
         <React.Fragment>
            <nav className="nav-wraper indigo darken-4">
                <div className="container">
                    <NavLink className="brand-logo " to="/">Moviegallery</NavLink>
                    <Link className="sidenav-trigger"  id="#" data-target="mobile-links">
                      <i className="material-icons">menu</i>
                   </Link>
                    <ul className="right hide-on-med-and-down">
                        <li className="nav-list"><NavLink exact to="/" className="main-nav">Upcoming</NavLink></li>
                        <li className="nav-list" ><NavLink exact to="/popular" className="main-nav">Popular</NavLink></li>
                        <li className="nav-list" ><NavLink exact to="/toprated" className="main-nav">Top rated</NavLink></li>
 
                    </ul>  
                </div>  
                  <ul className="sidenav"  id="mobile-links">
                        <li><NavLink to="/" className="indigo-text darken-4">Upcoming</NavLink></li>
                        <li><NavLink to="/popular" className="indigo-text darken-4">Popular</NavLink></li>
                        <li><NavLink to="/toprated" className="indigo-text darken-4">Top rated</NavLink></li>
                    </ul>  
            </nav>  

        </React.Fragment>
    )
}

export default Navbar