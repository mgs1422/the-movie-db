import React from "react";
import { Image as ChakraImage, Spinner, Flex } from "@chakra-ui/react";

export const Image = (props) => {
  const [loading, isLoading] = React.useState(true);

  const handleOnLoad = () => {
    isLoading(false);
  };
  return (
    <Flex height="100%" bg="red.200">
      <ChakraImage onLoad={handleOnLoad} {...props} />
      {loading && (
        <Flex
          width="200px"
          height="20rem"
          position="absolute"
          justify="center"
          align="center"
          bg="red.300"
        >
          <Spinner />
        </Flex>
      )}
    </Flex>
  );
};
