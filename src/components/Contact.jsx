import { Container , VStack , Text , Button , Input , Heading } from '@chakra-ui/react'
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
// import { Link } from 'react-router-dom'

const SignUp = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3md68na', 'template_j2ncoqz', form.current, 'TWOC87q98bmLmrTRC')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
            <form ref={form} onSubmit={sendEmail}>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>
                    <Heading justifyContent={"center"}>
                        Get In Touch
                    </Heading>
                    {/* <Avatar alignSelf={"center"} boxSize={'32'}/> */}
                    <Input placeholder={'Name'} type={"text"} required focusBorderColor={"orange.500"} name="user_name"/>
                    <Input placeholder={'Email'} type={"email"} required focusBorderColor={"orange.500"} name="user_email"/>
                    <Input placeholder={'Your Message...'} type={"text"} required focusBorderColor={"orange.500"} name="message"/>
                    <Button colorScheme={'orange'} type={"submit"} value={'send'}>Send</Button>
                    <Text fontSize={'2em'} fontWeight={"bold"}>Want me to build stuffs for you</Text>
                <Text fontSize={'20px'} fontFamily={"cursive"}>Hit me on Linkdin</Text>
                <Button border={'4px'} borderColor={"orange"} backgroundColor={"transparent"} _hover={{color: 'orange'}}><a href="https://www.linkedin.com/in/aman-srivastava-21b54b166/" target={'blank'} >Linkdin</a></Button>
                </VStack>
            </form>
        </Container>
    )
}

export default SignUp
