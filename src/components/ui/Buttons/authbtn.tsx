import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

interface IAuthBtn extends ButtonProps{
    children: string;
    onClick: ()=>void;
}

const AuthBtn = ({children,onClick, p, bg, color}:IAuthBtn) => {
  return (
    <Button bg={bg?bg:'#ffa500'} borderRadius='8px' p={`${p?p:'2rem'}`} color={color?color:'black.2'} _hover={{bg: '#f09c00'}} onClick={onClick}>
        {children}
    </Button>
  )
}

export default AuthBtn