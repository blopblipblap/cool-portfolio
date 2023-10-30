import { Box, HStack, Heading, VStack, Text, Image } from "@chakra-ui/react";
import pict from "../images/TH51.jpg";

function Profile() {
    return (
        <Box
            id="profile-section"
            px='10vw'
        >
            <Box maxWidth="1280px" margin="0 auto">
                <HStack
                    spacing={30}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <VStack spacing={4} align='left' width='60%'>
                        <Heading as='h1' fontSize='5vw' fontWeight='bold' mb={0}>
                            Hi, I'm Vanessa!
                        </Heading>
                        <Heading as='h2' fontSize='3vw' fontWeight='bold' mb={0} mt={0}>
                            A Web Developer
                        </Heading>
                        <Text fontSize='1.2vw'>
                            A Computer Science graduate from Universitas Indonesia that is eager to find new experiences. Has a passion on designing, front-end / back-end development, and gaming.
                        </Text>
                    </VStack>
                    <VStack width='40%'>
                        <Image
                            objectFit='cover'
                            src={pict}
                            alt='prof-pict'
                            borderRadius='20%'
                            boxSize='25vw'
                            boxShadow='36px 24px 0px 0px rgba(158,118,118,0.75)'
                        />
                    </VStack>
                </HStack>
            </Box>
        </Box>
    )
}
export default Profile;