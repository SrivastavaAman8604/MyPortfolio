import React from 'react'
import {HStack,VStack,Text, Image , Button } from '@chakra-ui/react'
import me from '../assets/logo8.png' 
import Typewriter from 'typewriter-effect';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Home = () => {
  return (
    <VStack alignContent={"50%"} color={"whiteAlpha.900"}  paddingY={'10em'} bgColor={'blackAlpha.900'} w={'100%'} h={'100%'}>
      {/* <Heading color={'whiteAlpha.800'}>Profile</Heading> */}
      <Image boxSize={'150px'} src={me} borderRadius={'50%'} alt='mypic' objectFit={'cover'}/>
      <Typewriter margin={'20px'}
        options={{
            // strings:["A Developer" , "A Designer" , "A Creator"],
            strings:["A Front-End Developer" , "A Designer" , "A Creator"],
            autoStart: true,
            loop: true,
            cursor: "",
            // wrapperClassName:"typewriterpara",
            paddingY:"2rem",
            color:"whiteAlpha.900",
        }}
      />
      <Text color={"white"} fontSize={"2xl"} textAlign={'center'} paddingY={'2em'} paddingX={'25rem'}>Hello 👋, I'm Aman Srivastava a multidisciplinary Front-End Developer from India who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites.</Text>
      <HStack color={"white"}>
        <Button p={'12px'} fontSize={"30px"} variant={'ghost'} _hover={{color:'orange'}}>
          <a href="https://www.linkedin.com/in/aman-srivastava-21b54b166/" target={'blank'} ><AiOutlineLinkedin /></a>
        </Button>  
        <Button p={'12px'} fontSize={"30px"} variant={'ghost'} _hover={{color:'orange'}}>  
          <a href="https://github.com/SrivastavaAman8604" target={'blank'}><AiOutlineGithub/></a>
        </Button>
        <Button p={'12px'} fontSize={"30px"} variant={'ghost'} _hover={{color:'orange'}}>
          <a href="https://twitter.com/AmanSri69599917" target={'blank'}><AiOutlineTwitter/></a>
        </Button>
      </HStack>
      <HStack paddingY={'3em'} paddingX={"2em"}>  
        <Button _hover={{color:"orange"}} color={"white"} bgColor={"transparent"}><a href="mailto:aman.srivastava2639@gmail.com" target={'blank'}>Say Hello 👋</a></Button>
        <Button _hover={{color:"orange"}} color={"white"} border={'4px'} borderColor={"orange"} backgroundColor={"transparent"}><a href="https://drive.google.com/file/d/1dbio4y2_PlO_iaaU2qNGLxHPtC8zovW3/view" target={'blank'}>Resume</a></Button>
      </HStack>
    </VStack>
  )
}

export default Home
