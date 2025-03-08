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
<Link to="/anime-details" state={anime}>
 <div className="card bg-base-100 w-96 shadow-lg h-[500px]  shadow-[#66D2CE]">
  <figure className=" bg-[#E3D2C3] h-1/2">
    <img className='h-[95%] rounded-lg'
      src={images.jpg.image_url}
      alt={title} />
  </figure>
  <div className="card-body h-1/2 bg-[#EAEAEA]">
    <h2 className="card-title text-[#2DAA9E]">
      {SafeTitle}
    </h2>
    <p>  {truncatedSynopsis}
    {Safesynopsis.length > 100 && (
        <Link to="/anime-details" className="underline decoration-[#2DAA9E] "  state={anime}>
            <span className="ml-3 text-[#2DAA9E] hover:font-bold">Read More</span>
        </Link>
    )}</p>
    <div className="card-actions justify-end">
    {genres.map((genre) => 
        <div className=" rounded-xl border-2  px-2 border-[#66D2CE] text-[#2DAA9E] ">{genre.name}</div>)}
    </div>
  </div>
</div>
</Link>
        </div>
    );
};

export default Anime;