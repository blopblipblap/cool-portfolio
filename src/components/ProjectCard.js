import { Box, VStack, Heading, Text, Image } from "@chakra-ui/react";
const ProjectCard = ({ title, description, imageSrc }) => {
    return (
        <Box
            backgroundColor='#9E7676'
            p='3vw'
            borderRadius='5vw'
            margin="0 auto"
            width='25vw'
            >
            <VStack textAlign='left' alignItems='left' borderRadius='10'>
                <Heading as='h2' color='#fff8ea' mb={0}>{title}</Heading>
                <Text color='#fff8ea' mt={0}>{description}</Text>
                <Image
                    objectFit='cover'
                    src={imageSrc}
                    alt={title}
                    borderRadius='20px'
                />
            </VStack>
        </Box>
    )
}
export default ProjectCard;