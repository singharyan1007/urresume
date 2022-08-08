import React from 'react'
import { Link } from "react-router-dom";
const Home=()=> {
  return (
    <div>
      <div className=''>
        <h1>Lets build your resume</h1>
        <button className='rounded-md border-2 border-cyan-300 my-5 mx-5'>

        <Link to='/UserForm' className='p-10 text-lg rounded-md border-black'>Build it</Link>
        </button>
      </div>
    </div>


  )
}

export default Home