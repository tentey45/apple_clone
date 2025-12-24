import React, { useState, useRef, useEffect } from "react";

import "./Navbar.css";
import  AppleLogo from "../assests/Home_logo_img/applelogo.png";
import  SearchLogo from "../assests/Home_logo_img/search.png";
import  BagLogo from "../assests/Home_logo_img/bag.svg";


/* 11 menus – each menu has 3 columns */
const NAV_DATA = {
    Store: [
        ["Shop the Store", "Mac", "iPad", "iPhone", "Watch"],
        ["Quick Links", "Find a Store", "Order Status", "Financing"],
        ["Special Stores", "Education", "Business", "Government"],
    ],
    Mac: [
        ["Explore Mac", "MacBook Air", "MacBook Pro", "iMac"],
        ["Shop Mac", "Compare Mac", "Accessories"],
        ["More from Mac", "macOS", "Continuity", "iCloud"],
    ],
    iPad: [
        ["Explore iPad", "iPad Pro", "iPad Air", "iPad mini"],
        ["Shop iPad", "Compare iPad", "Accessories"],
        ["More from iPad", "iPadOS", "Apple Pencil"],
    ],
    iPhone: [
        ["Explore iPhone", "iPhone 15", "iPhone 14", "iPhone SE"],
        ["Shop iPhone", "Compare iPhone", "Accessories"],
        ["More from iPhone", "iOS", "Privacy"],
    ],
    Watch: [
        ["Explore Watch", "Series 9", "Ultra 2", "SE"],
        ["Shop Watch", "Bands", "Accessories"],
        ["More from Watch", "watchOS", "Fitness+"],
    ],
    Vision: [
        ["Explore Vision", "Vision Pro"],
        ["Shop Vision", "Accessories"],
        ["More from Vision", "visionOS"],
    ],
    AirPods: [
        ["Explore AirPods", "AirPods Pro", "AirPods Max"],
        ["Shop AirPods", "Accessories"],
        ["More from AirPods", "Spatial Audio"],
    ],
    "TV & Home": [
        ["Explore TV & Home", "Apple TV 4K", "HomePod"],
        ["Shop TV & Home", "Accessories"],
        ["More from TV & Home", "HomeKit"],
    ],
    Entertainment: [
        ["Explore Entertainment", "Apple TV+", "Apple Music"],
        ["Support", "Apple Arcade"],
        ["More", "Apple Podcasts", "Books"],
    ],
    Accessories: [
        ["Shop Accessories", "Mac", "iPhone", "iPad"],
        ["Browse", "Audio", "Cases"],
        ["More", "Charging", "Adapters"],
    ],
    Support: [
        ["Explore Support", "iPhone", "Mac", "iPad"],
        ["Help", "Repairs", "Account"],
        ["Resources", "Manuals", "Forums"],
    ],
};

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const timeoutRef = useRef(null);

    const openMenu = (menu) => {
        clearTimeout(timeoutRef.current);
        setActiveMenu(menu);
        setMobileOpen(false);
    };

    const closeMenu = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 200);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>

            {/* Blur overlay */}
            <div className={`blur-overlay ${activeMenu || mobileOpen ? 'show' : ''}`} />

            <nav className={`nav ${activeMenu ? 'no-border' : ''}`}>
                <div className="nav-inner">
                    <img src={AppleLogo} alt="Apple" className="apple-logo"/>

                    <ul className="nav-menu">
                        {Object.keys(NAV_DATA).map((item) => (
                            <li
                                key={item}
                                onMouseEnter={() => openMenu(item)}
                                onMouseLeave={closeMenu}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="nav-right">
                        <img src={SearchLogo} alt="Search" className="icon"/>
                        <img src={BagLogo} alt="Bag" className="icon"/>
                        <button
                            className="mobile-toggle"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <img src={AppleLogo} alt="Apple" className="apple-logo"/> : <img src={AppleLogo} alt="Apple" className="apple-logo"/>}
                        </button>
                    </div>
                </div>

                {/* Dropdown */}
                {activeMenu && (
                    <div
                        className="dropdown"
                        onMouseEnter={() => clearTimeout(timeoutRef.current)}
                        onMouseLeave={closeMenu}
                    >
                        <div className="dropdown-grid">
                            {NAV_DATA[activeMenu].map((column, i) => (
                                <div key={i} className="dropdown-col">
                                    {column.map((item, index) => (
                                        <div
                                            key={index}
                                            className={index === 0 ? "col-title" : "col-item"}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mobile-menu">
                    {Object.keys(NAV_DATA).map((item) => (
                        <div key={item} className="mobile-item">
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}