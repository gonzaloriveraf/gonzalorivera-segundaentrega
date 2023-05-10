import './Navbar.css'
import brand from '../../img/logo_onwine.svg'
import MenuItems from '../MenuItems'


const NavBar = () => {


    return (


        <nav className="navbar navbar-expand-md navbar-light bg-white pt-4">

            <div className="Navbar container d-flex justify-content-space-between">

                <a href="/"className="navbar-brand"  ><img alt="tienda onwine" src={brand} /></a>

                <MenuItems />

            </div>

        </nav>



    )

}


export default NavBar