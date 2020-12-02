import React from "react";
// import { useParams } from "react-router-dom";
import {
  Flex,
  // Text,
  // Spinner,
  Box,
  Heading,
  Image,
  Link,
  Spinner,
} from "@chakra-ui/react";
// import { getDetailMovie } from "../api/detailMovie";
import { MoviesContext } from "../context";
import { Header } from "./";

export const DetailMovie = () => {
  // const { id } = useParams();
  // let idNew = id.substr(1);

  const { movie } = React.useContext(MoviesContext);
  console.log("a ver: ", movie);

  // const [movie, setMovie] = React.useState([]);
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);

  // React.useEffect(() => {
  //   const doFetchMovie = async () => {
  //     setLoading(true);
  //     setError(null);
  //     setMovie([]);
  //     try {
  //       const results = await getDetailMovie(idNew);

  //       setLoading(false);
  //       setMovie(results);
  //       setError(null);
  //     } catch (e) {
  //       setLoading(false);
  //       setMovie([]);
  //       setError(e.message);
  //     }
  //   };
  //   doFetchMovie();
  // }, [idNew]);

  // if (loading) {
  //   return (
  //     <Flex align="center" justify="center">
  //       <Spinner size="xl" />
  //     </Flex>
  //   );
  // } else if (error) {
  //   return <Text>{error}</Text>;
  // }

  if (!movie) {
    return <Spinner />;
  }

  return (
    <Box bg="#3c3e44">
      <Header />
      <Flex>
        <Image
          borderTopLeftRadius="10px"
          borderBottomLeftRadius="10px "
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_title}
          h="500px"
          w="500px"
        />
        <Box>
          <Heading as="h1" color="#ff9800">
            {movie.original_title}
          </Heading>
          <p>{movie.overview}</p>
          <Link color="white" href="/home">
            {" "}
            Todas Las peliculas
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
