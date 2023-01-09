import React , {useState, useEffect}from 'react'
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
  forms,
  validateName,

}) => {

    const [TypeObject, setTypeObject] = useState({});


 
    useEffect(() => {
    forms.forEach((element,i) => {
      setTypeObject({
        ...TypeObject,
        [element.NameInput]:""
      });

      console.log({
        ...TypeObject,
        [element.NameInput]:""
      });


    });

    console.log( TypeObject );
    }, [])


  return (
    <Formik
    initialValues={ TypeObject }
    onSubmit={ async (values, actions) => {
        
        console.log(values, actions, "values", "actions");

      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2))
      //   actions.setSubmitting(false)
      // }, 1000)

    }}
    validationSchema={validate}
  >
    {(props) => {

      {/* console.log(props, "asdasdasd"); */}
      return (
      <Form>
    {
      forms && 
      forms
      .map( ({NameInput, InputPlaceholder, TypeInput}, i ) => (
        
        <Field  key={ `${NameInput}-${i}` }  name={NameInput} validate={validateName}>
          {({ field, form }) =>{
              console.log(form, "=================");
            return  (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel>{InputPlaceholder}</FormLabel>
              <Input
                  {...field} 
                  placeholder={InputPlaceholder} 
                  type={TypeInput}
                  onChange={({target})=>SetValues(target)}
                  />
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
          )
          }}
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
    )
    }}

  </Formik>
  )
}

export default AuthForm