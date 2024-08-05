import React, {useContext} from 'react';
import { UserContext } from '../../context/userContext';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const Private = () => {

    const {currentUser} = useContext(UserContext)
    console.log("PRIVATE", currentUser)

    //vérifie si currentuser est sur true, ramène sur la page d'acceuil si il est sur false
    if(!currentUser) {
        return <Navigate to="/"/>
    }
    return (
        <div className='container'>

            {/** si currentuser est sur true*/}
            <Outlet/>

            
        </div>
    );
};

export default Private;