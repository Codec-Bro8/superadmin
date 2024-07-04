import AuthLayout from '@/components/layouts/authLayout';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import AuthBtn from '@/components/ui/Buttons/authbtn';
import StyledInput from '@/components/ui/input/input';
import StyledSelect from '@/components/ui/input/select';

const SignUp = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/superadmin/home');
  };

  return (
    <AuthLayout 
      text='Welcome to the Super Admin Account Creation page. Please fill in the required details to create your super admin account.'
    >
      <Box className='flex flex-col gap-7 w-1/3'>
        <StyledInput type='text' placeholder='Fullname' />
        <StyledInput type='email' placeholder='Email address' />
        <StyledInput type='password' placeholder='Password' />
        <StyledSelect placeholder='Role' />
        <AuthBtn onClick={handleLogin}>Sign up</AuthBtn>
      </Box>
    </AuthLayout>
  );
};

export default SignUp;
