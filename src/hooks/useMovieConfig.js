import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {ACCESS_KEY} from '../utils/helpers';

const useMovieConfig = () => {
    const [loading, setLoading] = useState(false);
    const [config, setConfig] = useState({});

    const getMovieConfig = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${ACCESS_KEY}`);
            localStorage.setItem('movie-config', JSON.stringify(res.data));
            setConfig(JSON.parse(localStorage.getItem('movie-config')));
        } catch (err) {
            console.log(err.response ?? err.response.data.message?.err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(localStorage.getItem('movie-config')){
            return;
        }
        getMovieConfig();
        //eslint-disable-next-line; 
    }, []);

    return {loading, config};
}

export default useMovieConfig;
