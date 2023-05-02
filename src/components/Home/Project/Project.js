import React from "react";
import { Box, Text, Image } from '@chakra-ui/react'
import Youtube from '../../Youtube.png'
import Github from '../../Github.png'

const Project = (props) => {

    return(
        <Box bg={'gray.200'} w={'40'} h={'40'} m={'20'}>
            <Box>
                <Text bg={'navy'} className="text-white text-center font-bold text-xl">{props.title}</Text>
                <Image src={props.imageUrl} w='full' h='150px' />
                <div>{props.websiteUrl}</div>
            </Box>
            <Box><Text maxH={'30px'} overflowY={'scroll'} bg={'black'} className="text-white font-bold text-xl text-center">{props.languages}</Text></Box>
            <Box p='5' display={'flex'} justifyContent={'space-evenly'} bg={'white'} border={'solid'} borderWidth={'thin'}>
                <a href={props.videoDemoUrl} target="_blank">
                    <Image src={Youtube} w='1/2' h='35px' />
                </a>
                <a href={props.githubUrl} target="_blank">
                    <Image src={Github} w='1/2' h='35px' />
                </a>
            </Box>
        </Box>
            
    )
}

export default Project;
