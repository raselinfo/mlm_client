import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { GoogleAuthProvider, updateProfile, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsLoading(false));
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    }



    const signInWithGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {

            })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }

            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    useEffect(() => {
        fetch(`https://mlmserver.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    })



    const logOut = () => {
        setIsLoading(true);
        localStorage.removeItem("email")
        signOut(auth).then(() => {
            // sign-out Successfull.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
        
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://mlmserver.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        registerUser,
        loginUser,
        signInWithGoogle,
        isLoading,
        logOut
    }
}


export default useFirebase;