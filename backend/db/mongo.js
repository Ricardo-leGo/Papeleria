import { createConnection } from 'mongoose'

const uri = process.env.DB_PATH ?? "mongodb://localhost:27017";
let conn ;

export const getConnection = async () => {

    if (conn == null) {

    conn = await createConnection(
        uri,
        () => ({
                
                bufferCommands: false,
                bufferMaxEntries: 0,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true

            }),
        
    );

console.log(conn);
    console.log(`<====================== ${  await conn } ======================>`);
  }

  return  conn ;
}