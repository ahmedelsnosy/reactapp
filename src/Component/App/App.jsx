import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom'
import Details from '../Details/Details'
import DetailsSimilar from '../DetailsSimilar/DetailsSimilar'
import Home from '../Home/Home'
import Layout from '../Layout/Layout'
import Login from '../Login/Login'
import Movies from '../Movies/Movies'
import Notfound from '../Notfound/Notfound'
import People from '../People/People'
import Profile from '../Profile/Profile'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Register from '../Register/Register'
import TvShow from '../TvShow/TvShow'


import { Online } from 'react-detect-offline'
export default function App() {





  const [UserData, setUserData] = useState(null)
  let saveUserData = () => {
    let encodeToken = localStorage.getItem("token")
    let decodeToken = jwtDecode(encodeToken)
    setUserData(decodeToken)
    // console.log(decodeToken);
  }


  let logout = () => {
    localStorage.removeItem("token")
    setUserData(null)
    return <Navigate to='login' />
  }



  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, [])


  const routes = createHashRouter([
    {
      path: '/', element: <Layout UserData={UserData} logout={logout} />, children: [

        { path:'register', element: <Register /> },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { index:true, element:<ProtectedRoute UserData={UserData}><Home /></ProtectedRoute>  },
        { path: "Profile", element:<ProtectedRoute UserData={UserData}><Profile UserData={UserData} /></ProtectedRoute>  },
        { path: "Movie", element: <ProtectedRoute UserData={UserData}><Movies /></ProtectedRoute> },
        { path: "People", element: <ProtectedRoute UserData={UserData}><People /></ProtectedRoute> },
        { path: "TvShow", element: <ProtectedRoute UserData={UserData}><TvShow /></ProtectedRoute> },
        { path: "details/:id/:mediaType", element: <ProtectedRoute UserData={UserData}><Details /></ProtectedRoute> },
        { path: "detailsSimilar/:id/:mediaType", element: <ProtectedRoute UserData={UserData}><DetailsSimilar /></ProtectedRoute> },
        { path: "*", element: <Notfound /> },
      ]
    }
  ])

  return <>
    <div>
      
    <Online><RouterProvider router={routes} /></Online>
      
      
  </div>




  </>
}
