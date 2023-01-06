import * as yup from 'yup'
import {

  LabelsErrorInputs

} from './Constants';


const {

  TooShort,
  TooLong,
  InvalidEmail,
  Required

} = LabelsErrorInputs;

export const SignupSchema = yup.object().shape({
  Usuario: yup.string()
    .min(2, TooShort)
    .max(50, TooLong)
    .required(Required),
    Email: yup.string()
    .min(2, TooShort)
    .max(50, TooShort)
    .email(InvalidEmail)
    .required(Required),
  Password: yup.string().email(InvalidEmail).required(Required),
  Confirmpassword:yup.string().oneOf([yup.ref('Password'), null], 'Las contraseñas no coinciden')
});


export const SignInSchema = yup.object().shape({
  Email: yup.string().min(2, TooShort).max(50, TooShort).email(InvalidEmail).required(Required),
  Password: yup.string().email(InvalidEmail).required(Required),
});



export const ValidationSystem = 
boleano => boleano ? SignupSchema : SignInSchema







