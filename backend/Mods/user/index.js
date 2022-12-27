export default {
    insertIntoDatabase: async (_, data, {dbConn}) => {

        const res  = await dbConn.collection("dummy").insertOne({
            name:"Name",
            status:true
        })

        console.log( dbConn );


        return {
            msg: "hola",
            status:true, 
            Result:["hola"]
        }
    }
}