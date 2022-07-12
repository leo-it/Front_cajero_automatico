import { useEffect } from "react";
import { useRouter } from "next/router";

export const TimeValidate = ({ time, params }) => {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
    return  router.push("/");
    }, time);
    return () => {
      clearInterval(intervalId);
    };
  }, [params||""]);
};
