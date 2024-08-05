import React, {useContext} from 'react';
import { UserContext } from '../context/userContext';
import { Link } from 'react-router-dom';
import  {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {auth, Auth} from '../firebase-config';

const Navbar = () => {


    const { toggleModals } = useContext(UserContext)

    const navigate = useNavigate()

    //gere la deconnexion
    const logOut = async () => {

        try{
            await signOut(auth)
            navigate("/")

        }catch{
            alert("Nous ne pouvons pas vous deconnexter, verifiez votre connexion et reessayer")

        }

    }

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
                
                onClick={()=> toggleModals("signIn")}
                className='btn btn-primary ms-2'>
                    Sign in

                </button>
                <button 
                
                onClick={logOut}
                className='btn btn-danger ms-2'>
                Log out

                </button>
            </div>
            </nav>
        </div>
        
    );
};

export default Navbar;