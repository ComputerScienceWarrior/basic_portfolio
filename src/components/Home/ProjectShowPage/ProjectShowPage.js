import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { ProjectData1 } from "../constants/constants"
import YouTube from 'react-youtube';

const ProjectShowPage = () => {
    const path = window.location.pathname.split('/')
    const id = path[path.length - 1]
    const index = id - 1
    const projectData = ProjectData1[index]
    const videoId = projectData.videoDemoUrl; 
    const videoOptions = {
        height: '375',
        width: '600',
        playerVars: {
            autoplay: 0,
        },
    };

    return(
        <Box className="flex flex-col justify-evenly text-center">
            <Text className="underline text-yellow-500" fontSize={'36'}>{projectData.title}</Text>
            <Box className="pb-12">
                Tech Stack: {projectData.languages}
            </Box>
            <Box className="flex">
                <Box>
                    <Text fontSize={'24'}>About The Project:</Text>
                    <Box>
                        {projectData.summary}
                    </Box>
                </Box>
                <Box>
                    <YouTube videoId={videoId} opts={videoOptions} />
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectShowPage;