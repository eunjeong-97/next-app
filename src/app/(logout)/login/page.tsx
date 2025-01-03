"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MainPageComponent from "@/app/(logout)/_component/MainPage";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/i/flow/login");
  }, [router]);

  return <MainPageComponent />;
}
