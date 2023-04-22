import React from "react";
import { Box, Text } from "@chakra-ui/react"
import Project from "../Project/Project";
import { ProjectData1 } from "../constants/constants";

const Projects = () => {
    return(
        <Box>
            <Box>
                <Text className="text-blue-500 font-bold text-center text-2xl">Project Showcase</Text>
            </Box>
            <Box display={'flex'} justifyContent={'space-evenly'}>
                {ProjectData1.map((project, key) => {
                    return <Project key={key} title={project.title} languages={project.languages} imageUrl={project.imageUrl} videoDemoUrl={project.videoDemoUrl} githubUrl={project.githubUrl} />
                })}
            </Box>
        </Box>
    )
}

export default Projects;
