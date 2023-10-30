import { Box, HStack, VStack, Heading, Text } from "@chakra-ui/react";
import { BiLogoLinkedinSquare, BiLogoGitlab, BiLogoGithub, BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";

const socials = [
    {
        name: 'mail',
        url: 'mailto:vanessaemilyagape9000@gmail.com'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/blopblipblap/'
    },
    {
        name: 'gitlab',
        url: 'https://gitlab.com/vanessaemilyagape9000'
    },
    {
        name: 'github',
        url: 'https://github.com/blopblipblap'
    },
    {
        name: 'whatsapp',
        url: 'https://wa.me/6281290912592'
    },
]

const getSocialIcons = (name) => {
    switch (name) {
        case 'linkedin':
            return <BiLogoLinkedinSquare color="#fff8ea" size='5vw' />;
        case 'gitlab':
            return <BiLogoGitlab color="#fff8ea" size='5vw' />;
        case 'github':
            return <BiLogoGithub color="#fff8ea" size='5vw' />;
        case 'mail':
            return <BiLogoGmail color="#fff8ea" size='5vw' />;
        case 'whatsapp':
            return <BiLogoWhatsapp color="#fff8ea" size='5vw' />;
    }
}

function Footer() {
    return (
        <Box
            bottom={0}
            left={0}
            right={0}
            backgroundColor='#594545'
            px='3vw'
            py='3vw'
            position='relative'
            id="contactme-section">
            <Box color="#FFF8EA" maxWidth="1280px" margin="0 auto">
                <VStack
                    px={100}
                    py={25}
                    justifyContent="space-between"
                    alignItems="center" >
                    <HStack>
                        <Box>
                            {socials.map((social) => (
                                <a key={social.url} href={social.url}>
                                    {getSocialIcons(social.name)}
                                </a>)
                            )}
                        </Box>
                    </HStack>

                    <Box>
                        <Text mb={0}>@ 2023 Vanessa Emily Agape</Text>
                    </Box>
                </VStack>
            </Box>
        </Box>
    )
}
export default Footer;