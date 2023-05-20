import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
        <div data-aos="fade-down-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="w-[90%] mx-auto my-20">
            <h3 className="text-center text-3xl font-semibold text-sky-500 mb-10">Gallery Section</h3>
            <div className="grid grid-cols-3 gap-5">
                <div>
                    <img className="h-[450px] w-full rounded-xl" src="https://i.ibb.co/SQnYBVd/jeet-dhanoa-s-R1-Ba-Dl-RSKM-unsplash.jpg" />
                </div>
                <div>
                    <img className="h-[450px] w-full rounded-xl" src="https://i.ibb.co/pbt7KvJ/mulyadi-MO7-HNb-W1-Mew-unsplash.jpg" />
                </div>
                <div><img className="h-[450px] w-full rounded-xl" src="https://i.ibb.co/376jngV/mulyadi-je229d-O2-TFE-unsplash.jpg" />
                </div>
                <div><img className="h-[450px] w-full rounded-xl" src="https://i.ibb.co/g67Fp7X/mulyadi-qcy-OBGLs-GJM-unsplash.jpg"/></div>
                <div><img className="h-[450px] w-full rounded-xl" src="https://i.ibb.co/zVNXQxF/mulyadi-v-Ru-Kovw-Lzuw-unsplash.jpg"/></div>
                <div><img className="h-[450px] w-full rounded-xl" src="https://i.ibb.co/XJ1JwRK/vladislav-glukhotko-b46-JNREtj0-U-unsplash.jpg"/></div>
            </div>
        </div>
    );
};

export default Gallery;