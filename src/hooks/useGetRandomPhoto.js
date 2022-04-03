import { useEffect, useState } from "react";

const access_key = 'kT4Jbcu3RE8PqErnPsKyrJrq8tTXmg3pU-DFKpIdWls';
const url = `https://api.unsplash.com/photos/random?client_id=${access_key}`

function useGetRandomPhoto() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchRandomPhoto = async function() {    
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return {
    loading,
    data,
    error,
    refetch: fetchRandomPhoto
  }
}

export default useGetRandomPhoto