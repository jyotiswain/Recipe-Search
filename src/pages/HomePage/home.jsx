
import React, { useState } from 'react';
import FilterPanel from '../../components/HomePage/FilterPanel/filter';
import SearchBar from '../../components/HomePage/SearchBar/search';
import List from '../../components/HomePage/List/list';
import './style.css';

const Home = () => {

    const [diets, setDiets] = useState([
        {
            id:1,
            chceked: false,
            label: 'Vegetarian',
        },
        {
            id:2,
            chceked: false,
            label: 'Vegan',
        },
        {
            id:3,
            chceked: false,
            label: 'Paleo',
        },
        {
            id:1,
            chceked: false,
            label: 'High-Fiber',
        },
    ]);

    const handleChangeChecked =id=>{
        const dietsStateList=diets;
        
    }

    return (
        <div className='home'>
            {/* Search Bar */}
            <SearchBar/>


            <div className="home_panelList-wrap">
                <div className="home_panel-wrap">
            {/* Filter Panel */}
            <FilterPanel
            diets = {diets}
            changeChecked = {handleChangeChecked}
            />
            </div>
            <div className="home_list-wrap">
            {/* List & Empty View */}
            <List/>
            </div>
            </div>
        </div>
    );
};

export default Home