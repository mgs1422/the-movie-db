import React from "react";

import { Text, Flex, Grid, Heading, Link } from "@chakra-ui/react";
import { Image } from "./Image";

export const MovieCard = ({ movie }) => {
  return (
    <Grid
      templateColumns="200px 1fr"
      bg="#3c3e44"
      borderRadius="10px"
      gap={6}
      height="20rem"
    >
      <Image
        borderTopLeftRadius="10px"
        borderBottomLeftRadius="10px "
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <Flex direction="column">
        <Heading as="h1" color="#ff9800">
          <Link href={`/details/${movie.id}`}>{movie.title}</Link>
        </Heading>
        <Heading as="h2" color="white">
          {movie.status}
        </Heading>
        <Text color="white">Idioma: {movie.original_language} </Text>
        <Text color="white">Fecha de lanzamiento: {movie.release_date} </Text>
      </Flex>
    </Grid>
  );
};
