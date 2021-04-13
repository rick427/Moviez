import {useState, useEffect} from 'react';
import axios from 'axios';

import {ACCESS_KEY, CONFIG} from '../utils/helpers';

const useMovieConfig = () => {
    const [configLoading, setConfigLoading] = useState(false);
    const [config, setConfig] = useState(CONFIG);

    const getMovieConfig = async () => {
        try {
            setConfigLoading(true);
            const res = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${ACCESS_KEY}`);
            localStorage.setItem('movie-config', JSON.stringify(res.data));
            setConfig(res.data);
        } catch (err) {
            console.log(err.response ?? err.response.data.message?.err.message);
        } finally {
            setConfigLoading(false);
        }
    }

    useEffect(() => {
        if(localStorage.getItem('movie-config')){
            setConfig(JSON.parse(localStorage.getItem('movie-config')));
            return;
        }
        getMovieConfig();
        //eslint-disable-next-line; 
    }, []);

    return {config, configLoading};
}

export default useMovieConfig;
