import React from "react";

import { Text, Flex, Grid, Heading, Link, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { MoviesContext } from "../context";
import { Image } from "./Image";

export const MovieCard = ({ movie }) => {
  const { setMovie } = React.useContext(MoviesContext);
  const history = useHistory();
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
          <Button
            onClick={() => {
              setMovie(movie);
              console.log(`setMovie(${movie})`);

              history.push(`/details/${movie.id}`);
            }}
          >
            {movie.title}
          </Button>
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
