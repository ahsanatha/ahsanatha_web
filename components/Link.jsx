import NextLink from "next/link"
import {Link as ChakraLink } from "@chakra-ui/react";
function Link(props) {
  const { children, href, ...rest } = props;

  return (
    <NextLink passHref href={href}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
};

export default Link;