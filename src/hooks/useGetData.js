import { useState, useEffect } from 'react';
import data from './datos.json';

const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me';

const useGetData = () =>{
    const [ mydata, setData ] = useState([]);

    useEffect(()=>{
        setData(data);
    }, []);

    return mydata;
}

export default useGetData;