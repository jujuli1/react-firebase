import React, {useContext} from 'react';
import { UserContext } from '../context/userContext';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const { toggleModals } = useContext(UserContext)

    return (
        <div>
            <nav className='navbar navbar-light bg-light px-4'>
            <Link to="/" className='nabbar-brand'>AuthJS</Link>

            <div>
                <button 
                onClick={()=> toggleModals("signUp")}
                className='btn btn-primary'>
                    Sign up

                </button>
                <button 
                
                onClick={()=> toggleModals("signIp")}
                className='btn btn-primary ms-2'>
                    Sign in

                </button>
                <button 
                
                
                className='btn btn-danger ms-2'>
                Log out

                </button>
            </div>
            </nav>
        </div>
        
    );
};

export default Navbar;