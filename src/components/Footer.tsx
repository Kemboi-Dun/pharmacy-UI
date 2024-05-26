import React from "react";

type footerLinkType = {
  card_title: string;
  links: string[];
};

const Footer = () => {
  const thisYear = new Date().getFullYear();
  const footerLinks = [
    {
      card_title: "Company",
      links: [
        "What's new",
        "About",
        "Press",
        "Careers",
        "Social Good",
        "Contact",
      ],
    },
    {
      card_title: "Community",
      links: [
        "Medicare for Business",
        "2023 Creator report",
        "Charities",
        "Creator profile directory",
        "Explore templates",
      ],
    },
    {
      card_title: "Support",
      links: [
        "Help topics",
        "Getting started",
        "LInktree pro",
        "Features & How-Tos",
        "FAQs",
        "Report a violation",
      ],
    },
    {
      card_title: "Trust & Legal",
      links: [
        "Terms & conditions",
        "Privacy notice",
        "Cookie notice",
        "Trust center",
        "Cookie preferences",
      ],
    },
  ];

  return (
    <div className="footer-container  container-wrapper">
      <div className="footer-wrapper">
        <div className="footer-links-wrapper">
          <div className="footer-cards-wrapper">
            {footerLinks.map((footerLink: footerLinkType) => (
              <ul key={footerLink.card_title} className="footer-card">
                <h4>{footerLink.card_title}</h4>
                <li>
                  {footerLink.links.map((link: string, index) => (
                    <a href="/" key={index}>
                      {link}
                    </a>
                  ))}
                </li>
              </ul>
            ))}
          </div>

          <div className="footer-socials">
            <div className="download-app">
              <a href="/" title="Apple store">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt="get-app-on-app-store"
                />
              </a>
              <a href="/" title="Google play">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="get-app-on-google-play-store"
                />
              </a>
            </div>

            <div className="social-icons">
              <a href="/" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="/" title="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="/" title="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-logo">
          <img
            src=" https://i.postimg.cc/6qVKVts5/Screenshot-from-2024-05-26-17-09-56-removebg-preview.png"
            alt="medicare-logo"
          />
        </div>

        <div className="policy-footer">
          <p>©{thisYear} Medicare</p>
          <p>
            Designed by{" "}
            <a href="https://musemind.agency/" target="_blank">
              MUSEMIND
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
