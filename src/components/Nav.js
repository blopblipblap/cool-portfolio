import React, { useEffect, useRef } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { BiHomeAlt2 } from "react-icons/bi"

const Nav = () => {
    const handleClick = (anchor) => {
        console.log('clicked')
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#fff8ea"
            id='navbar'
        >
            <Box color="#FFF8EA" maxWidth="1280px" margin="0 auto">
                <HStack
                    px='5vw'
                    py={25}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={8}>
                            <BiHomeAlt2 size={30} color="#594545"/>
                            <a className="nav-button" href='#'>Vanessa's Portfolio</a>
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={12}>
                            <a className="nav-button" href="#skills" onClick={() => handleClick('skills')}>Skills</a>
                            <a className="nav-button" href='#projects' onClick={() => handleClick('projects')}>Projects</a>
                            <a className="nav-button" href="#contactme" onClick={() => handleClick('contactme')}>Contact Me</a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Nav;
