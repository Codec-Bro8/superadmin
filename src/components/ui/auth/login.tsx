import AuthLayout from '@/components/layouts/authLayout';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import AuthBtn from '../Buttons/authbtn';
import StyledInput from '../input/input';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/superadmin/home');
  };

  return (
    <AuthLayout 
      text='Welcome to the Super Admin Portal. Please enter your credentials to access advanced management features and system settings.'
    >
      <Box className='flex flex-col gap-7 w-1/3'>
        <StyledInput type='email' placeholder='Email address' />
        <StyledInput type='password' placeholder='Password' />
        <AuthBtn onClick={handleLogin}>Login</AuthBtn>
      </Box>
    </AuthLayout>
  );
};

export default Login;
