import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/superadmin/home');
  };

  return (
    <div className='w-full h-screen bg-shade-1 flex justify-center items-center'>
      <Button onClick={handleLogin} className='bg-primary text-shade-1'>Login</Button>
    </div>
  );
};

export default Login;
