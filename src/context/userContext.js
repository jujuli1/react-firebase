
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

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);

    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)


   // fonction "se désabonné"
    useEffect(() => {
        //observe les changement lié a firebase
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
        })
        //permet de se désabonné
        return unsubscribe;
    }, [])

    //modale
    const [modalState, setModalState] = useState(
       { SignUpModal: false,
        signInModal: false,}
    )

    const toggleModals = modal => {
        if(modal === "signIn"){
            setModalState({
                SignUpModal: false,
                SignInModal: true,
            })
        }

        if(modal === "signUp"){
            setModalState({
                SignUpModal: true,
                SignInModal: false,
            })
        }

        if(modal === "close"){
            setModalState({
                SignUpModal: false,
                SignInModal: false,
            })
        }
    }


    return (
        <UserContext.Provider value =  {{modalState, toggleModals, signUp, currentUser, signIn}}>

            {!loadingData && props.children}
        </UserContext.Provider>
    )
}

