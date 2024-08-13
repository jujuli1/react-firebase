import React from 'react';
import '../pages/Private/PrivateHome/PrivateHome.css'
import jsLogo from '../pages/Private/PrivateHome/JavaScript.png';
import sqlLogo from '../pages/Private/PrivateHome/Sql.png'
import reactLogo from '../pages/Private/PrivateHome/react.svg'
import TP from '../pages/Private/PrivateHome/tp.jpg'


const Competences = () => {

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
                <div className='item' style={{ "--position": 4 }}><img src={TP} alt='titre pro'/></div>

                    
                    </div>
                    <div className='content'>

                <h1>
                    Compétences
                </h1>
                <div className='model'></div>
            </div>

            </div>
            

        


        </div>
            

            
        
    );
};

export default Competences;