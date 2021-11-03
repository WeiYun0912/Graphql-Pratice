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

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1]["id"];
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updatedUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated = null;
      UserList.forEach((user) => {
        if (user.id === +id) {
          console.log("find", user.id);
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
    deleteUser: (parent, args) => {
      console.log(args);
      const id = args.id;
      _.remove(UserList, (user) => user.id === +id);
      return null;
    },
  },
};

module.exports = resolvers;
