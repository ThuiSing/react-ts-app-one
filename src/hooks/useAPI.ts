import { useEffect, useState } from "react";

type statusTypes = "idle" | "success" | "error" | "pending";

//For Home T = IProduct

const useAPI = <T>(asyncFetch: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<statusTypes>("idle");

  useEffect(() => {
    setStatus("pending");
    setError(null);
    asyncFetch()
      .then((data) => {
        setStatus("success");
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  return {
    data,
    isLoading: status === "pending",
    isSuccess: status === "success",
    error,
  };
};

export default useAPI;
