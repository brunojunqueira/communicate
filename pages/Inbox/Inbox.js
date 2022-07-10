import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Flex } from '@chakra-ui/react'
import Tabs from "../../components/Inbox/Tabs";

export const Inbox = () => {

    const { user } = useContext(AuthContext);

    return(<>
        <Flex
            w='100%'
        >
            <Tabs/>
        </Flex>
    </>);
}