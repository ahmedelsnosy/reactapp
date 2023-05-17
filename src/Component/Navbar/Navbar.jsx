import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
export default function Navbar({UserData,logout }) {
    
    
    return <>
        <nav className={`${styles.bg} navbar navbar-expand-lg bg-body-tertiary  navbar-dark shadow-lg `}>
            <div className="container-fluid">
                <Link className="navbar-brand" to=""><span className={styles.nav}>MY</span><span className='fa-2x'>CIMA</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {UserData === null ?
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            
                        <li className="nav-item">
                            <i className='nav-link text-white fa-2x fab fa-facebook'></i>
                        </li>
                        <li className="nav-item">
                            <i className='nav-link text-white fa-2x fab fa-twitter'></i>
                        </li>
                        <li className="nav-item">
                            <i className='nav-link text-white fa-2x fab fa-instagram'></i>
                        </li>
                        <li className="nav-item">
                            <i className='nav-link text-white fa-2x fab fa-youtube'></i>
                        </li>
                        <li className=" mx-2 nav-item btn btn-primary">
                            <Link className="nav-link" to="login">Login</Link>
                        </li>
                        <li className="mx-2 nav-item btn btn-primary ">
                            <Link className="nav-link" to="register">Register</Link>
                        </li>

                    </ul> : ""}
                    {UserData ?
                    <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Movie">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="People">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="TvShow">TvShow</Link>
                        </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

                                <li className="nav-item">
                                    <i className='nav-link text-white fa-2x fab fa-facebook'></i>
                                </li>
                                <li className="nav-item">
                                    <i className='nav-link text-white fa-2x fab fa-twitter'></i>
                                </li>
                                <li className="nav-item">
                                    <i className='nav-link text-white fa-2x fab fa-instagram'></i>
                                </li>
                                <li className="nav-item">
                                    <i className='nav-link text-white fa-2x fab fa-youtube'></i>
                                </li>
                                <Link className="nav-link" to="Profile"><h4 className='text-muted m-2'>{ `Welcome ${UserData.first_name}`}</h4></Link>
                                <li className="mx-2 nav-item btn btn-warning">
                                    <Link className="nav-link text-dark"  onClick={logout}>Logout</Link>
                                </li>
                            </ul>
                   
                    
                    </>
                  :"" }
                    
                   


                </div>
            </div>

        </nav>

    </>
}
