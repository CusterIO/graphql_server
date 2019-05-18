const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("../prisma/src/generated/prisma-client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const Subscription = require("./resolvers/Subscription");
const Vote = require("./resolvers/Vote");
const Article = require("./resolvers/Article");
const { FRONTEND_URL, SESSION_SECRET, MODE } = require("../config/config.js");
const session = require("express-session");

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
  Article
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.express.use(
  session({
    name: "CusterIO",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: MODE === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
  })
);

const serverOptions = {
  port: 4000,
  cors: {
    credentials: true,
    origin: [FRONTEND_URL]
  }
};

server.start(serverOptions, () => {
  console.log(
    `Server is now running on port http://localhost:${serverOptions.port}`
  );
});
