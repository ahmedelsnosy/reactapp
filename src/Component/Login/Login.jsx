// import React, { useState } from 'react'
// import styles from './Login.module.css'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// // import joi from 'joi'
// export default function Login({saveUserData}) {
    
    
//     const [User, setUser] = useState({
//         email:"",
//         password:""
//     })
//     const [erorrList, seterorrList] = useState('')
//     const [isLoading, setisLoading] = useState(false)
//     // const [erorr, seterorr] = useState([])
//     let navigate = useNavigate();
    





//     let getData = (e) => {
//         let myUser = { ...User }
//         myUser[e.target.name] = e.target.value;
//         setUser(myUser)
        
//     }





//     let sendData =async () => {
//         let { data } = await axios.post("https://route-movies-api.vercel.app/signin", User)
//         if (data.message === "success") {
//             navigate('/home')
//             localStorage.setItem("token", data.token)
//             saveUserData();
//             setisLoading(false)
//             // console.log(data);

//         }
//         else {
//             seterorrList(data.message)
//             console.log(data);
//             setisLoading(false)
//             // console.log(data);

//         }
//     }




//     // let validateData = () => {
//     //     let schema = joi.object({
//     //         email: joi.string().required().email({ tlds: { allow: ['com', 'net', 'org'] } }),
//     //         password: joi.string().required()
//     //     })
//     //     return schema.validate(User, { abortEarly: false })
//     // }




//     let SubmitData = (e) => {
//         e.preventDefault();
//         setisLoading(true);
//         sendData()


//         // let validateResponse = validateData()
//         // if (validateResponse === true) {
            
//         // }
//         // else {
//         //     // seterorr(validateResponse.error.details)
//         //     // console.log(validateResponse.error.details);

//         //     setisLoading(false)
//         // }
        
//     }
    
    
    
    
//     return <>
//         <div className="container my-5  p-5     ">
           
//             <div className={`${styles.form} mt-5 text-center p-5`}>
//                 <h1><span className={`${styles.bg} `} >L</span>O<span className={`${styles.bg}`}>G</span>I<span className={`${styles.bg}`}>N</span></h1>
//             </div>
//             {/* {erorr.map((err) =>
//                 <div className="alert alert-danger p-3">{ err.message}</div>
//         )} */}


//             {erorrList ?
//                 <div className='alert alert-danger'>{erorrList}
//             </div>:""}
//                <form onSubmit={SubmitData}>
//                     <label htmlFor="email" className='my-2'>Email</label>
//                     <input  onChange={getData} type="text" name="email" id="email" className='form-control' />
//                     <label htmlFor="password" className='my-2'>Password</label>
//                     <input  onChange={getData} type="password" name="password" id="password" className='form-control' />
                    
//                 <button className={`${styles.btn}  float-end my-5 `}>
//                     {isLoading===true?<i className='fa fa-spinner fa-spin'></i> :"Login"}
//                 </button>
//                 <div className="clearfix"></div>
//             </form>
            
            
//         </div>
        
    
    
//     </>
// }
























import React, { useState } from 'react'
import styles from './Login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login({saveUserData}) {
    let navigate = useNavigate()
    const [erormes, seterormes] = useState("")
    const [isloading, setisloading] = useState(false)
    const [User, setUser] = useState({
        email: "",
        password:""
    })

    let sendData =async () => {
        let { data } = await axios.post("https://route-movies-api.vercel.app/signin",User)
        if (data.message === "success") {
            navigate("/")
            localStorage.setItem("token", data.token)
            saveUserData();
        }
        else {
            seterormes(data.message)
            setisloading(false)
        }
        
    }

    let getData = (e) => {
        let myUser = { ...User }
        myUser[e.target.name] = e.target.value
        setUser(myUser)
        // console.log(myUser);
    }


    let SubmitForm = (e) => {
        e.preventDefault()
        setisloading(true)
        sendData()
    }
    return <>
    
        <div className="container my-5 ">
            
            
            <div className='header text-center p-5 my-5'>
                <h1 className=""><span className={`${styles.bg}`}>L</span>O<span className={`${styles.bg}`}>G</span>I<span className={`${styles.bg}`}>N</span></h1>
            </div>
            {erormes ? <div className="fs-4 alert alert-danger">
                {erormes}
            </div>:""}      
            <form  onSubmit={SubmitForm}>
                <label htmlFor="email" className='my-2'>Email</label>
                <input onChange={getData} type="email"  required className="form-control" name="email" id="email" />
                <label htmlFor="password" className='my-2'>Password</label>
                <input type="password" onChange={getData} required className="form-control" name="password" id="password" />
                <button className={`${styles.btn} float-end my-3`}>{ isloading?<i className='fa fa-spinner fa-spin'></i>:"LOGIN"}</button>
            <div className="clearfix">
            </div>
            </form>

        </div>
        
    
    </>
}
