import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from 'react-helmet'

export default function Details() {
    let params = useParams()
    
    const [trending, settrending] = useState([])
    const [similar,setSimilar]=useState([])

    let getDetails = async() => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=c53b1866ae5832ff68901dfb84dd810c`)
        settrending(data)
    }
    let getSimilar = async() => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}/similar?api_key=c53b1866ae5832ff68901dfb84dd810c`)
        setSimilar(data.results)
    }
    useEffect(() => {
        if (params.mediaType === "tv" || params.mediaType==="movie") {
            getDetails()
            getSimilar()
            
        }
        else {
            getDetails()
        }

    }, [])
    
    
    
    return <>
        <Helmet>
            <title>Details Movies</title>
        </Helmet>
        <div className='container my-5 p-5 '>
           <div className="row">
                <div className="col-md-4">
                        <div className='position-relative'>
                            <img src={'https://image.tmdb.org/t/p/w500/' + trending.poster_path} className='w-100' alt="" />
                        <img src={'https://image.tmdb.org/t/p/w500/' + trending.profile_path} className='w-100' alt="" />
                        {trending.vote_average ? <div className="position-absolute end-0  text-dark  top-0 bg-warning p-2">
                            <h2>{trending.vote_average.toFixed(1)}</ h2>
                        </div>:""}
                        
                    </div>
                </div>
                <div className="col-md-7 mx-5">
                    <h2 >{trending.title}</ h2>
                    <h2 >{trending.name}</ h2>
                    <h3 className='text-muted'>{trending.overview?.split("").splice(0,250).join("")}</h3>
                    <p className='text-muted'>{trending.biography?.split("").splice(0, 1000).join("")}</p>
                    <h5>this is popularity:{trending.popularity}</h5>
                    {trending.budget?<h5>this is budget:{trending.budget}</h5>:" " }
                    {trending.revenue ? <h5>this is revenue:{trending.revenue}</h5> : ""}
                    {trending.release_date ? <h2> The Release Date :{trending.release_date}</h2> : " "}
                    {trending.homepage? <a href={trending.homepage} className='btn btn-info'>Watch Trial</a>:""}
                    {trending.known_for_department ? <h2>{trending.known_for_department}</h2> : " "}
                    </div>
            </div> 

          
        </div>






        <div className="container my-5">
            <div className="row">
                {similar.map((movie,index) =>
                    <div className="col-md-3" key={index}>
                        <Link className='nav-link' to={`/detailsSimilar/${movie.id}/${params.mediaType}`}>
                            <div className='position-relative'>
                                <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} className='w-100' alt="" />
                                <img src={'https://image.tmdb.org/t/p/w500/' + movie.profile_path} className='w-100' alt="" />
                                <h2>{movie.title}</ h2>
                                <h2>{movie.name}</ h2>
                                {movie.vote_average ? <div className="position-absolute end-0  text-dark  top-0 bg-warning  p-2">
                                    <h2>{movie.vote_average.toFixed(1)}</ h2>
                                </div>:""}
                              
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
