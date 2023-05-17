import React, { useState } from 'react'
import styles from './Login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import joi from 'joi'
export default function Login({saveUserData}) {
    
    
    const [User, setUser] = useState({
        email:"",
        password:""
    })
    const [erorrList, seterorrList] = useState('')
    const [isLoading, setisLoading] = useState(false)
    // const [erorr, seterorr] = useState([])
    let navigate = useNavigate();
    





    let getData = (e) => {
        let myUser = { ...User }
        myUser[e.target.name] = e.target.value;
        setUser(myUser)
        
    }





    let sendData =async () => {
        let { data } = await axios.post("https://route-movies-api.vercel.app/signin", User)
        if (data.message === "success") {
            navigate('/home')
            localStorage.setItem("token", data.token)
            saveUserData();
            setisLoading(false)
            // console.log(data);

        }
        else {
            seterorrList(data.message)
            console.log(data);
            setisLoading(false)
            // console.log(data);

        }
    }




    // let validateData = () => {
    //     let schema = joi.object({
    //         email: joi.string().required().email({ tlds: { allow: ['com', 'net', 'org'] } }),
    //         password: joi.string().required()
    //     })
    //     return schema.validate(User, { abortEarly: false })
    // }




    let SubmitData = (e) => {
        e.preventDefault();
        setisLoading(true);
        sendData()


        // let validateResponse = validateData()
        // if (validateResponse === true) {
            
        // }
        // else {
        //     // seterorr(validateResponse.error.details)
        //     // console.log(validateResponse.error.details);

        //     setisLoading(false)
        // }
        
    }
    
    
    
    
    return <>
        <div className="container my-5  p-5     ">
           
            <div className={`${styles.form} mt-5 text-center p-5`}>
                <h1><span className={`${styles.bg} `} >L</span>O<span className={`${styles.bg}`}>G</span>I<span className={`${styles.bg}`}>N</span></h1>
            </div>
           


            {erorrList ?
                <div className='alert alert-danger'>{erorrList}
            </div>:""}
               <form onSubmit={SubmitData}>
                    <label htmlFor="email" className='my-2'>Email</label>
                    <input  onChange={getData} type="text" name="email" id="email" className='form-control' />
                    <label htmlFor="password" className='my-2'>Password</label>
                    <input  onChange={getData} type="password" name="password" id="password" className='form-control' />
                    
                <button className={`${styles.btn}  float-end my-5 `}>
                    {isLoading===true?<i className='fa fa-spinner fa-spin'></i> :"Login"}
                </button>
                <div className="clearfix"></div>
            </form>
            
            
        </div>
        
    
    
    </>
}
























