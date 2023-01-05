import dotenv from 'dotenv';

dotenv.config({path:'.env'});

import { ApolloServer } from "apollo-server-micro";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import typeDefs from './../../backend/graphql/schema'
import resolvers from "../../backend/graphql/resolvers/Resolvers";
import { getConnection } from "../../backend/db/mongo";

let dbConn = null;


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ( req ) => {


      if( !dbConn  ){
        
        dbConn =  await getConnection();

        return { dbConn, req }
      }

      return { dbConn, req }
  },

  plugins: [ ApolloServerPluginLandingPageGraphQLPlayground() ]

});

const startServer = apolloServer.start();

export default async function handler( req, res){

  await startServer;
  await apolloServer.createHandler({path: "/api/graphql"})( req, res );

};

export const config = { api: { bodyParser: true }};