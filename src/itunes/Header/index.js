import {React,Link} from 'react'

function Header () {
    return (
        <div>
              <Link to="/HOME" class="link-style">
              HOME
            </Link>
            <Link to="/Favorite" class="link-style">
              Favorite
            </Link>
            
        </div>
    )
}

export default Header