
import {bool} from 'prop-types'
import { Inter } from '@next/font/google'
import { useContext } from 'react'
import { LoginContext } from '../frontend/context/LoginContext'

import TabComponent from '../frontend/commons/Tabs'
import { Center } from '@chakra-ui/react'
import LoginFormComponent from '../frontend/commons/Forms/AuthForm/LoginForm'
import SignupComponent from '../frontend/commons/Forms/AuthForm/SignupForm'


const inter = Inter({ subsets: ['latin'] })

const  Home = (props) =>  {

  const ctx = useContext( LoginContext );

  const { 
    IsSignup,
    setIsSignupFunc,
    resetValuesFunc,
    SignInSchema,
    SignupSchema,
    SendValues,
  } =  ctx;



  return (
    <>

    <Center>
      <TabComponent 
      key={"Tabs_"}
      ArrComponents={
        [
          <LoginFormComponent 
          ValidationSchema={SignInSchema}
          key={"loginform"}
          SendValues={(values) => SendValues(values)}

          />,
          <SignupComponent
          key='Signupform'
          ValidationSchema={SignupSchema}
          />

        ]
      }
      Nombres={
        [
        "Ingreso",
        "Registro"
      ]
    }

      setIsSignupFunc={(value) => setIsSignupFunc(value)}
      IsSignup={IsSignup}
      reset={resetValuesFunc}
      />
    </Center>
 
    </>
  )

}

Home.propTypes = {
  state:bool,
}

Home.getInitialProps = async ({ res, query, req , err }) => {
  
  return {state:true}

  };

export default Home;
