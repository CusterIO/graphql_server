const { GraphQLServer } = require('graphql-yoga')

// Schema
// Every GraphQL schema has three special root types, these are called Query, Mutation and Subscription.

let links = [{
  id: 'link-0',
  url: 'www.expressen.se',
  description: 'Swedish newspaper'
}]

let idCount = links.length

// Implementation of schema
const resolvers = {
  Query: {
    info: () => `This is the API of a GraphQL server`,
    feed: () => links
  },
  Mutation: {
    post: (parent, args) => {
      const Link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(Link);
      return Link
    }
  }
}
// Input the API operations which are accepted and how they should be resolved
const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
