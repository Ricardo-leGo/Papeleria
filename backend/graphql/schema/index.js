import { gql } from "apollo-server-micro";


const Types = `
type User {
  id: ID
}



type GenericResult{
  msg:String
  status:Boolean
  Result: [ String ]

}

type Query {
  insertIntoDatabase:GenericResult
} 


`;




export default [
  Types
].join(" ")


// export default makeExecutableSchema({
//   typeDefs,
//   resolvers
// }