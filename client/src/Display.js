import { useQuery, gql, useLazyQuery } from "@apollo/client";
import React from "react";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
    }
  }
`;
const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
      year
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query GetMovieByName($name: String!) {
    movie(name: $name) {
      name
      year
    }
  }
`;

const Display = () => {
  const { data: users, loading, error } = useQuery(QUERY_ALL_USERS);
  const { data: movies } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, { data: movieSearch, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
  }
  console.log(movieSearch);
  return (
    <>
      <div>
        <h1>UserList:</h1>
        {users && users.users.map((user) => <h3>Username : {user.name}</h3>)}
      </div>
      <div>
        <h1>MovieList:</h1>
        {movies && movies.movies.map((movie) => <h3>Movie : {movie.name}</h3>)}
      </div>
      <div>
        <h1>Search Movie By Name</h1>
        <h3>Name：{movieSearch && movieSearch.movie.name}</h3>
        <br />
        <h3>Year：{movieSearch && movieSearch.movie.year}</h3>
      </div>
      <button
        onClick={() =>
          fetchMovie({
            variables: {
              name: "WeiWei Adventure",
            },
          })
        }
      >
        Fetch Data
      </button>
    </>
  );
};

export default Display;
