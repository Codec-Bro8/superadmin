// components/ProtectedRoute.tsx
import React, { ReactNode, useEffect, useState } from "react";
import { useQueries } from "@tanstack/react-query";
import {
  fetchAudio,
  fetchData,
  fetchVideos,
  fetchBlog,
  fetchDevotional,
  fetchChurchVideos,
} from "@/service/calls";
import { useApiStore } from "@/store/zusatndStore";
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

  const {
    setChurch,
    setVideos,
    setAudios,
    setBlogs,
    setDevotion,
    setChurchVideos,
  } = useApiStore();

  const results = useQueries({
    queries: [
      {
        queryKey: ["church"],
        queryFn: fetchData,
        enabled: hasToken,
      },
      {
        queryKey: ["videos"],
        queryFn: fetchVideos,
        enabled: hasToken,
      },
      {
        queryKey: ["audios"],
        queryFn: fetchAudio,
        enabled: hasToken,
      },
      {
        queryKey: ["blogs"],
        queryFn: fetchBlog,
        enabled: hasToken,
      },
      {
        queryKey: ["devotionals"],
        queryFn: fetchDevotional,
        enabled: hasToken,
      },
      {
        queryKey: ["churchVideos"],
        queryFn: fetchChurchVideos,
        enabled: hasToken,
      },
    ],
  });

  const [
    churchData,
    videoData,
    audioData,
    blogData,
    devotionalData,
    churchVideosData,
  ] = results;

  useEffect(() => {
    if (churchData.data) setChurch(churchData.data);
    if (videoData.data) setVideos(videoData.data);
    if (audioData.data) setAudios(audioData.data);
    if (blogData.data) setBlogs(blogData.data);
    if (devotionalData.data) setDevotion(devotionalData.data);
    if (churchVideosData.data) setChurchVideos(churchVideosData.data);
  }, [
    churchData.data,
    videoData.data,
    audioData.data,
    blogData.data,
    devotionalData.data,
    churchVideosData.data,
    setChurch,
    setVideos,
    setAudios,
    setBlogs,
    setDevotion,
    setChurchVideos,
  ]);

  if (!isMounted || results.some((result) => result.isLoading)) {
    return <div>Loading...</div>;
  }

  if (results.some((result) => result.error)) {
    return <div>Error loading data</div>;
  }

  return <>{hasToken ? children : null}</>;
};

export default ProtectedRoute;
