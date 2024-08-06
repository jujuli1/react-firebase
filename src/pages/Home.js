import React, {useContext}from 'react';
import { UserContext} from '../context/userContext';
import Coordonnees from '../components/Coordonnee';
import Competences from '../components/Competences';

const Home = () => {

    const {currentUser} =  useContext(UserContext)
    return (
        <div className='container p-5'>
            <h1 className='display-2 text-light'>
            <h1 className='display-2 text-light'>
        {currentUser ? (
          <>
            <Competences />
            <Coordonnees />
          </>
        ) : (
          "Inscrivez-vous ou connectez-vous"
        )}
      </h1>
            
            </h1>
            
        </div>
    );
};

export default Home;