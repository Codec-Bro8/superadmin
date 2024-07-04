import { Input, InputProps } from '@chakra-ui/react'
import React from 'react'

interface IstyledInput extends InputProps{
    
}

const StyledInput = ({placeholder, type}:IstyledInput) => {
  return (
    <Input 
        color='white' 
        _placeholder={{color: 'black.4'}} 
        placeholder={placeholder} 
        outlineColor='transparent' 
        border='0px' 
        type={type}
        focusBorderColor='transparent' 
        bg='#373535'
        p='2rem 1rem'
    />
  )
}

export default StyledInput