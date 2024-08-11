import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "21a08b95-038e-4049-8f60-9cf751f8c095");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "",
                text: "Message envoyé",
                icon: "success"
              });
        }
      };

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>

                
            <div className='input-box'>
                <label className="futuristic">Votre nom</label>
                <input type='text' className='field' placeholder='Entrez votre nom' name='name' required/>
            </div>

            <div className='input-box'>
                <label className="futuristic">Votre adresse mail</label>
                <input type='email' className='field' placeholder='Entrez votre adresse mail' name='email' required/>
            </div>

            <div className='input-box'>
                <label className="futuristic">Votre message</label>
                <textarea name='message'  className='field mess' placeholder='Votre message' required></textarea>
            </div>
            <button type='submit'>Envoyer</button>
            </form>
            
        </section>
    );
};

export default Contact;