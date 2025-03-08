import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase_config';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };
    const updateUserProfile = (updateData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateData);
    };
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => {
                setLoading(false);
            });
    };

    const authInfo = {
        user,
        setUser,
        createNewUser,logout,login,loading,updateUserProfile
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };