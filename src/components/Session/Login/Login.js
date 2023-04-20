import React from "react";
import { Button, Box, Input, Text } from '@chakra-ui/react'
import Navigation from "../../Home/Navigation/Navigation";

const Login = () => {
    return(
        <>  
            <Navigation />
            <Text className="text-2xl text-center mb-5">Login</Text>
            <Box display={'flex'} justifyContent={'space-between'} flexDirection={'column'}>
                <Input marginBottom={'5'} mx={'auto'} w={'72'} type="username" placeholder="Enter Your Username" />
                <Input marginBottom={'5'} mx={'auto'} w={'72'} type="password" placeholder="Enter Your Password" />
                <Button marginBottom={'5'} mx={'auto'} variant={'outline'} colorScheme="green" w={'72'}>Login</Button>
            </Box>
        </>
    )
}

export default Login;
