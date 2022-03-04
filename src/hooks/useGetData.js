import { useState, useEffect } from "react";
import data from "./datos.json";

const api = "https://javier.especificalo.com/datos.json";

const useGetData = () => {
  const [mydata, setData] = useState([]);

  useEffect(() => {
    fetch(api, {
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("get data by api");
        setData(resp);
      })
      .catch((e) => {
        setData(data);
      });
  }, []);

  return mydata;
};

export default useGetData;
