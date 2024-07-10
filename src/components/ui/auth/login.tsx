import AuthLayout from "@/components/layouts/authLayout";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import AuthBtn from "../Buttons/authbtn";
import StyledInput from "../input/input";
import { useApiStore } from "@/store/zusatndStore";
import { postApiData } from "@/service/request";

const Login: React.FC = () => {
  const { email, setEmail, password, setPassword } = useApiStore();
  const router = useRouter();

  const handleLogin = async () => {
    const req = await postApiData({ email, password }, "auth/login");

    const token = req.data[0].token;

    localStorage.setItem("user", token);

    router.push("/superadmin/home");
    setEmail("");
    setPassword("");
  };

  return (
    <AuthLayout text="Welcome to the Super Admin Portal. Please enter your credentials to access advanced management features and system settings.">
      <Box className="flex flex-col gap-7 w-1/3">
        <StyledInput
          type="email"
          placeholder="Email address"
          set={(e) => setEmail(e.target.value)}
          value={email}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          set={(e) => setPassword(e.target.value)}
          value={password}
        />
        <AuthBtn onClick={handleLogin}>Login</AuthBtn>
      </Box>
    </AuthLayout>
  );
};

export default Login;
