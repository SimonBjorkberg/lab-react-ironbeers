import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return ( <div className="navbar">
        <nav className="h-20 w-full border-white border-2 shadow-xl bg-blue-400 fixed flex justify-center">
        <Link className="text-white font-bold text-2xl w-full h-full flex items-center justify-around" to={'/'}>Home</Link>
        </nav>
    </div> );
}
 
export default Navbar;