import React from 'react';
import reactLogo from '../pages/Private/PrivateHome/react.svg';
import jsLogo from '../pages/Private/PrivateHome/JavaScript.png';
import sqlLogo from '../pages/Private/PrivateHome/Sql.png'

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
        

            <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', marginLeft: "200px", marginTop: "100px", gap: "30px"}}>
            <div style={reactLogoStyle}>
                <div style={{ ...ellipseStyle, transform: 'rotate(0deg)', boxShadow: '0px 4px 8px rgba(0, 0, 255, 1)' }}></div>
                <div style={{ ...ellipseStyle, transform: 'rotate(60deg)', boxShadow: '0px 4px 8px rgba(0, 0, 255, 1)' }}></div>
                <div style={{ ...ellipseStyle, transform: 'rotate(120deg)', boxShadow: '0px 4px 8px rgba(0, 0, 255, 1)'  }}></div>
                <div style={circleStyle}></div>
            </div>
            <img src={jsLogo} alt="JavaScript Logo" style={{ width: '100px', height: '100px', marginBottom: '10px',boxShadow: '0px 4px 8px rgba(0, 0, 255, 1)' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="SQL Logo" style={{ width: '100px', height: '100px',borderRadius: '50%', marginBottom: '10px',boxShadow: '0px 4px 8px rgba(0, 0, 255, 0.5)' }} />
            <img src={sqlLogo} alt="SQL Logo" style={{ width: '100px', height: '58px', marginBottom: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 255, 0.5)' }} />
            
        </div>

            
        
    );
};

export default Competences;