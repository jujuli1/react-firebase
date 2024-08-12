import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import gif from './cafe.webp'
import './PrivateHome.css'
import Competences from '../../../components/Competences';
import Presentation from '../../../components/Presentation';
import Contact from '../../../components/Contact/Contact';
import Modal from '../../../components/Modale';
const PrivateHome = () => {

    const [position, setPosition] = useState(0);
    const [moving, setMoving] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    

  const moveElement = () => {
    setPosition((prevPosition) => (prevPosition + 270) % 360); // deplace de 270 degres

    if (moving) {
        // Si l'élément est déjà en mouvement, revenir à la position initiale (0 degrés)
        setPosition(0);
      } else {
        // Sinon, faire pivoter de 270 degrés
        setPosition(270);
      }
      setMoving(!moving);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

    const [animated, setAnimated] = useState(false);
    const transformStyle = `translate(100px, 100px) rotate(${position}deg) translate(-100px, -100px)`;
    return (

      
        <div className='container p-5' style={{ display: 'flex', flexDirection: 'row-reverse' }}>

            


              {/** div de decoration crocher */}
            <div style={{ marginLeft: '585px', marginTop: '50px' }}>
               
                    <div
                style={{
                    backgroundColor: 'dark',
                    width: '113px',
                    height: '55px',
                    position: 'absolute',
                    marginTop: '129px',
                    marginLeft: '268px',
                    borderTop: '8px solid grey',
                    borderBottom: '8px solid grey',
                    borderRadius: '5px',
                    
                }}
                    ></div>

                    {/**lien Me joindre */}
           
    <button
          className='btn btn-primary rounded-right-custom btn-transition clignotement'
          style={{ boxShadow: '0px 0px 8px rgba(255, 0, 0, 1)' }}
          onClick={handleModalOpen}
        >
          Me joindre
        </button>    

        {/* Affichage de la modale */}
      <Modal show={isModalOpen} onClose={handleModalClose}>
        <Contact />
      </Modal>        
            
            <div className='arrow'>

              <span></span>
              <span></span>
            </div>
      
      
            
            
            {/**lien github + linkedin */}
            <Link to="https://github.com/jujuli1/react-firebase" className='btn btn-primary moving-element ' style={{transform: transformStyle,rotate: '90deg', position: 'absolute', marginTop: '39px',marginLeft: '105px', width: '73px', borderRadius: "30px"}}><img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
          alt="GitHub"
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)',
            width: '45px',
            height: '45px',
            borderRadius: '25px',
            marginTop: '3px',
          }}
          
        />
        </Link>

        <Link to="https://github.com/jujuli1" className='btn btn-primary moving-element ' style={{transform: transformStyle,rotate: '90deg', 
        position: 'absolute', 
        marginTop: '150px',
        marginLeft: '154px',
        width: '73px',
        borderRadius: "30px",
        backgroundColor: "aliceblue"}}><img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          alt="Linkedin"
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)',
            width: '45px',
            height: '45px',
            borderRadius: '25px',
            marginTop: '3px',
          }}
          
        />
        </Link>


        {/** Image + bouton git et linkedin */}
            <img src={gif} alt='cafe bebe yoda' class="rounded-pill ms-5 " style={{ position: 'relative', border: '2px solid grey', boxShadow: '0px 4px 8px rgba(0, 0, 255, 0.5)' }}/>
            <button className='github' onClick={moveElement}></button>
            </div>

            {/**Composant présentation */}
            <Presentation/>
            
            
            

            
          


            {/* composant compétences */}
            <div style={{
                position: 'absolute',
                bottom: '-50px', 
                left: '-50px',
                right: '-50px', 
                width: 'calc(100% + 100px)', 
                height: '678px', 
                zIndex: -1, 
                backgroundColor: '#333', 
                padding: '10px',
                top: '965px',
                textAlign: 'center',
                overflowY: 'scroll', 
                boxShadow: '0px 0px 10px rgba(0, 0, 255, 0.5)' 
            }}>
                <Competences />
            </div>
          

            
        

             
        </div>
    );
};

export default PrivateHome;