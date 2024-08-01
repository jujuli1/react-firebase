
import { createContext, useState, useEffect } from 'react';
import SignUpModal from '../components/SignUpModal';

export const UserContext =  createContext()

export function UserContextProvider(props){


    const [modalState, setModalState] = useState(
       { SignUpModal: false,
        signInModal: false,}
    )

    const toggleModals = modal => {
        if(modal === "signIn"){
            setModalState({
                SignUpModal: false,
                signInModal: true,
            })
        }

        if(modal === "signUp"){
            setModalState({
                SignUpModal: true,
                signInModal: false,
            })
        }

        if(modal === "close"){
            setModalState({
                SignUpModal: false,
                signInModal: false,
            })
        }
    }


    return (
        <UserContext.Provider value =  {{modalState, toggleModals}}>

            {props.children}
        </UserContext.Provider>
    )
}

