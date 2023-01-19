import * as yup from 'yup'
import {

  LabelErrorPassword,
  LabelsErrorInputs

} from './Constants';


const {

  TooShort,
  TooLong,
  InvalidEmail,
  Required

} = LabelsErrorInputs;


const {
  InvalidPass,
  NonEqualPass
} = LabelErrorPassword

export const SignupSchema = yup
.object().shape({

  Usuario: yup.string()
  .min(2, TooShort)
  .max(50, TooLong)
  .required(Required),

  Email: yup.string()
  .min(2, TooShort)
  .max(50, TooShort)
  .matches(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/, InvalidPass)
  .required(Required),

  Password: yup.string()
  .required('Requerido') 
  .min(8, TooShort)
  .matches(/[0-9]/, 'Password requiere un Número')
  .matches(/[a-z]/, 'Password requiere al menos una minúscula')
  .matches(/[A-Z]/, 'Password requiere al menos una mayúscula')
  .matches(/[^\w]/, 'Password requiere al menos un símbolo')
  ,

  ConfirmPassword:yup.string()
  .oneOf(
    [
      yup.ref('Password'), null
    ], 
    NonEqualPass
    )
});




const SignInSchema = yup.object().shape({

  email: yup
  .string()
  .min(2, TooShort)
  .max(50, TooShort)
  //.email(InvalidEmail)
  .required(Required)
  .matches(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/, InvalidPass),
  Password: yup
  .string()
  .required('Requerido') 
  .min(8, TooShort)

  
});
export const ValidationSystem = 
boleano => boleano ? SignupSchema : SignInSchema








