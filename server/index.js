const { ApolloServer } = require("apollo-server");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/type");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`API RUNNING : ${url}`);
});
