
import { createContext, useState, useEffect } from 'react';
import SignUpModal from '../components/SignUpModal';

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged

} from 'firebase/auth'

import {auth} from '../firebase-config'

export const UserContext =  createContext()

export function UserContextProvider(props){

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)


    //modale
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
        <UserContext.Provider value =  {{modalState, toggleModals, signUp}}>

            {props.children}
        </UserContext.Provider>
    )
}

