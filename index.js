const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    products: [Product!]!
  }
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    products: () => {
      return [
        {
          name: "Bike",
          description: "Mountain Bike",
          quantity: 20,
          price: 999.97,
          onSale: true,
        },
      ];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
