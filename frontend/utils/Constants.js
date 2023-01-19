import { m } from "framer-motion";

export const SignUpFormData = [
  {NameInput:"Email",          InputPlaceholder:"Email"              ,form:["up"]        , TypeInput:"email"    },
  {NameInput:"Usuario",        InputPlaceholder:"Usuario"            ,form:["up", "in"]  , TypeInput: "text"    },
  {NameInput:"Password",       InputPlaceholder:"Password"           ,form:["up", "in"]  , TypeInput:"password" },
  {NameInput:"Confirmpassword",InputPlaceholder:"Confirm password"   ,form:["up"]        , TypeInput: "password"},
];


export const SignInFormData = [
  {name:"Email",          InputPlaceholder:"Email"},
  {name:"Password",       InputPlaceholder:"Password"},
];

export const LabelsErrorInputs = {
  TooShort:"Muy corto",
  TooLong:"Muy grande",
  Required:"Requerido",
  InvalidEmail:"Email Inválido ",

};

export const LabelErrorPassword = {
  
  InvalidPass:"Password invalido",
  NonEqualPass:"Las contraseñas no son iguales"

}




//-------------------------------------------------------------------------Export like fetch data from db
const Action = [
  "read",
  "create",
  "delete",
  "update",
  "asign",
  
]
const permisos = [
  "main",
  "account",
  "AdminArea",
  "Inventory"
]



export const MenusData =( permisos=[]) => {



  return 
  Menu:[
    {
      Name:"Inicio",
      type:"link",
      Subs:[],
      Area:"main",
      path:"/",
      permissions:"",


      
      
    },
    {
      Name:"Admin",
      type:"link",
      Subs:[],
      Area:"main",
      path:"/AdminUsers",
      permissions:""

      
    },
    {
      Name:"Analysis",
      type:"link",
      Subs:[],
      Area:"main",
      path:"/Zone/Analysis",
      permissions:""

    },
    {
      Name:"Inventory",
      type:"link",
      Subs:[],
      Area:"main",
      path:"/Zone/Inventory",
      permissions:""

      
    },
    {
      Name:"Sales",
      type:"link",
      Subs:[],
      Area:"main",
      path:"/Zone/Sales",
      permissions:""

      
    },
    {
      Name:"Account",
      type:"link",
      Subs:[],
      Area:"main",
      path:"/Users/Account",
      permissions:""

      
    },
    {
      Name:"ShopingCart",
      type:"link",
      Subs:[],
      Area:"main",
      path:"/Users/ShopingCart",
      permissions:""

      
    },
    

  ]
}