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
  InvalidEmail:"Email Invàlido ",

};

export const LabelErrorPassword = {
  InvalidPass:"Password invalido",
  NonEqualPass:"Las contraseñas no son iguales"

}