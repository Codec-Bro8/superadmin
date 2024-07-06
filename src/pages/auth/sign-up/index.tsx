import AuthLayout from "@/components/layouts/authLayout";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import AuthBtn from "@/components/ui/Buttons/authbtn";
import StyledInput from "@/components/ui/input/input";
import StyledSelect from "@/components/ui/input/select";
import { postApiData } from "@/service/request";
import { useApiStore } from "@/store/zusatndStore";

const SignUp = () => {
  const router = useRouter();
  const { fullName, email, password, setFullName, setEmail, setPassword } =
    useApiStore();

  // const handleLogin = async (e: any) => {
  //   // router.push('/superadmin/home');

  //   e.preventDefault();
  //   try {
  //     const responseData = await postApiData(,"/auth");
  //     console.log("Response Data:", responseData);
  //   } catch (error) {
  //     console.error("Error fetching churches:", error);
  //   }
  // };

  return (
    <AuthLayout text="Welcome to the Super Admin Account Creation page. Please fill in the required details to create your super admin account.">
      <Box className="flex flex-col gap-7 w-1/3">
        <StyledInput
          type="text"
          placeholder="Fullname"
          value={fullName}
          set={setFullName}
        />
        <StyledInput
          type="email"
          placeholder="Email address"
          value={email}
          set={setEmail}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          set={setPassword}
        />
        <StyledSelect placeholder="Role" />
        {/* <AuthBtn onClick={() => handleLogin}>Sign up</AuthBtn> */}
      </Box>
    </AuthLayout>
  );
};

export default SignUp;
