import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
        
    }

    return (
        <div className="search-bar">
            <form className="search-bar form" onSubmit={handleFormSubmit}> 
                <input className="searchTerm" value={term} onChange={handleChange} placeholder="Enter a city in Australia.."/>
            </form>
        </div>
        
        
    );
}

export default SearchBar;