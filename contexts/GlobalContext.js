import { useBreakpointValue } from "@chakra-ui/react";
import { createContext } from "react";
import Router from "next/router";

export const GlobalContext = createContext({});

export function GlobalProvider({children}){
    
    const isMobile = useBreakpointValue({ base: true, md:false });
    
    function goTo(path){
        Router.push(path);
    }

    return (
        <GlobalContext.Provider value={{isMobile, goTo}}>
            {children}
        </GlobalContext.Provider>
    )
}
