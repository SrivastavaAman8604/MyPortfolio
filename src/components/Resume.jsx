import React from 'react'
import {Progress , VStack , Heading , Stack , HStack , Box , Text} from '@chakra-ui/react'

const Resume = () => {
  return (
    <Stack>
        <VStack paddingY={"5em"}>
          <Heading borderBottom={'3px solid'}>Resume</Heading>
        </VStack>
        
        <VStack>
        <HStack>
          <Heading fontSize={'30px'} p={"1em"} paddingLeft={"4em"}>Educational Qualification</Heading>
        </HStack>
        <HStack w={'100%'} alignContent={'center'} justifyContent={"center"}>
          <VStack w={"60%"}>
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>United College of Engineering and Research, Prayagraj</Text>
              <Text fontWeight={'bold'}>Btech-Information Technology</Text>
              <Text fontWeight={'bold'} fontStyle={"italic"}>2017-2021</Text>
            </Box>
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>Happy Model School, Varanasi </Text>
              <Text fontWeight={'bold'}>XIIth</Text>
              <Text fontWeight={'bold'} fontStyle={"italic"}>2017</Text>
            </Box>
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>Happy Model School, Varanasi </Text>
              <Text fontWeight={'bold'}>Xth</Text>
              <Text fontWeight={'bold'} fontStyle={"italic"}>2015</Text>
            </Box>
          </VStack>
          </HStack>
        </VStack>  
        
        
        <VStack>
        <HStack>
          <Heading fontSize={'30px'} p={"2em"} paddingLeft={"4em"}>Skills</Heading>
        </HStack>
        <HStack w={'100%'} alignContent={'center'} justifyContent={"center"}>
          <VStack w={"60%"}>
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>HTML5 <Progress value={90} /></Text>
            </Box>
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>CSS3 <Progress value={85} /></Text>
            </Box>
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>Javascript <Progress value={70} /></Text>
            </Box>
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>React <Progress value={90} /></Text>
            </Box>
            
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>Bootstrap <Progress value={85} /></Text>
            </Box>
            
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>Tailwindcss <Progress value={80} /></Text>
            </Box>
            
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>Chakra UI <Progress value={88} /></Text>
            </Box>
            
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>WIX <Progress value={90} /></Text>
            </Box>
            <Box 
              w={"80%"}
              paddingX={['1em','4em']}
              paddingY={'2em'}
              boxShadow='lg' bg='white'>
              <Text fontWeight={'bold'}>Git/GitHub <Progress value={75} /></Text>
            </Box>
          </VStack>
          </HStack>
        </VStack>  
        
    </Stack>
  )
}

export default Resume