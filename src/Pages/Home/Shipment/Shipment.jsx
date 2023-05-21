const Shipment = () => {
    return (
        <>
            <h3 className="text-center text-3xl my-10 text-blue-500 font-bold">Our Shipment</h3>
            <div className="w-[90%] mx-auto my-10 lg:grid grid-cols-3 gap-5">

                <div>
                    <div className="rounded-lg max-h-96 bg-sky-200 mt-5 shadow-lg p-4">
                        <img src="https://i.ibb.co/qMWJBJj/drawing-pushing-trolley-carrying-happiness.jpg" className="mb-4 h-64 w-full object-fill rounded-lg" />
                        <h2 className="text-2xl text-center font-bold mb-4">Free Delivery</h2>
                        <p className="text-bold text-center">Don’t worry! The orders always arrive on time</p>
                    </div>

                </div>

                <div>
                    <div className="rounded-lg max-h-96 mt-5 bg-sky-200 shadow-lg p-4">
                        <img src="https://i.ibb.co/TR0kJSh/dan-burton-o-Nl-Mfgw-Lb-WI-unsplash.jpg" className="mb-4 w-full h-64 object-fill rounded-lg" />
                        <h2 className="text-2xl text-center font-bold mb-4">FREE RETURNS</h2>
                        <p className="text-bold text-center">All returns are subject to verification of original sale</p>
                    </div>

                </div>

                <div>
                    <div className="rounded-lg max-h-96 mt-5 bg-sky-200 shadow-lg p-4">
                    <img src="https://i.ibb.co/vkr1c2V/tamanna-rumee-m-Iqy-Yp-SNq3o-unsplash.jpg" className="mb-4 w-full h-64 object-fill  rounded-lg" />
                        <h2 className="text-2xl text-center font-bold mb-4">GIFT CARDS</h2>
                        <p className="text-bold text-center">The perfect gift for everyone, it is a gift card.</p>
                    </div>

                </div>

            </div>

        </>

    );
};

export default Shipment;