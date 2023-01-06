import React , {useState}from 'react'
import { Field, Form, Formik } from 'formik';


import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input
} from '@chakra-ui/react'

const AuthForm = ({

  IsSignIn,
  IsSignup,
  SendValues,
  SetValues,
  validate,
  forms

}) => {

  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    
    return error
  }

  const [Values, setValues] = useState( {} );

const HandleChanges = ({name,value}) => {

  setValues({
    ...Values,
    [name]: value
  });
}

  return (
    <Formik
    initialValues={{ name: '' }}
    onSubmit={(values, actions) => {

      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }, 1000)
    }}

    validationSchema={ validate }
  >
    {(props) => (
      <Form>
    {
      forms && 
      forms.map( ({NameInput, InputPlaceholder, TypeInput}, i ) => (
        <Field  key={ `${NameInput}-${i}` }  name={NameInput} validate={validateName}>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel>{InputPlaceholder}</FormLabel>
              <Input {...field} placeholder={InputPlaceholder} type={TypeInput}  onChange={({target})=>HandleChanges(target)}/>
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
      ))
    }


        <Button
          mt={4}
          colorScheme='teal'
          isLoading={props.isSubmitting}
          type='submit'
        >
          {IsSignup ? "Alta":"Ingresar"}
        </Button>
      </Form>
    )}

  </Formik>
  )
}

export default AuthForm