const TeamMember = () => {
    return (
        <div className="w-[90%] mx-auto my-20">
            <h3 className="text-center text-3xl my-20 text-blue-500 font-bold">Our Team</h3>
            <div className="grid lg:grid-cols-3 gap-3">
                <div>
                    <img className="w-96 mx-auto rounded-3xl ring hover:ring-[#a574c9] cursor-pointer" src="https://i.ibb.co/TcPpxHZ/young-smiling-man-bearded-businessman-pointing-with-two-finger-upward.jpg" />
                    <h3 className="text-xl font-bold text-center mt-2 text-green-400">Paul Adam</h3>
                    <p className="text-lg font-bold text-center mt-2 text-green-400">Chief Executive Officer (CEO)</p>
                </div>
                <div>
                    <div>
                        <img className="w-96 mx-auto rounded-3xl ring hover:ring-[#a574c9] cursor-pointer" src="https://i.ibb.co/hgkzsqt/young-bearded-man-with-striped-shirt.jpg"/>
                        <h3 className="text-xl font-bold text-center mt-2 text-green-400">Henry Cavil</h3>
                        <p className="text-lg font-bold text-center mt-2 text-green-400">Chief Financial Officer (CFO)</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="w-96 mx-auto rounded-3xl ring hover:ring-[#a574c9] cursor-pointer" src="https://i.ibb.co/pZkpZsP/portrait-handsome-young-man-with-crossed-arms.jpg" />
                        <h3 className="text-xl font-bold text-center mt-2 text-green-400">Jammy How</h3>
                        <p className="text-lg font-bold text-center mt-2 text-green-400">Team Leader</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;