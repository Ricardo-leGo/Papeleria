import Head from 'next/head'
import Image from 'next/image'
import {bool} from 'prop-types'
import { Inter } from '@next/font/google'
import { useContext } from 'react'
import { LoginContext } from '../frontend/context/LoginContext'

import TabComponent from '../frontend/commons/Tabs'
import AuthForm from '../frontend/commons/Forms/AuthForm'


const inter = Inter({ subsets: ['latin'] })

const  Home = (props) =>  {

  const ctx = useContext( LoginContext );

  const { 
    ValidationSystem , 
    IsSignup,
    SignUpFormData, 
    setIsSignupFunc,
    setValuesFunc,
    resetValuesFunc
  } =  ctx;



  return (
    <>
    <TabComponent 
    ArrComponents={
      [
        <AuthForm
        IsSignIn={!IsSignup}
        IsSignup={IsSignup}
        SendValues={(...args) => args}
        SetValues={(values)=> {setValuesFunc(values)}}
        forms={ SignUpFormData.filter(el => el.form.includes("in")) }
        validate={ValidationSystem(  IsSignup ) }
        />,
        <AuthForm
        IsSignIn={!IsSignup}
        IsSignup={IsSignup}
        SendValues={(...args) => args}
        SetValues={(values)=> {setValuesFunc(values)}}
        forms={ SignUpFormData }
        validate={ValidationSystem(  !IsSignup ) }
        />
      ]
    }
    Nombres={[
      "Ingreso",
      "Alta de usuario"
    ]}

    setIsSignupFunc={(value) => setIsSignupFunc(value)}
    IsSignup={IsSignup}
    reset={resetValuesFunc}
    />
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
