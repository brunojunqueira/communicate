import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {  
    Button, 
    CloseButton, 
    Drawer, 
    DrawerBody, 
    DrawerContent, 
    DrawerHeader, 
    DrawerOverlay, 
    Flex,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement,
    Spacer, 
    useDisclosure 
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Logo from '../Logo';
import UserMenu from "./UserMenu/UserMenu";


export default function Header(){
    
    const { isMobile } = useContext(GlobalContext);
    const { isOpen, onClose, onToggle } = useDisclosure();

    return(
        <Flex bg='gray.200' w='100%' p={3} justifyContent="center">
            {(isMobile) ?
                <Flex w='100%' justifyContent='space-beetwen'>
                    <Button h='10' w='10' onClick={onToggle} m={1} ><HamburgerIcon fontSize={25}/></Button>

                    <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='full'>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader as={Flex} justifyContent='space-between'>
                                <h1>Menu</h1>
                                <CloseButton onClick={onToggle}/>
                            </DrawerHeader>
                            <DrawerBody>
                                <h1>Items</h1>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    <Spacer/>
                    <Logo size={50}/>
                    <Spacer/>
                    <UserMenu/>
                </Flex>
            :   
                <Flex px='5%' justify='space-between' w='100%' h='100%' align="center">
                    <Logo type='minimalist' size={45}/>
                    <FormControl w='35%'>
                        <InputGroup>
                            <InputLeftElement 
                                pointerEvents='none'
                            >
                                <SearchIcon 
                                    color='gray.300' 
                                />
                            </InputLeftElement>
                            <Input 
                                bg='white' 
                                type='search' 
                                placeholder='Search'
                            />
                        </InputGroup>
                    </FormControl>
                    <UserMenu/>

                </Flex>
            }
        </Flex>
    )
}