
import React from 'react';
import FilterPanel from '../../components/HomePage/FilterPanel/filter';
import SearchBar from '../../components/HomePage/SearchBar/search';
import List from '../../components/HomePage/List/list';
import './style.css';

const Home = () => {
    return (
        <div className='home'>
            {/* Search Bar */}
            <SearchBar/>


            <div className="home_panelList-wrap">
                <div className="home_panel-wrap">
            {/* Filter Panel */}
            <FilterPanel/>
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