import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import SearchComponent from "../../components/Search/SearchComponent";
import FilterComponent from "../../components/Search/FilterComponent";
import ListComponent from "../../components/List/ListComponent";
import "./HomePage.css";

const HomePage = () => {
    return (
        <>
            <HeaderComponent />
            <div className="container">
                <div className="side-left">
                    <FilterComponent />
                </div>
                <div className="side-right">
                    <SearchComponent />
                    <ListComponent />
                </div>

            </div>
        </>
    )
}

export default HomePage;