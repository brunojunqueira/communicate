import { Alert, AlertIcon, Flex, Input, InputGroup, InputLeftElement, Button} from "@chakra-ui/react";
import { LockIcon, AtSignIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useContext, useState } from "react";
import { useForm } from 'react-hook-form'
import { AuthContext } from "../../contexts/AuthContext";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Login(){

    const { isMobile } = useContext(GlobalContext);

    const ajustableWidth = (isMobile) ? '250px' : '400px';

    const [fail, setFail] = useState(false);

    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    async function handleSignIn(data){
        const result = await signIn(data);
        if (!result){
            setFail(true);
        }
    }

    return(
        <>
            <Flex 
                as='form' 
                onSubmit={handleSubmit(handleSignIn)} 
                flexDir='column' 
                gap='3'
            >
                <InputGroup>
                    <InputLeftElement 
                        pointerEvents='none'
                    >
                        <AtSignIcon/>
                    </InputLeftElement>
                    <Input 
                        {...register('email')}
                        id='email'
                        name='email'
                        focusBorderColor='grey' 
                        bg='white' 
                        width={ajustableWidth} 
                        size='md' 
                        type='text' 
                        placeholder='E-mail' 
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement 
                        pointerEvents='none'
                    >
                        <LockIcon/>
                    </InputLeftElement>
                    <Input 
                        {...register('password')}
                        id='password'
                        name='password'
                        focusBorderColor='grey' 
                        bg='white' 
                        width={ajustableWidth} 
                        size='md' 
                        type='password' 
                        placeholder='Password' 
                        required
                    />
                </InputGroup>

                <Button 
                    colorScheme='blackAlpha' 
                    width={ajustableWidth} 
                    rightIcon={<ArrowForwardIcon/>} 
                    type='submit'
                >
                        Login
                </Button>

                {(fail) && <Alert status='error'><AlertIcon/>Verify your email and password and try again!</Alert>}
            </Flex>
        </>
    );
}