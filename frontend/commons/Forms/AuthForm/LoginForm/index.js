import React from 'react'
import * as yup from 'yup'

import { Formik , Field, Form} from 'formik'
import {

  LabelErrorPassword,
  LabelsErrorInputs

} from './../../../../utils/Constants';


const {

  TooShort,
  TooLong,
  InvalidEmail,
  Required

} = LabelsErrorInputs;

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
} from '@chakra-ui/react'

const SignInSchema = yup.object().shape({

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
const LoginFormComponent = () => {


  return (
    <Formik
      initialValues={{ Usuario: 'Email', Password :"" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}

      validationSchema={SignInSchema}
    >
      {(props) => (
        <Form>
          <Field name='Login_email' >

            {({ field, form }) => (
              <FormControl 
              isInvalid={form.errors.Email && form.touched.Email} >

                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder='Email' type='email' />
                <FormErrorMessage>{form.errors.Email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='Login_password' >

            {({ field, form }) => (
              <FormControl 

              isInvalid={form.errors.Password && form.touched.Password} >

                <FormLabel>Password</FormLabel>
                <Input {...field} placeholder='**********' type='password' />
                <FormErrorMessage>{form.errors.Password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>



          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginFormComponent