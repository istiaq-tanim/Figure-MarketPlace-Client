import { Link, NavLink } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { useContext, useState } from "react";
import { UserContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(UserContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogOut = () => {
    logout()
      .then(() => {
      })
      .catch(error => console.log(error.message));
  }


  return (

    <div className='bg-sky-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>

          <span className='ml-2 text-xl font-display font-bold tracking-wide text-gray-800'>
            Figure <span className="text-blue-500 ">Frontier</span>
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li className="font-bold">
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Home
            </NavLink>
          </li>
          {user ?
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip-success tooltip" data-tip={user.displayName}>
                <div className="w-10 rounded-full" >
                  <img src={user.photoURL} />
                </div>
              </label>
              <li className='font-bold'>
                <NavLink
                  to='/addToy'
                  className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
                >
                  Add Toy
                </NavLink>
              </li>

              <li className='font-bold'>
                <NavLink
                  to='/myToys'
                  className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
                >
                  My Toys
                </NavLink>
              </li>
              <button onClick={handleLogOut} className=' btn btn-success py-0 px-2 font-displayRob'>Sign out</button>
            </> :
            <li className='font-bold'>
              <NavLink
                to='/login'
                className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
              >
                Login
              </NavLink>
            </li>
          }

          <li className="font-bold">
            <NavLink
              to='/allToys'
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              All Toys
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink
              to='/blogs'
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {menuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold font-display tracking-wide text-gray-800 uppercase'>
                        Figure <span className="text-blue-500 ">Frontier</span>
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li className="font-bold">
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li className="font-bold">
                      <Link
                        to='/login'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Login
                      </Link>
                    </li>
                    <li className="font-bold">
                      <Link
                        to='/blogs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;