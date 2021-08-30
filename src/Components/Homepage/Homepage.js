import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import "./Homepage.css"

const Homepage = () => {
    return (
        <section>
            <Header></Header>
            <div className="container">
                <div className="Buttons d-flex justify-content-center pt-5 text-center">
                    <div className="p-2 text-left"><Link to="/searchWord"><button className="filterButton">Search Dictionary</button></Link></div>
                    <div className="p-2 text-left"><Link to="/favourite"><button className="filterButton">View Favourite</button></Link> </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage;