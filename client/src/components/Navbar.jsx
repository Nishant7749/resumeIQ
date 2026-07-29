import icon from '../assets/icon.png'
import {Link} from 'react-router-dom'

export default function Navbar() {

    return(
        <>
        <div>
            <nav className="font-space flex items-center justify-between mx-4 my-2">
                <div className='flex items-center gap-2'>
                    <img className='w-6 h-6' src={icon} alt="icon" />
                    <Link to="/">
                    <h1 className="font-bold text-xl">Resume<span className="text-blue-500">IQ+</span></h1>
                    </Link>
                </div>
                
                <div className="text-blue-500 text-lg hover:text-blue-600 flex gap-5 cursor-pointer">
                     <Link to="/dashboard">Dashboard</Link>
                    <p>Login</p>
                </div>
            </nav>

            <div className='h-0.5 w-full bg-gray-100'></div>
        </div>
        </>
    )
}