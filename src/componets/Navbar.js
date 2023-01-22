import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Navbar.scss'

const Navbar = () => {
    return(
        <div className = 'parent'>
            <div className = "logo">
                Amongus
            </div>
            <nav className = 'item'>
                <ul className = 'ul'>
                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/about'>About</Link>
                    </li>
                    <li>
                        <Link to = '/quotes'>Quotes</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar