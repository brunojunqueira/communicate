import { createContext, useState } from "react";
import { signInRequest } from "../services/auth";
import { useCookies } from "react-cookie";
import Router from "next/router";

export const AuthContext = createContext({});

export function AuthProvider( {children} ){

    const [cookie, setCookie] = useCookies(['communicate-token']);

    const [user, setUser] = useState(null);

    const isAuthenticated = !!user;

    

    async function signIn({email, password}) {

        const { token, user } = await signInRequest(email, password);

        if(user != null && token != null)
        {
            setCookie('communicate-token', token, {
                maxAge: 3600  // 1 hour,
            } );
    
            setUser(user);
    
            Router.push('/Inbox');
        }

        else return false;

    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
