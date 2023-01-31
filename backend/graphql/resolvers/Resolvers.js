import user from "../../Mods/user";

export default  {

    Query:{
        insertIntoDatabase: async (_, data, {dbConn}) => {

            const res  = await dbConn.collection("dummy").insertOne({
                name:"Name",
                status:true
            });
    
    
            return {
    
            msg: "hola",
            status:true, 
            Result:["hola"]
    
            };
        }
    },

}




