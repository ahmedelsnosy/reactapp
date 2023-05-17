import React from 'react';

export default function Profile({ UserData }) {

    return <>

        <div className="container my-5 bg-gradient p-5 shadow-lg">
            <div className='my-5 p-5 text-center'>
                <h1>Name:- {`${UserData?.first_name} ${UserData?.last_name}`}</h1>
                <h1>Email:- {UserData?.email}</h1>
                <h1>Age:- {UserData?.age}</h1>
            </div>
        </div>

    </>
}
