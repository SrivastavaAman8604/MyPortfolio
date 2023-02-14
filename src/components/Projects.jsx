import React from 'react'
import {Heading , Stack , VStack , Image, Text ,Button} from '@chakra-ui/react'

const Projects = () => {
  return (
        <Stack >
        <Stack justifyItems={'center'} textAlign={"center"} paddingTop={'5em'}>
          <Heading >Work</Heading>
          </Stack>
          <Stack direction={['column','row']} p={['1em','5em']} paddingTop={'5em'}>
            <VStack paddingX={['1rem','5rem']}>
              <Image src='https://cdn.pixabay.com/photo/2017/12/12/12/44/bitcoin-3014614_960_720.jpg' h='20em'/>
              <Heading>CryptoMaster</Heading>
              <Text justifyContent={'center'} textAlign={'center'} paddingX={'5rem'}>This is the Crypto currency app in which you can easily check exchanges details and Coins Details</Text>
              <Heading fontSize={'25px'}>Build with:</Heading>
              <Stack py={"1em"} direction={['column','row']}>
                <Button>React</Button>
                <Button>Chakra ui</Button>
                <Button>Coingecko API</Button>
              </Stack>
              <Button border={'4px'} borderColor={"orange"} backgroundColor={"transparent"}>
                <a target={"blank"} href={'https://crypto-master-nine.vercel.app/'}>View Demo</a>
              </Button>
            </VStack>
            <VStack paddingX={['1rem','5rem']}>
              <Image src='https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_960_720.jpg'  w={'30rem'}/>
              <Heading>iTube</Heading>
              <Text justifyContent={'center'} textAlign={'center'} paddingX={'5rem'}>This is the Video streaming app in which user can easily upload videos and watch video. </Text>
              <Heading fontSize={'25px'}>Build with:</Heading>
              <Stack py={"1em"} direction={['column','row']}>
                <Button>React</Button>
                <Button>Chakra ui</Button>
                {/* <Button></Button> */}
              </Stack>
              <Button border={'4px'} borderColor={"orange"} backgroundColor={"transparent"}>
                <a target={"blank"} href={'https://i-tube-jet.vercel.app/'}>View Demo</a>
              </Button>
            </VStack>
          </Stack>

          <Stack direction={['column','row']} p={['1em','5em']} paddingLeft={['1em',"5em"]} alignItems={"center"} justifyContent={'center'}>
            <VStack paddingX={['1em','5rem']}>
              <Image src='https://cdn.pixabay.com/photo/2015/09/05/07/58/clipboards-924044__340.jpg'/>
              <Heading>QuoteGenerator</Heading>
              <Text>This is the simple Quote generator App</Text>
              <Heading fontSize={'25px'}>Build with:</Heading>
              <Stack py={"1em"} direction={['column','row']}>
                <Button>React</Button>
                <Button>scss</Button>
                <Button>quote API</Button>
              </Stack>
              <Button border={'4px'} borderColor={"orange"} backgroundColor={"transparent"}>
                <a target={"blank"} href={'https://quote-generator-ebon.vercel.app/'}>View Demo</a>
              </Button>
            </VStack>
            
            <VStack paddingX={['1em','3rem']}>
              <Image src='https://cdn.pixabay.com/photo/2016/11/21/12/51/mobile-phone-1845233__340.jpg'/>
              <Heading>EduTech</Heading>
              <Text>This is the Education based website.</Text>
              <Heading fontSize={'25px'}>Build with:</Heading>
              <Stack py={"1em"} direction={['column','row']}>
                <Button>React</Button>
                <Button>scss</Button>
                <Button>framer motion</Button>
              </Stack>
              <Button border={'4px'} borderColor={"orange"} backgroundColor={"transparent"}>
                <a target={"blank"} href={'https://ed-techwebsite.vercel.app/#home'}>View Demo</a>
              </Button>
            </VStack>
          </Stack>


          <Stack paddingBottom={'5em'}>
            <VStack>
            <Image src='https://cdn.pixabay.com/photo/2020/03/19/21/25/cactus-4948833_960_720.jpg' w={"15em"} h={"15em"}/>
            <Heading>Portfolio</Heading>
            <Text justifyContent={'center'} textAlign={"center"}>This is my Portfolio website .<br/> Here you will find everything about me</Text>
            <Heading fontSize={'25px'}>Build with:</Heading>
              <Stack py={"1em"} direction={['column','row']}>
                <Button>React</Button>
                <Button>Chakra ui</Button>
                <Button>EmailJs</Button>
              </Stack>
            <Button border={'4px'} borderColor={"orange"} backgroundColor={"transparent"}>
              <a target={"blank"} href={'/'}>View Demo</a>
            </Button>
            </VStack>
          </Stack>
        </Stack>
  )
}

export default Projects
