import { useEffect, useState } from "react";
import { Item } from "../types/types";
import axios from "axios";

function useUrlArray(value: string) {

    const [data, setData] = useState<null | Item[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | string>(null);
  
    useEffect(() => {
      const makeRequest = async () => {
        setIsLoading(true)

        try {
          const res = await axios.get(value);

          if(res.status === 200) {
              setData(res.data)
              setIsLoading(false)
          } 
        } catch (error) {
            setError("Data Fetching Error")
            setIsLoading(false)
            console.log(error)
        }
      }

      makeRequest();
    }, [value])

    return { data, isLoading, error }

}

export default useUrlArray
