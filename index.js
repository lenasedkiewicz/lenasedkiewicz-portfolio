const { ApolloServer, gql } = require("apollo-server");

// Scalar types: String, Int, Float, Boolean, ID!
const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 6.99;
    },
    isCool: () => false,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
