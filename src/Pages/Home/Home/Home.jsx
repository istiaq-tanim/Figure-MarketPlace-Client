import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import TeamMember from "../OurTeamMember/TeamMember";
import Shipment from "../Shipment/Shipment";
import Category from "../Tabs/Category";

const Home = () => {
    useTitle("Home")
    return (
        <div >
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <TeamMember></TeamMember>
            <Shipment></Shipment>
        </div>
    );
};

export default Home;