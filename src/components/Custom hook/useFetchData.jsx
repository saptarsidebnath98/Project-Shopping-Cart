import { useEffect, useState } from "react"

const useFetchData = ({url}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetch(url, {mode : "cors"})
        .then(response => {
            if(response.status>= 400){
                throw new Error("Server error, unable to fetch.")
            }
            return response.json()
        })
        .then(resData => setData(resData))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))
      }, [url])
  return {data, loading, error}
}

export default useFetchData
