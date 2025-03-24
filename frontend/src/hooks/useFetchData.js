import axios from "axios";
import { useEffect, useState } from "react";

/// Custom hook to fetch data from an API
/// @param {string} url - The URL to fetch data from
/// @returns {object} - An object containing the data, loading state, and error state
/// @example const { data, loading, error } = useFetchData('https://api.example.com/data');
const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset state before fetching new data
    setData([]);
    setLoading(true);
    setError(null);
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
export default useFetchData;
