import { useState } from "react";
import "./navbar.css";
import Image from "../assets/home-img-logo/apple-logo.png";

const MAIN_ITEMS = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

const STORE_MEGA_COLUMNS = [
  {
    title: "Shop",
    type: "primary",
    links: [
      "Shop Gifts",
      "Mac",
      "iPad",
      "iPhone",
      "Apple Watch",
      "Apple Vision Pro",
      "AirPods",
      "Accessories",
    ],
  },
  {
    title: "Quick Links",
    type: "secondary",
    links: [
      "Find a Store",
      "Order Status",
      "Apple Trade In",
      "Financing",
      "Personal Setup",
    ],
  },
  {
    title: "Shop Special Stores",
    type: "secondary",
    links: [
      "Certified Refurbished",
      "Education",
      "Business",
      "Veterans and Military",
      "Government",
    ],
  },
];

const MAC_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore Mac",
    type: "primary",
    links: [
      "MacBook Air",
      "MacBook Pro",
      "iMac",
      "Mac mini",
      "Mac Studio",
      "Mac Pro",
      "Displays",
      "Compare Mac",
    ],
  },
  {
    title: "Shop Mac",
    type: "secondary",
    links: [
      "Shop Mac",
      "Mac Accessories",
      "Apple Trade In",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from Mac",
    type: "secondary",
    links: [
      "Mac Support",
      "AppleCare+ for Mac",
      "macOS Sonoma",
      "Apps by Apple",
      "Continuity",
      "iCloud+",
      "Mac for Business",
      "Education",
    ],
  },
];

const iPad_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore iPad",
    type: "primary",
    links: [
      "Explore All iPad",
      "iPad Pro",
      "iPad Aire",
      "iPad",
      "iPad mini",
      "Apple Pencil",
      "Keyboards"
    ]
  },

 

  {
    title: "Shop iPad",
    type: "secondary",
    links: [
      "Shop iPad",
      "iPad Accessories",
      "Apple Trade In",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from iPad",
    type: "secondary",
    links: [
      "iPad Support",
      "AppleCare",
      "iPadOS 26",
      "Apple Intelligence",
      "Apped by Apple",
      "iCloud+",
      "Education",
    ],
  },
];

const iPhone_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore iPhone",
    type: "primary",
    links: [
      "Explore All iPhone",
      "iPhone 17 Pro",
      "iPhone Air",
      "iPhone 17",
      "iPhone 16",
      "iPhone 16e",
    ]
  },

 

  {
    title: "Shop iPhone",
    type: "secondary",
    links: [
      "Shop iPhone",
      "iPhone Accessories",
      "Apple Trade In",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from iPhone",
    type: "secondary",
    links: [
      "iPhone Support",
      "Apple Care",
      "iOS 26",
      "Apple Intelligence",
      "Apped by Apple",
      "iPhone Privacy",
      "Better with Mac",
      "iCloud+",
      "Wallet, Pay, Card",
      "Siri",
    ],
  },
];

const Watch_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore Watch",
    type: "primary",
    links: [
      "Explore All Apple Watch",
      "Apple Watch Series 11",
      "Apple Watch SE 3",
      "Apple Watch Ultra 3",
      "Apple Watch nike ",
      "Apple Watch Hermes",
    ]
  },

 

  {
    title: "Shop Watch",
    type: "secondary",
    links: [
      "Shop Apple Watch",
      "Shop Apple Bands",
      "Apple Watch Accessories",
      "Apple Trade In",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from Watch",
    type: "secondary",
    links: [
      "Watch Support",
      "AppleCare",
      "watchOS 26",
      "Apple Watch For Your kids",
      "Apped by Apple",
      "Apple Fitness+",
    ],
  },
];

const Vision_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore Watch",
    type: "primary",
    links: [
      "Explore Apple Vision Pro",
    ]
  },

 

  {
    title: "Shop Watch",
    type: "secondary",
    links: [
      "Shop Apple Vision Pro",
      "Apple Vision Pro Accessories",
      "Book a Demo",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from Vision",
    type: "secondary",
    links: [
      "Apple Vision Pro Support",
      "AppleCare",
      "watchOS 26",
      "Apple Watch For Your kids",
      "Apped by Apple",
      "Apple Fitness+",
    ],
  },
];


const AirPods_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore Watch",
    type: "primary",
    links: [
      "Explore Apple Vision Pro",
    ]
  },

 

  {
    title: "Shop Watch",
    type: "secondary",
    links: [
      "Shop Apple Vision Pro",
      "Apple Vision Pro Accessories",
      "Book a Demo",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from Vision",
    type: "secondary",
    links: [
      "Apple Vision Pro Support",
      "AppleCare",
      "watchOS 26",
      "Apple Watch For Your kids",
      "Apped by Apple",
      "Apple Fitness+",
    ],
  },
];

