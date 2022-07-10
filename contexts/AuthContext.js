import { createContext, useEffect, useState } from "react";
import { findSession, signInRequest, signOutRequest } from "../services/auth";
import { useCookies } from "react-cookie";
import Router from "next/router";

export const AuthContext = createContext({});

export function AuthProvider( {children} ){

    const [cookie, setCookie, removeCookie] = useCookies(['sessionkey']);

    const [user, setUser] = useState(null);

    const isAuthenticated = !!user;

    useEffect(() => {

        async function getSession(){

            const session = cookie["sessionkey"];
        
            if(session){
                const user = await findSession(session);
                setUser(user);
                if(Router.asPath === '/') Router.push('/inbox');
            }
            else{
                Router.push('/');
            }
        }

        getSession();
        
    }, [cookie["sessionkey"]])

    async function signIn({email, password}) {

        const { session, user } = await signInRequest(email, password);

        if(user != null && session != null)
        {
            let date = new Date();
            date.setMonth(date.getMonth() + 1);
            setCookie('sessionkey', session, {
                expires: date  // 1 hour,
            } );
    
            setUser(user);
    
            Router.push('/inbox');

            return true;
        }

        else return false;

    }

    async function signOut(){

        const result = await signOutRequest(cookie["sessionkey"]);
        console.log(result);
        if(result === 'success'){
            removeCookie("sessionkey");
            Router.reload('/');
        }

    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}
