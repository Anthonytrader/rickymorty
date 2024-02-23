import { useState, useEffect } from 'react';
import axios from 'axios';

//Con la llamada de useAxios estamos haciendo un llamado solo a la funcion y esta
//se encarga de usar useEffect para hacer el llamado
/*const useAxios = (url) => {
    const [datajson, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Usamos el useEffect para hacer el llamado
    useEffect(() => {
        axios.get(url).then(response => {
                setData(response.data);
                setLoading(false);
        }).catch(function (e) {
                setError(e);
                setLoading(false);
        });

    }, [url]);

    return [datajson, loading, error] ;
};*/


//Con el uso de useFetch hacemos un llamado a una funcion dentro de  otra funcion
const useFetch = (url) => {
    const [infoApi, setInfoApi] = useState(0);
    const [error, setError] = useState(false);
    const [isloading, setIsLoading] = useState(true);
    //Creamos la funcion para hacer el llamado
    const fetchData = async () => {
        setIsLoading(true);
        await axios.get(url).then(response => {
            setInfoApi(response.data);
            setIsLoading(false);
            setError(false);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
            setError(true);
        }).finally(() => {
            setIsLoading(false);
            //setError(false);
        });
    }

    return [infoApi, fetchData, isloading, error];
};

export default useFetch;
