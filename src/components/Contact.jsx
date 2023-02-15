import { Container , VStack , Text , Button , Input , Heading } from '@chakra-ui/react'
import React, {useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom'

const SignUp = () => {

    
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");
    const[disableBtn,setDisableBtn] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

        setDisableBtn(true);
        try {
            emailjs.sendForm('service_3md68na', 'template_j2ncoqz', form.current, 'TWOC87q98bmLmrTRC')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Messsage Sent")
            setDisableBtn(false);
        }, (error) => {
            console.log(error.text);
            console.log(error);
            setDisableBtn(false);
        });
        // toast.success("Messsage Sent")
        // setDisableBtn(false);
        } catch (error) {
            // toast.error("Error")
            console.log(error);
            // setDisableBtn(false);
        }
    };

    return (
        <Container maxW={"container.xl"} h={"100vh"} p={"13"}>
            <form ref={form} onSubmit={sendEmail}>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>
                    <Heading justifyContent={"center"}>
                        Get In Touch
                    </Heading>
                    {/* <Avatar alignSelf={"center"} boxSize={'32'}/> */}
                    <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder={'Name'} type={"text"} required focusBorderColor={"orange.500"} name="user_name"/>
                    <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={'Email'} type={"email"} required focusBorderColor={"orange.500"} name="user_email"/>
                    <Input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder={'Your Message...'} type={"text"} required focusBorderColor={"orange.500"} name="message"/>
                    <Button disabled={disableBtn} className={disableBtn ? "disableBtn" : ""} colorScheme={'orange'} type={"submit"} value={'send'}>Send</Button>
                    <Text fontSize={'2em'} fontWeight={"bold"}>Want me to build stuffs for you</Text>
                <Text fontSize={'20px'} fontFamily={"cursive"}>Hit me on Linkdin</Text>
                <Button border={'4px'} borderColor={"orange"} backgroundColor={"transparent"} _hover={{color: 'orange'}}><a href="https://www.linkedin.com/in/aman-srivastava-21b54b166/" target={'blank'} >Linkdin</a></Button>
                </VStack>
            </form>
        </Container>
    )
}

export default SignUp
