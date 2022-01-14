import { Flex } from "@chakra-ui/react";
import Logo from '../components/Logo';
import Heading from "../components/Heading";
import Login from '../components/Login'


export default function Home() {

  return (
    <>
      <Heading title='Communicate'/>
      <Flex as='main' height='100vh' flexDirection='column' justifyContent='center' alignItems='center'>
        <Logo/>
        <Login/>
      </Flex>
    </>
  )
}
