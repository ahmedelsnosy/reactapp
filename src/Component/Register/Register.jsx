import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import styles from './Register.module.css'
// import joi from 'joi'



export default function Register() {
    const [User, setUser] = useState({
        first_name: "",
        last_name: "",
        age:"",
        email: "",
        password:""
    })
    const [erorrList, seterorrList] = useState('')
    const [isLoading, setisLoading] = useState(false)
    let navigate = useNavigate();

    





    let sendData = async() => {
        let { data } = await axios.post('https://route-movies-api.vercel.app/signup', User)
        if (data.message === "success") {
            navigate('/login')
        }
        else {
            seterorrList(data.message)
            setisLoading(false)
        }
    }





    //get data from form
    let getData = (e) => {
        let myUser = { ...User };
        myUser[e.target.name] = e.target.value;//important
        setUser(myUser)
    }








    
     

    let SubmitForm = (e) => {
        e.preventDefault();
        setisLoading(true)
        sendData();
  
  
    

    }








  
    return <>
    
        <div className="container my-5 ">

            <div className={`${styles.form} mt-5 text-center p-4    `}>
                <h1><span className={`${styles.bg} `} >R</span>egi<span className={`${styles.bg} `} >S</span>ter</h1>
            </div>
            {erorrList ? <div className="p-2 alert alert-danger">
                {erorrList}
                </div>:""}
            
            <form onSubmit={SubmitForm }>
                <label htmlFor="fname" className='my-2'>First Name</label>
                <input  onChange={getData} type="text" name="first_name" id="fname" className='form-control' />
                <label htmlFor="sname" className='my-2'>Last Name</label>
                <input  onChange={getData } type="text" name="last_name" id="sname" className='form-control' />
                <label htmlFor="age" className='my-2'>Age</label>
                <input  onChange={getData } type="number" name="age" id="age" className='form-control' />
                <label htmlFor="email" className='my-2'>Email</label>
                <input  onChange={ getData} type="text" name="email" id="email" className='form-control' />
                <label htmlFor="password" className='my-2'>Password</label>
                <input  onChange={getData } type="password" name="password" id="password" className='form-control' />

                <button className={`${styles.btn}  float-end my-5 `}>{isLoading ? <i className='fa fa-spinner fa-spin'></i>:"Register"}</button>
                <div className="clearfix"></div>
            </form>
                
            
        </div>
    
    </>
}
