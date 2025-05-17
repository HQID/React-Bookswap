import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if(!user) {
            axios.get('/user').then(({data}) => {
                setUser(data);
                console.log(data)
            }).catch((err) => {
                console.error("Failed to fetch user data:", err);
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}