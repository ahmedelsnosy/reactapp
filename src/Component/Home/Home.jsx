import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import style from './Home.module.css'
export default function Home() {

    const [trendinigMovies, settrendinigMovies] = useState([])
    const [trendinigTv, settrendinigTv] = useState([])
    const [trendinigPerson, settrendinigPerson] = useState([])





    let getTrendingMovies = async (mediaType, fun) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=c53b1866ae5832ff68901dfb84dd810c`)
        fun(data.results)
    }


    useEffect(() => {

        //mounting
        getTrendingMovies('movie', settrendinigMovies)
        getTrendingMovies('tv', settrendinigTv)
        getTrendingMovies('person', settrendinigPerson)


    }, [])

    return <>


        <div className="container-fluid p-5 my-5">
            <div className="row my-5 p-4">
                <div className="col-md-2 my-5">
                        <hr />
                    <div className='my-5 '>
                        <h2 ><span className={style.test}>T</span>rending<br />
                            Movies Watch Now</h2>
                        <p className='my-5 text-muted fa-2x'>Enjoy watching movies</p>
                    </div>
                </div>
                {trendinigMovies.slice(0, 11).map((movie) =>
                    <div className="col-md-2">
                        <Link className='nav-link' to={`/details/${movie.id}/${movie.media_type}`}>
                            <div className='position-relative'>
                                <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} className='w-100' alt="" />
                                <img src={'https://image.tmdb.org/t/p/w500/' + movie.profile_path} className='w-100' alt="" />
                                <h2>{movie.title}</ h2>
                                <div className="position-absolute end-0  text-dark  top-0 bg-warning  p-2">
                                    <h2>{movie.vote_average.toFixed(1)}</ h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                )}
            </div>
        </div>





        <div className="container-fluid  ">
            <div className="row my-5 p-4">
                <div className="col-md-2 my-5">
                        <hr />
                    <div className=' my-5'>
                        <h2><span className={style.test}>T</span>rending<br />
                            TV Watch Now</h2>
                        <p className='my-5 text-muted fa-2x'>Enjoy watching TV</p>
                    </div>

                </div>


                {trendinigTv.slice(0, 11).map((tv) =>

                    <div className="col-md-2">
                        <Link className='nav-link' to={`/details/${tv.id}/${tv.media_type}`}>
                            <div className='position-relative'>
                                <img src={'https://image.tmdb.org/t/p/w500/' + tv.poster_path} className='w-100' alt="" />
                                <img src={'https://image.tmdb.org/t/p/w500/' + tv.profile_path} className='w-100' alt="" />
                                <h2>{tv.title}</ h2>
                                <h2>{tv.name}</ h2>
                                <div className="position-absolute end-0  text-dark  top-0 bg-warning  p-2">
                                    <h2>{tv.vote_average.toFixed(1)}</ h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                )}
            </div>
        </div>

        <div className="container-fluid">
            <div className="row my-5 p-4">
                <div className="col-md-2 my-5">
                        <hr />
                    <div className='my-5'>
                        <h2><span className={style.test}>T</span>rending People</h2>
                    </div>
                </div>
                {trendinigPerson.slice(0, 11).map((person) =>
                    <div className="col-md-2">
                        <Link className='nav-link' to={`/details/${person.id}/${person.media_type}`}>
                            <div className={`${style.proto} position-relative`}>
                                <img src={'https://image.tmdb.org/t/p/w500/' + person.poster_path} className='w-100' alt="" />
                                <img src={'https://image.tmdb.org/t/p/w500/' + person.profile_path} className='w-100' alt="" />
                                <div className={`${style.second} position-absolute text-white text-center`}>
                                    <div>
                                        <h2>{person.title}</ h2>

                                        <h2>{person.name}</ h2>
                                    </div>

                                </div>

                            </div>
                        </Link>
                    </div>

                )}
            </div>


                <footer>
            <div className="text-center">
                    <p>&copy; 2023 Ahmad Elsnosy All rights reserved.</p>
            </div>
                </footer>
        </div>
    </>
}
