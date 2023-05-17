import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import style from './TvShow.module.css'
export default function TvShow() {
  const [trendinigTv, settrendinigTv] = useState([])

  let getTrendingTv = async () => {
    let { data } = await axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=c53b1866ae5832ff68901dfb84dd810c")
    let results = data.results
    settrendinigTv(results)

  }
  useEffect(() => {

    //mounting
    getTrendingTv()

  }, [])
  return <>
  
  
    <div className="container-fluid my-5">



      <div className="row">
        <div className="col-md-2 my-5">
          <div className=' my-5  p-5'>
            <hr />
            <h2><span className={style.test}>T</span>rendingTV<br />
              Watch Now</h2>
          </div>

        </div>


        {trendinigTv.map((tv,index) =>

          <div className="col-md-2" key={index}>
            <Link className='nav-link' to={`/details/${tv.id}/${tv.media_type}`}>
              <div className='position-relative'>
                <img src={'https://image.tmdb.org/t/p/w500/' + tv.poster_path} className='w-100' alt="" />
                <img src={'https://image.tmdb.org/t/p/w500/' + tv.profile_path} className='w-100' alt="" />
                <h2>{tv.title}</ h2>
                <h2>{tv.name}</ h2>
                <div className="position-absolute end-0 text-white top-0 bg-primary p-2">
                  <h2>{tv.vote_average.toFixed(1)}</ h2>
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
