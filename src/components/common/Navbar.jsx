import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import AppleLogo from "../../assests/Home_logo_img/applelogo.png";
import SearchLogo from "../../assests/Home_logo_img/search.png";
import BagLogo from "../../assests/Home_logo_img/bag.svg";
import Hamburger from "../../assests/Home_logo_img/hamburger.png";
import X from "../../assests/Home_logo_img/cancel.png"
/* 11 menus – each menu has 3 columns */
const NAV_DATA = {
    Store: [
        ["Shop the Store", "Shop Gifts",
            "Mac",
            "iPad",
            "iPhone",
            "Apple Watch",
            "Apple Vision Pro",
            "AirPods",
            "Accessories",],
        ["Quick Links", "Find a Store",
            "Order Status",
            "Apple Trade In",
            "Financing",
            "Personal Setup",],
        ["Special Stores", "Certified Refurbished",
            "Education",
            "Business",
            "Veterans and Military",
            "Government",],
    ],
    Mac: [
        ["Explore Mac", "MacBook Air",
            "MacBook Pro",
            "iMac",
            "Mac mini",
            "Mac Studio",
            "Mac Pro",
            "Displays",
            "Compare Mac",],
        ["Shop Mac", "Shop Mac",
            "Mac Accessories",
            "Apple Trade In",
            "Financing",
            "Personal Setup",],
        ["More from Mac", "Mac Support",
            "AppleCare+ for Mac",
            "macOS Sonoma",
            "Apps by Apple",
            "Continuity",
            "iCloud+",
            "Mac for Business",
            "Education",],
    ],
    iPad: [
        ["Explore iPad", "iPad Pro", "iPad Air", "iPad mini"],
        ["Shop iPad", "Compare iPad", "Accessories"],
        ["More from iPad", "iPadOS", "Apple Pencil"],
    ],
    iPhone: [
        ["Explore iPhone", "Explore All iPad",
            "iPhone 17",
            "iPhone 17 Pro",
            "iPhone Air",
            "iPhone 16",
            "iPhone 16e",],
          
        ["Shop iPhone", "Shop iPhone",
            "iPhone Accessories",
            "Apple Trade In",
            "Financing",
            "Personal Setup",],
        ["More from iPhone", "iPad Support",
            "AppleCare",
            "iOS 26",
            "Apple Intelligence",
            "Apped by Apple",
            "iCloud+",
            "Education"],
        ],
    Watch: [
        ["Explore Watch", "Explore All Apple Watch",
            "Apple Watch Series 11",
            "Apple Watch SE 3",
            "Apple Watch Ultra 3",
            "Apple Watch nike ",
            "Apple Watch Hermes",],
        ["Shop Watch", "Shop Apple Watch",
            "Shop Apple Bands",
            "Apple Watch Accessories",
            "Apple Trade In",
            "Financing",
            "Personal Setup",],
        ["More from Watch", "Watch Support",
            "AppleCare",
            "watchOS 26",
            "Apple Watch For Your kids",
            "Apped by Apple",
            "Apple Fitness+",],
    ],
    Vision: [
        ["Explore Vision", "Apple Vision Pro Support",
            "AppleCare",
            "watchOS 26",
            "Apple Watch For Your kids",
            "Apped by Apple",
            "Apple Fitness+",],
        ["Shop Vision", "Accessories"],
        ["More from Vision", "Apple Vision Pro Support",
            "AppleCare",
            "watchOS 26",
            "Apple Watch For Your kids",
            "Apped by Apple",
            "Apple Fitness+",],
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
                    <ul className="nav-menu">
                        {/* Wrap Apple logo with Link to homepage */}
            <Link to="/home" className="logo-link">
              <img src={AppleLogo} alt="Apple" className="apple-logo" />
            </Link>
                        {Object.keys(NAV_DATA).map((item) => (
                            <li
                                key={item}
                                onMouseEnter={() => openMenu(item)}
                                onMouseLeave={closeMenu}
                            >
                                {item}
                            </li>
                        ))}
                        <img src={SearchLogo} alt="Search" className="icon-search" />
                        <img src={BagLogo} alt="Bag" className="icon-bag" />
                        <button
                            className="mobile-toggle"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <img src={X} alt="X" className="X" /> : <img src={Hamburger} alt="icon-btn" className="hamburger" />}
                        </button>
                    </ul>
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
                                    {column.map((item, index) => {
                                        if (index === 0) {
                                            return (
                                                <div key={index} className="col-title">
                                                    {item}
                                                </div>
                                            );
                                        }

                                        if (item === "iPhone 17") {
                                            return (
                                                <Link
                                                    key={index}
                                                    to="/Iphone17"
                                                    className="col-item"
                                                >
                                                    {item}
                                                </Link>
                                            );
                                        }

                                        return (
                                            <div key={index} className="col-item">
                                                {item}
                                            </div>
                                        );
                                    })}
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