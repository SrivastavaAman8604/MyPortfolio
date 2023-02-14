import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// import { CiUser , CiViewTimeline} from "react-icons/ci";
// import { BiPaperPlane , BiShow} from 'react-icons/bi';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import {BiMenuAltLeft} from 'react-icons/bi';


const Header = () => {

  const {isOpen,onOpen,onClose} = useDisclosure();

  return (
    <>
            <Button
                pos={'fixed'}
                top={'4'}
                left={'4'}
                colorScheme={'orange'}
                zIndex={"overlay"}
                p={'0'}
                w={"10"}
                h={"10"}
                borderRadius="full"
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'}/>
            </Button>
            
            <Drawer isOpen={isOpen} placement="start" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Aman.</DrawerHeader>
                    <DrawerBody>
                    <VStack alignItems={"flex-start"}>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'orange'}>
                            <Link to={'./'}>Home</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'orange'}>
                            <Link to={'./projects'}>Work</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'orange'}>
                          <Link to='/Resume'>Resume</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'orange'}>
                          <Link to='./contact'>Contact</Link>
                        </Button>
                        </VStack>
                        </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
  )
}

export default Header
