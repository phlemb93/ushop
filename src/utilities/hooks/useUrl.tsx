import { useEffect, useState } from "react";
import { Item } from "../types/types";

function useUrl(value: string) {

    const [data, setData] = useState<null | Item>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | string>(null);
  
    useEffect(() => {
      fetch(value)
      .then(res => res.json())
      .then(response => {
        setData(response)
        setIsLoading(false)
      })
      .catch(err => {
        setData(null)
        setIsLoading(false)
        setError(err)
      });
  
    }, [value])

  return { data, isLoading, error }
}

export default useUrl