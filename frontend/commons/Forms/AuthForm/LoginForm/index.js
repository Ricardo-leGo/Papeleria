import React from 'react'
import * as yup from 'yup'

import { Formik , Field, Form} from 'formik'
import {

  LabelErrorPassword,
  LabelsErrorInputs

} from './../../../../utils/Constants';



import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
} from '@chakra-ui/react'


const LoginFormComponent = ({
  ValidationSchema,
  SendValues,

}) => {


  return (
    <Formik
      initialValues={{ email: '', Password :"" }}
      onSubmit={(values, actions) => {
        SendValues(values);

        setTimeout(() => {
        actions.setSubmitting(false);
        }, 1000);




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
          <Field name='email'  >

            {
              ({ field }) => {
                return (
              <FormControl 
              isInvalid={errors.email && touched.email} >

                <FormLabel>Email</FormLabel>
                <Input 
                {...field} 
                placeholder='Email' 
                type='email' 
                onChange={handleChange}
                onBlur={handleBlur}
                  value={values.email}
                />
                <FormErrorMessage>{errors.email && touched.email && errors.email}</FormErrorMessage>
              </FormControl>
            )}
            }
          </Field>

          <Field name='Password' >

            {({ field }) => (
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



          <Button
            mt={4}
            colorScheme='teal'
            isLoading={isSubmitting}
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