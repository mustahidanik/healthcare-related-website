import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentic from "../Firebase/firebase.init"


initializeAuthentic()
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    const auth = getAuth();


    const GoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const UserRegister = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }


    const LoginByEmailPass = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message);
            })
    }


    const LogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {

        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,

        UserRegister,
        GoogleSignIn,
        LoginByEmailPass,
        LogOut

    }
}

export default useFirebase;