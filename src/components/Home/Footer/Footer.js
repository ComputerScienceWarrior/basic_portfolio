import React from "react";
import { Box, Text } from "@chakra-ui/react"

const Footer = () => {

    return(
        <Box className="text-white flex justify-evenly fixed bottom-0 h-20 w-full items-center" bgColor={'navy'}>
            <Box>
                <Text><a style={{color: 'yellow'}} target="_blank" href="https://www.linkedin.com/in/james-ryan-stampley/">My LinkedIn</a></Text>
                <Text><a style={{color: 'yellow'}} target="_blank" href="https://github.com/ComputerScienceWarrior">My Github Page</a></Text>
            </Box>

            <Box>
                <Text>jamesryanstampley@gmail.com</Text>
                <Text>(602)-860-2056</Text>
            </Box>
        </Box>
    )
}

export default Footer;
