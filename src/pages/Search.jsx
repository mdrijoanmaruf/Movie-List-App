import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import useFetch from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import useTitle from '../hooks/useTitle'


const Search = ({ apiPath }) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q')
  const { data: movies } = useFetch(apiPath, queryTerm)
  useTitle({ title: `Search Result for "${queryTerm}"` });

  return (
    <div>
      <Header />
      <main>
        <section className='max-w-[1200px] mx-auto my-10'>
        <section>
          <p className='text-3xl pb-8'>
            {movies.length === 0 ? `No result found for "${queryTerm}"` : `Result for "${queryTerm}"`}
          </p>
        </section>
          <div className='flex flex-wrap gap-5 md:justify-start justify-center'>
            {movies && movies.length > 0 ? (
              movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))
            ) : (
              <p className='mb-[400px]'>No movies found or still loading...</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search