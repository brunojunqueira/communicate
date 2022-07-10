import { Center } from "@chakra-ui/react";
import Heading from "../components/Heading";
import Logo from '../components/Logo';
import Login from '../components/Login'


export default function Home() {

  return (
    <>
      <Heading title='Communicate'/>
      <Center 
        as='main' 
        bg='gray.100' 
        gap='5' 
        height='100vh' 
        flexDirection='column'
      >
        <Logo/>
        <Login/>
      </Center>
    </>
  )
}
