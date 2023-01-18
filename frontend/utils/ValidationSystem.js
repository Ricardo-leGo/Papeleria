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
  .email(InvalidPass)
  .required(Required),

  Password: yup.string()
  .required('Requerido') 
  .min(8, TooShort)
  .matches(/[0-9]/, 'Password requiere un Número')
  .matches(/[a-z]/, 'Password requiere al menos una minúscula')
  .matches(/[A-Z]/, 'Password requiere al menos una mayúscula')
  .matches(/[^\w]/, 'Password requiere al menos un símbolo')
  ,

  Confirmpassword:yup
  .string()
  .oneOf(
    [
      yup.ref('Password'), null
    ], 
    'Las contraseñas no coinciden'
    )
});


export const SignInSchema = yup.object().shape({

  Login_email: yup
  .string()
  .min(2, TooShort)
  .max(50, TooShort)
  .email(InvalidEmail)
  .required(Required),
  
  Login_password: yup
  .string()
  .email(InvalidEmail)
  .required(Required)
  
});



export const ValidationSystem = 
boleano => boleano ? SignupSchema : SignInSchema








