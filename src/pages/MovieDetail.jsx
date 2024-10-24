import React, { useEffect, useState } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import noImg from "../assets/noImg.jpg";
import { FaStar } from "react-icons/fa";
import useTitle from '../hooks/useTitle'

// Function to convert numbers to millions (M)
const convertToMillions = (number) => {
  return number ? `$${(number / 1000000).toFixed(1)}M` : "N/A";
};

const MovieDetail = ({title}) => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : noImg;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=ed502838dc57d4bda8fe9116240c0124`
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, [params.id]);

  const pageTitle =  useTitle({ title: movie.title || 'Movie Details' });
  
  return (
    <div>
      <Header />
      <main>
        <section className="flex flex-col md:flex-row justify-around items-start py-8 px-4 md:px-10 lg:px-20 bg-gray-900 text-white">
          {/* Movie Poster */}
          <div className="max-w-sm mb-6 md:mb-0">
            <img
              src={image}
              alt={movie.title}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Movie Details */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold my-3 text-center md:text-left">
              {movie.title}
            </h1>
            <p className="my-4 text-gray-400 text-center md:text-left">
              {movie.overview}
            </p>

            {/* Genres */}
            <div className="my-4">
              {movie.genres &&
                movie.genres.map((g) => (
                  <span
                    key={g.id}
                    className="mr-2 mb-2 border border-gray-200 rounded px-3 py-1 inline-block text-gray-200"
                  >
                    {g.name}
                  </span>
                ))}
            </div>

            {/* Rating */}
            <div className="flex items-center my-4">
              <FaStar className="text-yellow-500" />
              <p className="ml-2 text-xl">
                {movie.vote_average ? movie.vote_average : "N/A"}
              </p>
              <span className="w-1 h-1 mx-2 bg-gray-500 rounded-full"></span>
              <span className="text-gray-400">
                {movie.vote_count ? movie.vote_count : "0"} reviews
              </span>
            </div>

            {/* Movie Details */}
            <div className="space-y-4">
              <p>
                <span className="font-bold">Runtime:</span>{" "}
                <span>{movie.runtime} min</span>
              </p>
              <p>
                <span className="font-bold">Budget:</span>{" "}
                <span>{convertToMillions(movie.budget)}</span>
              </p>
              <p>
                <span className="font-bold">Revenue:</span>{" "}
                <span>{convertToMillions(movie.revenue)}</span>
              </p>
              <p>
                <span className="font-bold">Release Date:</span>{" "}
                <span>{movie.release_date}</span>
              </p>
              <p>
                <span className="font-bold">IMDB Code:</span>{" "}
                <a
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {movie.imdb_id}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetail;
