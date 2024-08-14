import React from 'react';
import '../pages/Private/PrivateHome/PrivateHome.css'
import jsLogo from '../pages/Private/PrivateHome/JavaScript.png';
import sqlLogo from '../pages/Private/PrivateHome/Sql.png'
import reactLogo from '../pages/Private/PrivateHome/react.svg'
import TP from '../pages/Private/PrivateHome/tp.jpg'
import { useState } from 'react';


const Competences = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const logoStyle = {
        width: '100px',
        height: '100px',
        marginBottom: '10px',
        borderRadius: '50%',
        boxShadow: '0px 4px 8px rgba(0, 0, 255, 0.5)'
    };

    const reactLogoStyle = {
        width: '100px',
        height: '100px',
        position: 'relative',
        display: 'inline-block',
        marginBottom: '10px'
    };

    const circleStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '20px',
        height: '20px',
        marginTop: '-10px',
        marginLeft: '-10px',
        backgroundColor: '#61dafb',
        borderRadius: '50%',
        zIndex: 2
    };

    const ellipseStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100px',
        height: '60px',
        marginTop: '-30px',
        marginLeft: '-50px',
        border: '4px solid #61dafb',
        borderRadius: '50%',
        background: 'transparent',
        transformOrigin: 'center'
    };
    return (
        

        <div>

            <div className='banner'>

                <div className='slider'>
                <div className='item' style={{ "--position": 1, color: "rgba(22, 11, 119, 1)", fontSize: "70px", textShadow: "2px 2px 15px rgba(22, 11, 119, 1)" }}>JS</div>
                <div className='item' style={{ "--position": 6, color: "rgba(22, 11, 119, 1)", fontSize: "70px", textShadow: "2px 2px 15px rgba(22, 11, 119, 1)" }}>Python</div>
                <div className='item' style={{ "--position": 2, color: "rgba(22, 11, 119, 1)", fontSize: "70px", textShadow: "2px 2px 15px rgba(22, 11, 119, 1)"  }}>SQL</div>
                <div className='item' style={{ "--position": 3 }}><img src={reactLogo} alt='react-logo'/></div>
                <div className='item' style={{ "--position": 5, color: "rgba(22, 11, 119, 1)", fontSize: "70px", textShadow: "2px 2px 15px rgba(22, 11, 119, 1)" }}>FireBase</div>

                <div className='item' style={{"--position": 4 }}><img src={TP} alt='titre pro' onClick={handleImageClick} style={{ cursor: 'pointer', boxShadow: "2px 2px 15px rgba(22, 11, 119, 1)" }} /></div>
                

                

                    
                    </div>
                    <div className='content'>

                <h1>
                    Compétences
                </h1>
                <div className='model'></div>
            </div>

            {/* Modale pour afficher l'image en grand */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: '50px',
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                    rotate: "270deg",

                }}>
                    <div style={{
                        position: 'relative',
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: "2px 2px 15px rgba(22, 11, 119, 1)",
                    }}>
                        <img src={TP} alt='titre pro' style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
                        <button onClick={handleCloseModal} style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            backgroundColor: 'transparent',
                            boxShadow: "2px 2px 15px rgba(22, 11, 119, 1)",
                            color: 'black',
                            fontSize: '17px',
                            border: 'none',
                            cursor: 'pointer',
                            rotate: "90deg",
                            borderRadius:"20px"
                        }}>X</button>
                    </div>
                </div>
            )}

            </div>
            

        


        </div>
            

            
        
    );
};

export default Competences;