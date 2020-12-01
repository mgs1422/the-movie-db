import React from 'react';
import { getCharacters } from '../api/characters';
import { Flex, Button, Text, Spinner, Grid, Box } from '@chakra-ui/react';

import { MovieCard } from './';

export const Home = () => {
  const [page, setPage] = React.useState(1);
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const doFetchCharacters = async () => {
      setLoading(true);
      setError(null);
      setMovies([]);
      try {
        const { results } = await getCharacters(page);
        setLoading(false);
        setMovies(results);
        setError(null);
      } catch (e) {
        setLoading(false);
        setMovies([]);
        setError(e.message);
      }
    };
    doFetchCharacters();
  }, [page]);

  if (loading) {
    return (
      <Flex align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  } else if (error) {
    return <Text>{error}</Text>;
  }

  const ChangeNextPage = () => {
    setPage(page + 1);
  };

  const ChangePreviusPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  return (
    <Box bg="#24282f">
      <Grid
        pt="6rem"
        pb="6rem"
        pl="3rem"
        pr="3rem"
        templateColumns="repeat(2, 1fr)"
        gap={6}
      >
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </Grid>
      <Flex align="center" justify="center">
        <Button
          onClick={() => ChangePreviusPage()}
          w="200px"
          mr="1rem"
          colorScheme="blue"
        >
          Previous
        </Button>
        <Button onClick={() => ChangeNextPage()} w="200px" colorScheme="blue">
          Next
        </Button>
      </Flex>
    </Box>
  );
};
