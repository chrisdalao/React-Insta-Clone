import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faUser, faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';
import './SearchBar.scss'

const SearchBar = props => {
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <div className="brand-icons">
                    <FontAwesomeIcon className="brand-icon" icon={faInstagram} />
                    <img className="brand-icon-word" src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png" alt="" />
                </div>
                <div className="search-input">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="search-navigation">
                    <FontAwesomeIcon className="search-icon" icon={faCompass} />
                    <FontAwesomeIcon className="search-icon" icon={faHeart} />
                    <FontAwesomeIcon className="search-icon" icon={faUser} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
