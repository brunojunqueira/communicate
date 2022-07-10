import { Button, Flex } from "@chakra-ui/react"
import Router from "next/router";

const Buttons = [ 
    { 
        title:'Entrada', 
        address: '/index'
    }, {
        title:'Enviados', 
        address: '/send'
    }, {
        title:'Lixeira', 
        address: '/trash'
    }
] 

const createButton = ({title, address}, key) => { 
    return(
        <Button
            key={key}
            onClick={()=> Router.push('/inbox'+address)} 
            borderRadius="0" 
            py='4' 
            bg="none" 
            w="100%" 
            _hover={{bg:"gray.100"}} 
            borderBottom="1px solid var(--chakra-colors-gray-400)"
            justifyContent='left'
        >
            {title}
        </Button>
    )
}

export const Tabs = () => {
    return(
        <Flex
                w='15%'
                h='100%'
                flexDir='column'
            >
                {Buttons.map((button, key) => {
                    return(createButton(button, key))
                })}             
        </Flex>
    )
}