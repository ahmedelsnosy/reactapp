
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import style from './Movies.module.css'
export default function Movies() {

  const [trendinigMovies, settrendinigMovies] = useState([])

  let getTrendingMovies = async () => {
    let { data } = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=c53b1866ae5832ff68901dfb84dd810c")
    let results = data.results
    settrendinigMovies(results)
  }
  useEffect(() => {
    getTrendingMovies()

  }, [])


  return <>

    <div className="container-fluid my-5">



      <div className="row">
        <div className="col-md-2 my-5">
          <div className=' my-5  p-5'>
            <hr />
            <h2><span className={style.test}>T</span>rendingMovies<br />
              Watch

              Now</h2>
          </div>

        </div>


        {trendinigMovies.map((movie, index) =>
          <div className="col-md-2" key={index}>
            <Link className='nav-link' to={`/details/${movie.id}/${movie.media_type}`}>
              <div className='position-relative'>
                <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} className='w-100' alt="" />
                <img src={'https://image.tmdb.org/t/p/w500/' + movie.profile_path} className='w-100' alt="" />
                <h2>{movie.title}</ h2>
                <div className="position-absolute end-0 text-white top-0 bg-primary p-2">
                  <h2>{movie.vote_average.toFixed(1)}</ h2>
                </div>
              </div>
            </Link>
          </div>

        )}
      </div>
      <footer>
        <div className="text-center">
          <p className='fa-1x p-5'>&copy; 2023 Ahmad Elsnosy All rights reserved.</p>
        </div>
      </footer>
    </div>


  </>
}
