import React, { useState, useEffect } from 'react';
import Animes from '../components/Animes'; // Make sure to import the Animes component
import Loading from '../components/Loading';

const TopAnimes = () => {
    const [animes, setAnimes] = useState([]); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getTopAnimes();
    }, []);

    async function getTopAnimes() {
        const base_url = 'https://api.jikan.moe/v4/top/anime'; // Corrected URL
        try {
            const response = await fetch(base_url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setAnimes(data.data);
            console.log(data.data);
        } catch (error) {
            console.error('Failed to fetch anime data:', error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            {loading && <Loading />}
            <Animes animes={animes} />
        </div>
    );
};

export default TopAnimes;