import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MarvelCategory from './MarvelCategory';
import DcCategory from './DcCategory';
import Transformer from './Transformer';

const Category = () => {
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState("Marvel");
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/toys")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])

    useEffect(() => {
        const tabItems = toys.filter(toy => toy.subCategory === activeTab);
        setFilteredData(tabItems)
        console.log(tabItems)
    }, [activeTab])

    const handleTab = (tabName) => {
        setActiveTab(tabName);

    }
    return (
        <div className='w-[90%] mx-auto my-10'>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleTab("Marvel")}>Marvel</Tab>
                    <Tab onClick={() => handleTab("DC")}>DC</Tab>
                    <Tab onClick={() => handleTab("Transformers")}>Transformer</Tab>
                </TabList>

                <TabPanel >
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        {
                            filteredData.map((toy, index) => <MarvelCategory key={index + 1} toy={toy}></MarvelCategory>)
                        }
                    </div>

                </TabPanel>
                <TabPanel >
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        {
                            filteredData.map((toy, index) => <DcCategory key={index + 1} toy={toy}></DcCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        {

                            filteredData.map((toy, index) => <Transformer key={index + 1} toy={toy}></Transformer>)

                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;