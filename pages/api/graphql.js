import dotenv from 'dotenv';

dotenv.config({path:'.env'});

// import { ApolloServer } from "apollo-server-micro";
// import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
// import typeDefs from './../../backend/graphql/schema'
// import resolvers from "../../backend/graphql/resolvers/Resolvers";
// import { getConnection } from "../../backend/db/mongo";

// let dbConn = null;

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   csrfPrevention: true,
//   cache:'bounded',
//   context: async ( req ) => {
//       if( !dbConn  ){
//         dbConn =  await getConnection();
//         return { dbConn, req }
//       }
//       return { dbConn, req }
//   },

//   plugins: [ ApolloServerPluginLandingPageGraphQLPlayground ]

// });

// let apolloCheck = false;

// const StartServer = apolloServer.start();

// export default async ( req, res) => StartServer
// .then(  () =>  apolloServer.createHandler({path: "/api/graphql"})( req, res ) )
      

// export const config = { api: 
//   { 
//     bodyParser: true, 
//     externalResolver: true
//   }};

// import { ApolloServer } from 'apollo-server-express';
// import { 
//   ApolloServerPluginDrainHttpServer, 
//   ApolloServerPluginLandingPageLocalDefault 
// } from 'apollo-server-core';
// import typeDefs from './../../backend/graphql/schema'
// import resolvers from "../../backend/graphql/resolvers/Resolvers";
// import express from 'express';
// import http from 'http';

// export default async function startApolloServer(typeDefs, resolvers) {
//   const app = express();
//   const httpServer = http.createServer(app);
//   const server = new ApolloServer({
//     typeDefs:{...typeDefs},
//     resolvers:[resolvers],

//     plugins: [
//       ApolloServerPluginDrainHttpServer({ httpServer }), 
//       ApolloServerPluginLandingPageLocalDefault({ embed: true })
//     ],
//   });

  
//   await server.start();
//   server.applyMiddleware({ app, path:"/api/graphql" });
//   await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
// }

// startApolloServer(typeDefs, resolvers)


// import { ApolloServer } from 'apollo-server-micro'
// import {typeDefs} from './../../backend/graphql/schema'
// import resolvers from "../../backend/graphql/resolvers/Resolvers";
// const apolloServer = new ApolloServer({ 
//     typeDefs,
//   resolvers,
//  })

// export default apolloServer.start().then(() => apolloServer.createHandler({ path: '/api/graphql' }))
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }


// import { buildSchema } from 'type-graphql';

// import resolvers from "../../backend/graphql/resolvers/Resolvers";


// let apolloServerHandler;

// const getApolloServerHandler = async () => {

//   if (!apolloServerHandler) {
//     const schema = await buildSchema({
//       resolvers
//     });

//     apolloServerHandler = new ApolloServer({ schema })
//     .createHandler({
//       path: '/api/graphql',
//     });
//   }
//   return apolloServerHandler;
// };

// export default async (req, res) => {
//   const apolloServerHandler = await (await getApolloServerHandler());
//   return apolloServerHandler(req, res);
// };

// export const config = { api: { bodyParser: false } };


import { createGraphQLHandler } from "next-graphql-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from './../../backend/graphql/schema';
import resolvers from "../../backend/graphql/resolvers/Resolvers";


import { gql } from 'apollo-server-core';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const handler = createGraphQLHandler(schema);
export default handler;