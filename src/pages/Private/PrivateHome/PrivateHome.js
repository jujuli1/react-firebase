import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import gif from './cafe.webp'
import './PrivateHome.css'

const PrivateHome = () => {

    const [position, setPosition] = useState(0);
    const [moving, setMoving] = useState(false);
    

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

    const [animated, setAnimated] = useState(false);
    const transformStyle = `translate(100px, 100px) rotate(${position}deg) translate(-100px, -100px)`;
    return (
        <div className='container p-5' style={{ display: 'flex', flexDirection: 'row-reverse' }}>


            {/** div de decoration crocher */}
            <div style={{ marginLeft: '585px', marginTop: '50px' }}>
               {/*<div
                style={{
                    backgroundColor: 'dark',
                    width: '113px',
                    height: '55px',
                    position: 'absolute',
                    marginTop: '134px',
                    marginLeft: '85px',
                    borderTop: '8px solid grey',
                    borderBottom: '8px solid grey',
                    borderRadius: '10px',
                    
                }}
                    ></div> */} 
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
           {/**
            *<Link
      to="/coordonnee"
      className='btn btn-primary rounded-left-custom'
      style={{
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)',
        borderRadius: '5px',
        marginTop: '-3px',
        marginLeft: '-44px',
        transform: animated ? 'translateX(0)' : 'translateX(135%)', 
        transition: 'transform 0.3s ease', 
        zIndex: 2, 
      }}
      onMouseEnter={() => {
        if (!animated) {
          setAnimated(true); 
        }
      }}
      onMouseLeave={(e) => {
         e.currentTarget.style.transform = 'translateX(50%)';
      }}
    >
      Me joindre
    </Link> 
            * 
            */} 

    {/**lien competences */}
            <Link to="/coordonnee" className='btn btn-primary rounded-right-custom btn-transition' style={{ boxShadow: '0px 0px 8px rgba(255, 0, 0, 1)' }}>Me joindre</Link>
            <Link to="https://github.com/jujuli1" className='btn btn-primary moving-element ' style={{transform: transformStyle,rotate: '90deg', position: 'absolute', marginTop: '39px',marginLeft: '105px', width: '73px', borderRadius: "30px"}}><img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" // url logo GitHub
          alt="GitHub"
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)',
            width: '45px',
            height: '45px',
            borderRadius: '25px',
            marginTop: '3px',
          }}
        />
        
        
        {/**lien github */}
        </Link>
            <img src={gif} alt='cafe bebe yoda' class="rounded-pill ms-5 " style={{ position: 'relative', border: '2px solid grey', boxShadow: '0px 4px 8px rgba(0, 0, 255, 0.5)' }}/>
            <button className='github' onClick={moveElement}></button>
            </div>

            {/**texte de presentation */}
            <div className='presentation' style={{ marginLeft: "-190px", marginRight: "-370px", height: "817px", overflowY: "scroll", overflowX: "hidden"}}>
    <h1 className='text-light mb-4' style={{ width: "225px" }}>
        Madame, Monsieur ...
    </h1>
    <div className="row justify-content-center">
        <div className="col-md-8">
            <p className="text-light bg-dark p-3 rounded fs-4 fondu custom-line-height fs-3 text-center" style={{ width: "152%", marginLeft: "-143px" }}>
                Actuellement en reconversion professionnelle dans les métiers du numérique, et ayant obtenu le titre professionnel de développeur web et web mobile avec l'école O'clock, je suis actuellement à la recherche d'une première expérience professionnelle, d'une formation en alternance ou d'un stage dans ce domaine.

                Je suis motivé par la volonté d'exercer un métier dans un domaine que j'affectionne et que je pratique depuis longtemps en tant qu'amateur : l'informatique et les métiers du numérique en général.

                Je maîtrise diverses compétences que je liste dans la partie "Compétences" de cette petite application de présentation. Spécialisé dans le développement d'applications web et web mobile, je désire par la suite acquérir également des connaissances dans bien d'autres domaines, comme la cybersécurité entre autres.

                Je vous remercie de l'attention portée à ma réalisation, et, dans l'attente d'une réponse de votre part, je vous adresse mes sincères salutations.

                <br /><br />
                LEFEVRE Julien
            </p>
        </div>
    </div>
</div>
            
             
        </div>
    );
};

export default PrivateHome;