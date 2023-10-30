import { Box, Heading, Center, VStack, HStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "SISKRIPSI",
        description:
            "A software engineering project to help the management of final projects",
        getImageSrc: () => require("../images/siskripsi.png"),
    },
    {
        title: "Adventure Pro Gamer",
        description:
            "A web-based RPG game where it is fully text based.",
        getImageSrc: () => require("../images/Lobby.png"),
    },
    {
        title: "SIDIA",
        description:
            "An application that implements CRUD using PostgreSQL.",
        getImageSrc: () => require("../images/sidia.png"),
    },
    {
        title: "CoroNow",
        description:
            "An application that helps monitor COVID-19 development. ",
        getImageSrc: () => require("../images/coronow.png"),
    },
];

function Projects() {
    return (
        <Box
            px='10vw'
            py='12vw'
            align='center'
            id="projects-section"
        >
            <Center maxWidth="1280px" margin="0 auto">
                <VStack>
                    <Heading as='h1' m={0} fontSize='5vw' pb={50}>Projects</Heading>
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(2,minmax(0,1fr))"
                        gridGap={20}>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                imageSrc={project.getImageSrc()}
                            />
                        ))}
                    </Box>
                </VStack>
            </Center>
        </Box>
    )
}
export default Projects;