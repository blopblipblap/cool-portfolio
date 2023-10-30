import { Heading, Box, VStack, Center, HStack } from "@chakra-ui/react";

import Card from "./Card";

function Skills() {
    return (
        <Box
            px='10vw'
            py='12vw'
            align='center'
            id="skills-section"
        >
            <Center maxWidth="1280px" margin="0 auto">
                <VStack>
                    <Heading as='h1' m={0} fontSize='5vw' pb={50}>Skills</Heading>
                    <VStack spacing='2vw'>
                        <Card
                            title='..coding'
                            description='Often use Java, Python, Javascript, HTML, CSS, and Bootstrap. Familiar with PostgreSQL, Springboot, AWS, and GCP'
                            type='code' />
                        <Card
                            title='..designing'
                            description='Figma, Photoshop, Illustrator, Procreate'
                            type='design' />
                        <Card
                            title='..soft skills'
                            description='Team play, time management, commitment, communication, easy to adapt, responsible'
                            type='others' />
                    </VStack>
                </VStack>
            </Center>
        </Box>
    )
}
export default Skills;