export default async ( res, route, params ={}) => {

    res.setHeader('Content-Type', 'application/json');

switch (route) {
        case ("/"): 
            console.log(params, "args");
            return res.status(200).json({msg:"============>"});
        case ("/Login"): 
            console.log(params, "args");
            return res.status(200).json({msg:"============>"});
        default: () => {
            console.log( "hola soy el default");
            
            return res.status(200).json({msg:"========>"});
        }
    }

}