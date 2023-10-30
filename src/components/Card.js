import { Box, VStack, Heading, Text, Center, Square, HStack } from "@chakra-ui/react";
import { BsCodeSlash, BsPencilFill, BsChatSquareQuoteFill } from "react-icons/bs";

const getIconFromName = (iconName) => {
    switch (iconName) {
        case 'code':
            return <BsCodeSlash size='5vw' />;
        case 'design':
            return <BsPencilFill size='5vw' />;
        case 'others':
            return <BsChatSquareQuoteFill size='5vw' />;
    }
}

function Card(props) {
    const icon = getIconFromName(props.type)
    return (
        <Box
            backgroundColor='#9E7676'
            p='3vw'
            borderRadius='5vw'
            margin="0 auto"
            width='50vw'
        >
            <VStack spacing={0} justifyContent='center' alignItems='center' textAlign='center'>
                <HStack>
                    {icon}
                    <Heading>{props.title}</Heading>
                </HStack>
                <Text>{props.description}</Text>
            </VStack>
        </Box>
    )
}
export default Card;