// import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function useFetch(url, isCovidData) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: ourRequest.token }) // Remember to add url into get()
      .then((res) => {
        var data = res.data;
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format('DD/MM/YYYY');
            return item;
          });
          data = data.reverse();
        }
        setData(data);
        setLoading(false);
      })
      .catch((res) => {
        setData([]);
        setLoading(false);
      });

    return () => {
      ourRequest.cancel();
    };
  }, [url, isCovidData]);

  return { data, loading };
}

export default useFetch;
