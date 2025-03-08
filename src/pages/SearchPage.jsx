import React, { useEffect, useState } from 'react';
import Search from "../components/Search";
import Animes from '../components/Animes';
import Loading from '../components/Loading';


const SearchPage = () => {
    const [loading, setLoading] = useState(false);
    const [animes,setanimes]=useState([]);
    const getDataFromSearchComponent = (Searchdata) => {
        setLoading(true);
        getAnimeData(Searchdata);
    }
    useEffect(() => {
        getAnimeData("/seasons/now");
    }, []);
    async function getAnimeData(Searchdata) {
        
        const base_url = Searchdata=="/seasons/now"?"https://api.jikan.moe/v4":'https://api.jikan.moe/v4/anime?q=';
        setLoading(true);
    
        try {
            const response = await fetch(base_url + Searchdata);
            if (!response.ok) {
                // data fetch kortei somosha hoile
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setanimes(data.data);
            console.log(data.data);
        } catch (error) {
            // network or any issues
            console.error('Failed to fetch anime data:', error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <Search getDataFromSearchComponent={getDataFromSearchComponent}></Search>
            {
                loading && <Loading></Loading>
            }
            <Animes animes={animes}></Animes>
            
             

        </div>
    );
};

export default SearchPage;