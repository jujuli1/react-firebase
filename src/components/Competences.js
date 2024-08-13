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
                <div className='item' style={{ "--position": 1 }}><img src={jsLogo} alt='javascript-logo'/></div>
                <div className='item' style={{ "--position": 2 }}><img src={sqlLogo} alt='sql-logo'/></div>
                <div className='item' style={{ "--position": 3 }}><img src={reactLogo} alt='react-logo'/></div>

                <div className='item' style={{"--position": 4 }}><img src={TP} alt='titre pro' onClick={handleImageClick} style={{ cursor: 'pointer' }} /></div>
                

                

                    
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
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
                    }}>
                        <img src={TP} alt='titre pro' style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
                        <button onClick={handleCloseModal} style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            backgroundColor: 'transparent',
                            color: 'black',
                            fontSize: '24px',
                            border: 'none',
                            cursor: 'pointer',
                            rotate: "90deg"
                        }}>X</button>
                    </div>
                </div>
            )}

            </div>
            

        


        </div>
            

            
        
    );
};

export default Competences;