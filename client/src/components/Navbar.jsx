import React,{useState,useRef,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
  return (
      <nav className='bg-white shadow-sm'>
          <div className="md:max-w-6xl mx-auto flex items-center justify-between p-4">
              <div className="flex justify-between items-center p-4">
                  <Link to='/'><img src="#" alt="urResume" /></Link>
                  <button className="text-xl text-cyan-500 bg-transparent border-transparent cursor-pointer transition ease-linear duration-300 hover:text-black hover:rotate-90 md:hidden" onClick={() => setShowLinks(!showLinks)}>
                      <FaBars/>
                  </button>
              </div>
              <div className=' overflow-hidden'>   
              <ul className='flex text-lg capitalise text-cyan-500  tracking-wide pl-2 pr-4 transition ease-linear duration-300'>
                  <li className=''>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/about'>About</Link>
                  </li>
              </ul>
              </div>
          </div>
    </nav>
  )
}

export default Navbar