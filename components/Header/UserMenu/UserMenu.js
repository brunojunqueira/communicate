import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { GlobalContext } from "../../../contexts/GlobalContext";

export default function UserMenu(){

    const {isMobile} = useContext(GlobalContext)
    const { user, signOut } = useContext(AuthContext);

    const Options = [
        { func: signOut, text:'Disconnect' },
    ]

    const UserMenuOptions = ({func, text}, key) => { return(<MenuItem onClick={func} key={key}>{text}</MenuItem>) }

    return(
        (isMobile) ?
            <Menu>
                <MenuButton m={2.5}>
                    <Avatar size='md'/>
                </MenuButton>
                <MenuList>
                    {Options.map((value, index) => {
                        return UserMenuOptions(value, index);
                    })}
                </MenuList>
            </Menu>
        :
            <Menu>
                <MenuButton m={2.5}>
                    <HStack spacing='2'>
                        <Avatar src={user?.avatar_url ?? null} size='sm'/>
                        <h1>{user?.name ?? null}</h1>
                        <ChevronDownIcon fontSize={15}/>
                    </HStack>
                </MenuButton>
                <MenuList>
                    {Options.map((value, index) => {
                        return UserMenuOptions(value, index);
                    })}
                </MenuList>
            </Menu>
    )
}