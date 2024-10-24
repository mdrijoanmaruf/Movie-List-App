import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import useTitle from '../hooks/useTitle'

const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  const pageTitle =  useTitle({ title: title || 'Movie Details' });

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="max-w-6xl mx-auto my-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies && movies.length > 0 ? (
              movies.map((movie) => <Card key={movie.id} movie={movie} />)
            ) : (
              <p className="col-span-full text-center">No movies found or still loading...</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MovieList;
