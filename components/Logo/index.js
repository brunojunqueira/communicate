import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export default function Logo({type = "full", size = 65}){

    const isMobile = useBreakpointValue({base: true, md:false});
    const ajustableSize = (isMobile) ? size/2 : size;
    

    switch(type){
        case 'full':
            return(
                <Flex as='p' justifyContent='center' alignItems='center' fontSize={ajustableSize} fontFamily='Source Code Pro, monospace'>C<Image height={ajustableSize} width={ajustableSize} src="/globo.svg"/>MMUNICATE</Flex>
            );
        case 'minimalist':
            return(
                <Image height={ajustableSize} width={ajustableSize} src="/globo.svg"></Image>
            );
        default:
            return(<h1>deu ruim</h1>);
    }
}