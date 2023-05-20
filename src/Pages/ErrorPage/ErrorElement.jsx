import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
    const { error } = useRouteError()
    return (
      <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          {/* <FaceFrownIcon className='w-40 h-40 text-yellow-500' /> */}
          <img className='w-[380px] h-96' src="https://i.ibb.co/MRHmbyS/3793096.jpg"/>
          <div className='max-w-md text-center'>
            <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
              {error?.message}
            </p>
            <Link to='/' className='btn'>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    )
};

export default ErrorElement;