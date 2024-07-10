// components/ProtectedRoute.tsx
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const token = localStorage.getItem("user");
    if (token) {
      setHasToken(true);
    } else {
      router.replace("/");
    }
  }, [router]);

  if (!isMounted) {
    return null;
  }

  return <>{hasToken ? children : null}</>;
};

export default ProtectedRoute;
