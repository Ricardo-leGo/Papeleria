import React from 'react'
import { Formik , Field, Form} from 'formik'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
} from '@chakra-ui/react'

const SignupComponent = ({
  ValidationSchema
}) => {
  return (
    <Formik
      initialValues={{ Usuario: "", Password :"", ConfirmPassword:"", Email:"" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}

      validationSchema={ValidationSchema}
    >
      {(props) => (
        <Form>


          <Field name='Usuario' >

          {({ field, form }) => (
            <FormControl 

            isInvalid={form.errors.Usuario && form.touched.Usuario} 
            >

              <FormLabel>Usuario</FormLabel>
              <Input {...field} placeholder='Usuario' type='text' />
              <FormErrorMessage>{form.errors.Usuario}</FormErrorMessage>
            </FormControl>
          )}
          </Field>



          <Field name='Email' >

            {({ field, form }) => (
              <FormControl 

              isInvalid={form.errors.Email && form.touched.Email} 
              variant='email'>

                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder='Email' type='email' />
                <FormErrorMessage>{form.errors.Email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='Password' >

            {({ field, form }) => (
              <FormControl 

              isInvalid={form.errors.Password && form.touched.Password} >

                <FormLabel>Password</FormLabel>
                <Input {...field} placeholder='**********' type='password' />
                <FormErrorMessage>{form.errors.Password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>


          <Field name='ConfirmPassword' >

            {({ field, form }) => (
              <FormControl 

              isInvalid={form.errors.ConfirmPassword && form.touched.ConfirmPassword} >

                <FormLabel>Confirma Password</FormLabel>
                <Input {...field} placeholder='**********' type='password' />
                <FormErrorMessage>{form.errors.ConfirmPassword}</FormErrorMessage>
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

export default SignupComponent