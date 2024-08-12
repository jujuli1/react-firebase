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
        <div style={{ gap: '100px' }}>
            <nav className='navbar navbar-light bg-light px-4' >
            

            <div>
                {/**<button 
                onClick={()=> toggleModals("signUp")}
                className='btn btn-primary'>
                    Sign up

                </button> */}
                <button 
                
                onClick={()=> toggleModals("signIn")}
                className='btn btn-primary ms-2' style={{ boxShadow: '5px 4px 15px rgba(22, 11, 119, 1)', marginRight:"40px" }}>
                    Sign in

                </button>
                <button 
               
                onClick={logOut}
                className='btn btn-danger ms-2' style={{ boxShadow: '5px 4px 15px rgba(129, 3, 3, 1)' }}>
                Log out

                </button>
            </div>
            </nav>
        </div>
        
    );
};

export default Navbar;