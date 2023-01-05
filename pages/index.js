import Head from 'next/head'
import Image from 'next/image'
import {bool} from 'prop-types'
import { Inter } from '@next/font/google'
import { useContext } from 'react'
import { LoginContext } from '../frontend/context/LoginContext'
import { Field, Form, Formik } from 'formik';


import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input
} from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] })

const  Home = (props) =>  {

  const ctx = useContext( LoginContext );
  
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }

  return (
    <Formik
    initialValues={{ name: 'Sasuke' }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }, 1000)
    }}
  >
    {(props) => (
      <Form>

        <Field name='name' validate={validateName}>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel>Usuario</FormLabel>
              <Input {...field} placeholder='name' />
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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

Home.propTypes = {
  state:bool,
}

Home.getInitialProps = async ({ res, query, req , err }) => {
  
  return {state:true}

  };

export default Home;
