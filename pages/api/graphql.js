import dotenv from 'dotenv';

dotenv.config({path:'.env'});


import { createGraphQLHandler } from "next-graphql-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from './../../backend/graphql/schema';
import resolvers from "../../backend/graphql/resolvers/Resolvers";
import { getConnection } from "../../backend/db/mongo";

let dbConn = null;

export const schema = makeExecutableSchema({

  typeDefs,
  resolvers,

});


const handler = createGraphQLHandler(
  schema,
  {
    context: async ( req ) => {


      if( !dbConn  ){

        dbConn =  await getConnection();
        return { dbConn, req }
      }
      return { dbConn, req }
  },
  }
  );
export default handler;