import React from "react";
import styles from "./SearchComponent.module.css";


const SearchComponent = ({ searchTerm, setSearchTerm, handleSearch, handleChange }) => {

    return (
        <>
            <form className={styles.search_form}>
                <label className={styles.sr_only} htmlFor="default-search">Search</label>
                <div className={styles.search_container}>
                    <div className={styles.search_icon}>
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className={styles.icon}
                        >
                            <path
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                stroke-width="2"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <input
                        required
                        placeholder="Buscar producto"
                        className={styles.search_input}
                        id="default-search"
                        type="search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button className={styles.search_button}>
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className={styles.icon}
                        >
                            <path
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                stroke-width="2"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke="currentColor"
                            ></path>
                        </svg>
                        <span className={styles.sr_only}>Search</span>
                    </button>
                </div>
            </form>
        </>
    );
};

export default SearchComponent;