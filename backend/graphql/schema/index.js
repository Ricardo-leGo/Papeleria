import { gql } from "apollo-server-micro";

const Types = gql`
type User {
  id: ID
}



type GenericResult{
  msg:String
  status:Boolean
  Result: [ String ]

}

type Query {
  sayhello: String
  insertIntoDatabase:GenericResult
}
`;


export default [
    Types
]



