const Banner = () => {
    return (
        <div>
             <div  className="w-full mb-5 relative">
                <img src="https://i.ibb.co/x1j1WgR/jean-philippe-delberghe-9-XAn-XWHu9-4-unsplash.jpg"  className="object-fill   w-full"/>
                <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 pb-3'>
                        <h2 className='text-6xl font-bold text-blue-300'>Get A New Figure</h2>
                        <p className="text-2xl">Get  home made feel with best quality</p>
                        <div>
                            <button className="btn btn-outline btn-info">Shop Now</button>
                        </div>
                    </div>
                </div>
        </div>
        </div>

    );
};

export default Banner;