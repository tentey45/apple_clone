import React from "react";
import "./Footer.css";

const footerColumns = [
  {
    title: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    title: "Account",
    links: [
      "Manage Your Apple Account",
      "Apple Store Account",
      "iCloud.com",
    ],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade In",
      "Financing",
      "Order Status",
      "Shopping Help",
    ],
  },
   {
    title: "For Business",
    links: [
        "Apple and Business", 
        "Shop for Business",
    ],
  },
  {
    title: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supplier Responsibility",
    ],
  },
  {
    title: "Entertainment",
    links: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  
 
  {
    title: "For Education",
    links: ["Apple and Education", "Shop for K-12", "Shop for College"],
  },
  {
    title: "For Healthcare",
    links: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
  },
  {
    title: "For Govenment",
    links: [
      "Apple and Government",
      "Shop for Veterans and Military",
      "Shop for State and Local Employee",
      "Shop for Federal and Local Employee",
    ],
  },
  
  {
    title: "About Apple",
    links: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },
];

export default function AppleFooter() {
  return (
    <>
    <footer className="apple-footer">
        <div className="footer-legal">
              <p>
                  1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
              </p>
              <span>Beware of gift card scams. Do not share your code.</span>
              <p>
                  Valid only for U.S. transactions in Apple properties. For assistance, visit support.apple.com/giftcard or call 800-275-2273. Not redeemable at Apple resellers or for cash, and no resale, refunds, or exchanges, except as required by law. Apple is not responsible for unauthorized use. Terms apply; see apple.com/us/go/legal/gc. Issued by Apple Value Services, LLC (AVS). © 2025 Apple Inc. All rights reserved.
                  To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
              </p>

              Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.

              If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
              Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
              A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
              Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
         
          <p style={{marginTop: ""}}>
              Apple Fitness+ requires iPhone 8 or later with iOS 16.1 or later.
          </p>
        </div>
      
        <div className="footer-grid">
            
              {footerColumns.map((column, index) => (
                  <div key={index} className="footer-column">
                      <h4>{column.title}</h4>
                      <ul>
                          {column.links.map((link, i) => (
                              <li key={i}>{link}</li>
                          ))}
                      </ul>
                  </div>
              ))}
             
          </div>
          <div className="footer-bottom">
              <p>
                  More ways to shop: <span>Find an Apple Store</span> or{" "}
                  <span>other retailer</span> near you.
              </p>

              <div className="footer-bottom-row">
                
                  <span>Copyright © 2025 Apple Inc. All rights reserved.</span>
                  <div className="footer-links">
                      <span>Privacy Policy</span>|
                      <span>Terms of Use</span>|
                      <span>Sales and Refunds</span>|
                      <span>Legal</span>|
                      <span>Site Map</span>
                  </div>
                  <span>United States</span>
              </div>
        </div>
    
    </footer>
        </>
  );
}
