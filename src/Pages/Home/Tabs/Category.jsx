import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MarvelCategory from './MarvelCategory';
import DcCategory from './DcCategory';
import Transformer from './Transformer';

const Category = () => {
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState("Marvel");
    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])


    const handleTab = (tabName) => {
        setActiveTab(tabName);

    }
    return (
        <div className='w-[90%] mx-auto my-10'>
            <Tabs defaultIndex={0}>
                <TabList className="flex space-x-2 justify-center rounded-xl bg-blue-300 p-2">
                    <Tab onClick={() => handleTab("Marvel")}>Marvel</Tab>
                    <Tab onClick={() => handleTab("DC")}>DC</Tab>
                    <Tab onClick={() => handleTab("Transformers")}>Transformer</Tab>
                </TabList>

                <TabPanel >
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        {
                            toys.map((toy, index) => <MarvelCategory key={index + 1} toy={toy}></MarvelCategory>)
                        }
                    </div>

                </TabPanel>
                <TabPanel >
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        {
                            toys.map((toy, index) => <DcCategory key={index + 1} toy={toy}></DcCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-2 mt-5'>
                        {

                            toys.map((toy, index) => <Transformer key={index + 1} toy={toy}></Transformer>)

                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;