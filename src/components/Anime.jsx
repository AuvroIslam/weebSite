import React from 'react';
import { Link } from 'react-router-dom';

const Anime = ({ anime }) => {
    if (!anime) return null;
    console.log(anime);

    const { title, images, genres, synopsis } = anime;
    const Safesynopsis = synopsis || "No synopsis available.";
    const truncatedSynopsis = Safesynopsis.length > 100 ? `${synopsis.substring(0, 100)}...` : Safesynopsis;
    const SafeTitle=title.length>60?`${title.substring(0,60)}...`:title;

    return (
        <div className='lg:col-span-4 my-4 md:col-span-6 col-span-12 mx-auto'>
 <div className="card bg-base-100 w-96 shadow-sm h-[500px]">
  <figure className=" bg-black h-1/2">
    <img className='h-[95%] rounded-lg'
      src={images.jpg.image_url}
      alt={title} />
  </figure>
  <div className="card-body h-1/2">
    <h2 className="card-title">
      {SafeTitle}
    </h2>
    <p>  {truncatedSynopsis}
    {Safesynopsis.length > 100 && (
        <Link to="/anime-details" className="underline decoration-blue-500 "  state={anime}>
            <span className="ml-3 text-blue-500">Read More</span>
        </Link>
    )}</p>
    <div className="card-actions justify-end">
    {genres.map((genre) => 
        <div className="badge badge-outline">{genre.name}</div>)}
    </div>
  </div>
</div>
        </div>
    );
};

export default Anime;