import { Flex, Image } from "@chakra-ui/react";
import useAuthContext from "../../hooks/useAuthContext";
import useGlobalContext from "../../hooks/useGlobalContext";

export default function Logo({type = "full", size = 65, ...rest}){
    
    const { goTo } = useGlobalContext();
    const { user } = useAuthContext();

    switch(type){
        case 'full':
            return(
                <Flex as='p' onClick={()=>{ goTo('/')}} justifyContent='center' alignItems='center' fontSize={size} fontFamily='Source Code Pro, monospace' {...rest}>C<Image height={size} width={size} src="/globo.svg"/>MMUNICATE</Flex>
            );
        case 'minimalist':
            return(
                <Image onClick={user ? ()=>{ goTo('/inbox')} : ()=>{ goTo('/')}} cursor='pointer' height={size} width={size} src="/globo.svg" {...rest}></Image>
            );
        default:
            return(<h1>deu ruim</h1>);
    }
}