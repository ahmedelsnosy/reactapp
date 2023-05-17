import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ UserData ,children}) {
        
    
    if ((UserData === null) & (localStorage.getItem("token") === null)) {
      return  <Navigate  to='login'/>
    }
    else {
        return children
    }
    
    
    
}
