import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    /* ======= Sing in by Google=====  */
    const singInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    }

    /* ======= Sing up by password =====  */
    const signUpUsingPassword = (email, password) => {
        setIsLoading(true);
        if (password.length < 6) {
            setError("Password should be at least 6 Characters")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    /* ======= Sing in by password =====  */
    const signInUsingPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch((error) => {
                setError(error.message)
            });
    }

    /* ======= state tracker =====  */
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])


    /* ======= Sing out=====  */
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    return { isLoading, error, user, signUpUsingPassword, signInUsingPassword, singInUsingGoogle, logOut }
}

export default useFirebase;