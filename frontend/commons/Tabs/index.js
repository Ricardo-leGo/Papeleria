import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function TabComponent({
  ArrComponents,
  Nombres, 
  setIsSignupFunc,
  IsSignup,
  reset,
  Auxiliar = null
}) {



const SearchInputs = () => {

  document.querySelectorAll("input").forEach( ( el ) => el.value="")
  setIsSignupFunc( !IsSignup)
  reset();
}

  return (


<Tabs isManual variant='enclosed' onChange={()=> SearchInputs()}>
      <TabList>
        {
        Nombres && Nombres.map( (el, i) => (
              <Tab key={`Tab${i}`}>{el}</Tab>
        ))
        }
      </TabList>
      <TabPanels>
      {

      ArrComponents && ArrComponents
        .map( (el, i) => (

          <TabPanel key={`Tabpanel${i}`}>{el}</TabPanel>

        ))
      }
      </TabPanels>
</Tabs>
  )
}

export default TabComponent