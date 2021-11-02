const { UserList, MovieList } = require("../Data");
const _ = require("lodash");
const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      console.log(args);
      const id = args.id;
      const user = _.find(UserList, { id: +id });
      return user;
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(MovieList, (movie) => movie.year >= 2000);
    },
  },
};

module.exports = resolvers;
