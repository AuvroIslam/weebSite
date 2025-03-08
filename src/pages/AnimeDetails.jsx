import React from 'react';
import { useLocation } from 'react-router-dom';

const AnimeDetails = () => {
    const location = useLocation();
    const {
        title,
        synopsis,
        genres,
        images,
        aired,
        episodes,
        rating,
        score,
        status,
        duration,
        season,
        source,
        url,
        trailer
    } = location.state || {};

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
            <div className="flex">
                <div className="w-1/3">
                    {images && images.jpg && (
                        <img className="w-full object-cover rounded-lg mb-4" src={images.jpg.image_url} alt={title} />
                    )}
                    <div className="mb-4">
                        <h2 className="font-semibold">Genres:</h2>
                        <div className="flex flex-wrap">
                            {genres && genres.map((genre) => (
                                <span key={genre.mal_id} className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p><strong>Release Date:</strong> {aired?.string || 'N/A'}</p>
                    <p><strong>Episodes:</strong> {episodes || 'N/A'}</p>
                    <p><strong>Rating:</strong> {rating || 'N/A'}</p>
                    <p><strong>Score:</strong> {score || 'N/A'}</p>
                    <p><strong>Status:</strong> {status || 'N/A'}</p>
                    <p><strong>Duration:</strong> {duration || 'N/A'}</p>
                    <p><strong>Season:</strong> {season || 'N/A'}</p>
                    <p><strong>Source:</strong> {source || 'N/A'}</p>
                </div>
                <div className="w-2/3 pl-6">
                    <h2 className="font-semibold mb-2">Synopsis:</h2>
                    <p className="text-gray-700 mb-4">{synopsis}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mb-4 block">View on MyAnimeList</a>
                    {trailer && trailer.url && (
                        <div className="mt-4">
                            <h2 className="font-semibold mb-2">Trailer:</h2>
                            <iframe
                                width="100%"
                                height="315"
                                src={trailer.embed_url}
                                title="Anime Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnimeDetails;