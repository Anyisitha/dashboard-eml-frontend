import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
/** Assets */
import Logoeml from "assets/img/logoeml.png";
import Image from "assets/img/objects.png";
import BgImage from "assets/img/auth.png";

interface IAuthLayout {
    children: any;
    container: any;
    subcontainer: any;
    box: any;
    boxContainer: any;
}

const AuthLayout: React.FC<IAuthLayout> = ({
    children,
    container,
    subcontainer,
    boxContainer,
    box,
}): JSX.Element => {
    return (
        <React.Fragment>
            <Flex {...container}>
                <Flex {...subcontainer}>
                    <NavLink
                        to="/"
                        style={() => ({
                            width: "fit-content",
                            marginTop: "40px",
                        })}
                    ></NavLink>
                    {children}
                    <Box {...box}>
                        <Flex {...boxContainer}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={Logoeml}
                                    alt="iamge1"
                                    width={300}
                                    style={{ padding: "70px 0" }}
                                />
                                <img src={Image} alt="iamge" />
                            </div>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </React.Fragment>
    );
};

export const props = () => {
    return {
        container: { position: "relative", h: "max-content" },
        subcontainer: {
            h: { sm: "initial", md: "unset", lg: "100vh", xl: "97vh" },
            w: "100%",
            maxW: { md: "66%", lg: "1313px" },
            mx: "auto",
            pt: { sm: "50px", md: "0px" },
            px: { lg: "30px", xl: "0px" },
            ps: { xl: "70px" },
            justifyContent: "start",
            direction: "column",
        },
        box: {
            display: { base: "none", md: "block" },
            h: "100%",
            minH: "100vh",
            w: { lg: "50vw", "2xl": "44vw" },
            position: "absolute",
            right: "0px",
        },
        boxContainer: {
            bg: `url(${BgImage})`,
            justify: "center",
            align: "center",
            w: "100%",
            h: "100%",
            bgSize: "cover",
            bgPosition: "50%",
            position: "absolute",
            borderBottomLeftRadius: { lg: "120px", xl: "200px" },
        },
    };
};

export default AuthLayout;
{
    /* <Flex position='relative' h='max-content'>
      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w='100%'
        maxW={{ md: "66%", lg: "1313px" }}
        mx='auto'
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent='start'
        direction='column'>
        <NavLink
          to='/admin'
          style={() => ({
            width: "fit-content",
            marginTop: "40px",
          })}>
         
        </NavLink>
        {children}
        <Box
          display={{ base: "none", md: "block" }}
          h='100%'
          minH='100vh'
          w={{ lg: "50vw", "2xl": "44vw" }}
          position='absolute'
          right='0px'>
          <Flex
            bg={`url(${illustrationBackground})`}
            justify='center'
            align='center'
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={Logoeml}  alt="iamge1" width={300} style={{padding: "70px 0"}}/>
              <img src={Image}  alt="iamge"/>
              </div>
            </Flex>
        </Box>
      </Flex>
      <FixedPlugin />
    </Flex> */
}