const TV_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore Watch",
    type: "primary",
    links: [
      "Explore Apple Vision Pro",
    ]
  },

 

  {
    title: "Shop Watch",
    type: "secondary",
    links: [
      "Shop Apple Vision Pro",
      "Apple Vision Pro Accessories",
      "Book a Demo",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from Vision",
    type: "secondary",
    links: [
      "Apple Vision Pro Support",
      "AppleCare",
      "watchOS 26",
      "Apple Watch For Your kids",
      "Apped by Apple",
      "Apple Fitness+",
    ],
  },
];

const Entertainment_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore Watch",
    type: "primary",
    links: [
      "Explore Apple Vision Pro",
    ]
  },

 

  {
    title: "Shop Watch",
    type: "secondary",
    links: [
      "Shop Apple Vision Pro",
      "Apple Vision Pro Accessories",
      "Book a Demo",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from Vision",
    type: "secondary",
    links: [
      "Apple Vision Pro Support",
      "AppleCare",
      "watchOS 26",
      "Apple Watch For Your kids",
      "Apped by Apple",
      "Apple Fitness+",
    ],
  },
];


const Accessories_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore Watch",
    type: "primary",
    links: [
      "Explore Apple Vision Pro",
    ]
  },

 

  {
    title: "Shop Watch",
    type: "secondary",
    links: [
      "Shop Apple Vision Pro",
      "Apple Vision Pro Accessories",
      "Book a Demo",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from Vision",
    type: "secondary",
    links: [
      "Apple Vision Pro Support",
      "AppleCare",
      "watchOS 26",
      "Apple Watch For Your kids",
      "Apped by Apple",
      "Apple Fitness+",
    ],
  },
];


const Support_MEGA_COLUMNS = [
  // Added: Define Mac menu data
  {
    title: "Explore Watch",
    type: "primary",
    links: [
      "Explore Apple Vision Pro",
    ]
  },

 

  {
    title: "Shop Watch",
    type: "secondary",
    links: [
      "Shop Apple Vision Pro",
      "Apple Vision Pro Accessories",
      "Book a Demo",
      "Financing",
      "Personal Setup",
    ],
  },

  {
    title: "More from Vision",
    type: "secondary",
    links: [
      "Apple Vision Pro Support",
      "AppleCare",
      "watchOS 26",
      "Apple Watch For Your kids",
      "Apped by Apple",
      "Apple Fitness+",
    ],
  },
];





function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleItemEnter = (item) => {
    setOpenMenu(item);
  };

  const handleMenuLeave = () => {
    // No additional code needed here
    setOpenMenu(null);
  };

  return (
    <>
      <div
        className={`mega-menu-overlay ${openMenu ? "show" : ""}`}
        onMouseEnter={handleMenuLeave}
        onMouseLeave={handleMenuLeave}
      />
      <header className="nav-wrapper">
        <nav className="nav" aria-label="Primary navigation">
          <div className="nav-left">
            <button className="nav-logo" aria-label="Apple home">
              <span>
                <img src={Image} alt="Apple" />
              </span>
            </button>
          </div>

          <ul className="nav-menu" onMouseLeave={handleMenuLeave}>
            {MAIN_ITEMS.map((item) => (
              <><li
                key={item}
                className={`nav-menu-item ${openMenu === item ? "is-open" : ""}`}
                onMouseEnter={() => handleItemEnter(item)}
              >
                <button type="button" className="nav-link">
                  {item}
                </button>
              </li>

                <div
                  className={`mega-menu ${openMenu ? "show" : ""}`}
                  onMouseEnter={() => setOpenMenu(openMenu)}
                  onMouseLeave={handleMenuLeave}
                >
                  <div className="mega-menu-inner">

                    {openMenu === "Store" &&
                      STORE_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {openMenu === "Mac" &&
                      MAC_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {openMenu === "iPad" &&
                      iPad_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {openMenu === "iPhone" &&
                      iPhone_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {openMenu === "Watch" &&
                      Watch_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {openMenu === "Vision" &&
                      Vision_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {openMenu === "AirPods" &&
                      AirPods_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {openMenu === "TV & Home" &&
                      TV_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {openMenu === "Entertainment" &&
                      Entertainment_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {openMenu === "Accessories" &&
                      Accessories_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {openMenu === "Support" &&
                      Support_MEGA_COLUMNS.map((column) => (
                        <div key={column.title}>
                          <div className="mega-column-title">{column.title}</div>
                          <ul className={`mega-list ${column.type}`}>
                            {column.links.map((link) => (
                              <li key={link} className="mega-list-item">
                                <a href="#" className="mega-link">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}








                  </div>
                </div></>
            ))}
          </ul>


          <div className="nav-right">
            <button className="icon-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                />
                <line
                  x1="15.5"
                  y1="15.5"
                  x2="20"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className="icon-btn" aria-label="Shopping bag">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7 9V8a5 5 0 0 1 10 0v1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <rect
                  x="5"
                  y="9"
                  width="14"
                  height="11"
                  rx="2"
                  ry="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
