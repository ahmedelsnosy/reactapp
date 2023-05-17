import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import style from './People.module.css'
export default function People() {
  
  const [trendinigPerson, settrendinigPerson] = useState([])

  let getTrendingPerson = async () => {
    let { data } = await axios.get("https://api.themoviedb.org/3/trending/person/week?api_key=c53b1866ae5832ff68901dfb84dd810c")
    let results = data.results
    settrendinigPerson(results)

  }
  
  useEffect(() => {

    //mounting
    
    getTrendingPerson()

  }, [])
  
  return <>
    <div className="container-fluid my-5">



      <div className="row g-5">
        <div className="col-md-2 my-5">
          <div className=' my-5  p-5'>
            <hr />
            <h2><span className={style.test}>T</span>rending People<br />
              Watch Now</h2>
          </div>

        </div>


        {trendinigPerson.map((person) =>
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
          <p className='fa-1x p-5'>&copy; 2023 Ahmad Elsnosy All rights reserved.</p>
        </div>
      </footer>
    </div>
  
  </>
}
