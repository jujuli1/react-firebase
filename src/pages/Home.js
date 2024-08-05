import React, {useContext}from 'react';
import { UserContext} from '../context/userContext';


const Home = () => {

    const {currentUser} =  useContext(UserContext)
    return (
        <div className='container p-5'>
            <h1 className='display-2 text-light'>
            {currentUser ? "Welcome" : "Inscrivez vous ou connectez vous" }
            </h1>
            
        </div>
    );
};

export default Home;