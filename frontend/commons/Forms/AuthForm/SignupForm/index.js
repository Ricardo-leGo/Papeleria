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
      {({
        values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          touched
      }) => (
        <Form onSubmit={handleSubmit}>


          <Field name='Usuario' >

          {({ field, form }) => (
            <FormControl 

            isInvalid={errors.Usuario && touched.Usuario} 
            >

              <FormLabel>Usuario</FormLabel>
              <Input 
              {...field} 
              placeholder='Usuario' 
              type='text' 
              onChange={handleChange}
                onBlur={handleBlur}
                  value={values.Usuario}
              />
              <FormErrorMessage>{errors.Usuario && touched.Usuario && errors.Usuario}</FormErrorMessage>
            </FormControl>
          )}
          </Field>



          <Field name='Email' >

            {({ field, form }) => (
              <FormControl 

              isInvalid={form.errors.Email && form.touched.Email} 
              variant='email'>

                <FormLabel>Email</FormLabel>
                <Input 
                {...field} 
                placeholder='Email' 
                type='email' 
                onChange={handleChange}
                onBlur={handleBlur}
                  value={values.Email}
                />
                <FormErrorMessage>{errors.Email && touched.Email && errors.Email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name='Password' >

            {({ field, form }) => (
              <FormControl 

              isInvalid={errors.Password && touched.Password} >

                <FormLabel>Password</FormLabel>
                <Input 
                {...field} 
                placeholder='**********' 
                type='password' 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Password}

                />
                <FormErrorMessage>{errors.Password && touched.Password && errors.Password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>


          <Field name='ConfirmPassword' >

            {({ field, form }) => (
              <FormControl 

              isInvalid={errors.ConfirmPassword && touched.ConfirmPassword} >

                <FormLabel>Confirma Password</FormLabel>
                <Input 
                {...field} 
                placeholder='**********'
                 type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ConfirmPassword}
                 />
                <FormErrorMessage>{errors.ConfirmPassword && touched.ConfirmPassword && errors.ConfirmPassword}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Button
            mt={4}
            colorScheme='teal'
            isLoading={isSubmitting}
            type='submit'
          >
            Registro
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SignupComponent