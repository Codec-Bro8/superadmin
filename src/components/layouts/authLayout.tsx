import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IauthLayoutProps{
    children: React.ReactNode;
    text: string;
}

const AuthLayout = ({children, text}:IauthLayoutProps) => {
    const username = 'David';

    const router = useRouter();
    const isSignup = router.pathname.match('sign-up')

  return (
    <Box className='w-full h-screen bg-shade-1 flex flex-col justify-center items-center gap-5 p-10 overflow-auto' color='white'>
        <Box className='flex flex-col justify-center items-center gap-5 w-1/3 pt-10'>
            <Box position="relative" w='80%' p='1.8rem' h='80%'>
                <Image src='/logo.png' alt='Logo' layout='fill' objectFit='contain' />
            </Box>
            <Text as='h1' fontSize='2rem'>{`Welcome ${username}`}</Text>
            <Text as='p' align='center' fontSize='1.1rem' color='#ffffff80'>{text}</Text>
        </Box>
        {children}
        {
            isSignup?
            (<Box>Already have an account? <Link href='/' className='text-primary'>Login</Link></Box>):
            (<Box>Don't have an account? <Link href='/auth/sign-up' className='text-primary'>Sign up</Link></Box>)
        }
    </Box>
  )
}

export default AuthLayout;