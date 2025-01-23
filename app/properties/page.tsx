"use client";
import { Button } from "components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const styles = `
  body, html {
    background-color: #000000;
    color: #ffffff;
    margin: 0;
    font-family: Arial, sans-serif;
  }

  section {
    background-color: #000000;
    color: #ffffff;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #1a1a1a;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  nav .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  nav ul li {
    display: inline;
  }

  nav ul li a {
    color: #ffffff;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #333333;
    transition: color 0.3s, background-color 0.3s;
  }

  nav ul li a:hover {
    background-color: #555555;
    color: #e0e0e0;
    text-decoration: line-through;
  }

  .hamburger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
  }

  .hamburger-menu div {
    width: 25px;
    height: 3px;
    background-color: #ffffff;
  }

  @media (max-width: 768px) {
    nav ul {
      display: none;
      flex-direction: column;
      background-color: #1a1a1a;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 10px;
    }

    nav ul.show {
      display: flex;
    }

    .hamburger-menu {
      display: flex;
    }
  }

  .hero {
    text-align: center;
    padding: 50px 20px;
  }
    .button-secondary{
    height: 20px;
    }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .hero p {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
    .listing-thumbnail{
    width: 500px;
    height: 270px;
}

  .grid-item {
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: #e0e0e0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  .grid-item img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .grid-item h3 {
    margin: 10px 0;
    font-size: 1.25rem;
  }

  .grid-item p {
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .grid-item .price {
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

const properties = [
  {
    id: 1,
    title: "Luxury Villa in California",
    description: "A beautiful villa with a stunning ocean view.",
    price: "$2,500,000",
    thumbnail: '/images/img1.jpg',
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    description: "A spacious apartment located in the heart of the city.",
    price: "$1,200,000",
    thumbnail: "/images/img2.jpg",
  },
  {
    id: 3,
    title: "Cozy Cottage in Vermont",
    description: "A charming cottage surrounded by nature.",
    price: "$850,000",
    thumbnail: "/images/img3.jpg",
  },
  {
    id: 4,
    title: "Beachfront Condo in Florida",
    description: "A luxurious condo with private beach access.",
    price: "$950,000",
    thumbnail: "/images/img4.jpg",
  },

    {
      id: 5,
      title: "Luxury Villa in Malibu",
      description: "A stunning villa with ocean views.",
      price: "$3,500,000",
      thumbnail: "/images/img5.jpg",
    },
    {
      id: 6,
      title: "Beachfront Condo in Miami",
      description: "A modern condo with direct beach access.",
      price: "$1,800,000",
      thumbnail: "/images/img6.jpg",
    },
    {
      id: 7,
      title: "Penthouse in Manhattan",
      description: "An exclusive penthouse with skyline views.",
      price: "$5,000,000",
      thumbnail: "/images/img7.jpg",
    },
    {
      id: 8,
      title: "Mountain Lodge in Aspen",
      description: "A rustic lodge perfect for winter getaways.",
      price: "$2,200,000",
      thumbnail: "/images/img8.jpg",
    },
    {
      id: 9,
      title: "Downtown Loft in Chicago",
      description: "A stylish loft in the heart of the city.",
      price: "$1,000,000",
      thumbnail: "/images/img9.jpg",
    },
    {
      id: 10,
      title: "Historic Brownstone in Brooklyn",
      description: "A charming brownstone with classic architecture.",
      price: "$1,500,000",
      thumbnail: "/images/img10.jpg",
    },
    {
      id: 11,
      title: "Riverside Mansion in New Orleans",
      description: "A beautiful mansion with stunning river views.",
      price: "$4,200,000",
      thumbnail: "/images/img11.jpg",
    },
    {
      id: 12,
      title: "Modern House in Los Angeles",
      description: "A sleek and contemporary house with a pool.",
      price: "$2,800,000",
      thumbnail: "/images/img12.jpg",
    },
    {
      id: 13,
      title: "Countryside Farmhouse in Texas",
      description: "A spacious farmhouse surrounded by farmland.",
      price: "$1,200,000",
      thumbnail: "/images/img13.jpg",
    },
    {
      id: 14,
      title: "Contemporary Mansion in San Francisco",
      description: "An ultra-modern mansion with panoramic views.",
      price: "$6,500,000",
      thumbnail: "/images/img14.jpg",
    },
    {
      id: 15,
      title: "Suburban Family Home in Dallas",
      description: "A large home with a beautiful backyard.",
      price: "$850,000",
      thumbnail: "/images/img15.jpg",
    },
    {
      id: 16,
      title: "Luxury Townhouse in Seattle",
      description: "A sophisticated townhouse in an urban setting.",
      price: "$2,300,000",
      thumbnail: "/images/img16.jpg",
    },
    {
      id: 17,
      title: "Secluded Cabin in Montana",
      description: "A quiet cabin in the middle of the wilderness.",
      price: "$600,000",
      thumbnail: "/images/img17.jpg",
    },
    {
      id: 18,
      title: "City Apartment in Paris",
      description: "A cozy apartment near the Eiffel Tower.",
      price: "$900,000",
      thumbnail: "/images/img18.jpg",
    },
    {
      id: 19,
      title: "Lakeview Property in Michigan",
      description: "A peaceful house overlooking a serene lake.",
      price: "$1,700,000",
      thumbnail: "/images/img19.jpg",
    },
    {
      id: 20,
      title: "Desert Retreat in Arizona",
      description: "A beautiful home surrounded by desert landscapes.",
      price: "$1,400,000",
      thumbnail: "/images/img20.jpg",
    },
    {
      id: 21,
      title: "Downtown Studio in Los Angeles",
      description: "A modern studio apartment with city views.",
      price: "$650,000",
      thumbnail: "/images/img21.jpg",
    },
    {
      id: 22,
      title: "Luxury Home in Beverly Hills",
      description: "A mansion with a sprawling garden and pool.",
      price: "$8,000,000",
      thumbnail: "/images/img22.jpg",
    },
    {
      id: 23,
      title: "Colonial Home in Virginia",
      description: "A classic colonial-style home with a spacious yard.",
      price: "$1,600,000",
      thumbnail: "/images/img23.jpg",
    },
    {
      id: 24,
      title: "Oceanfront Property in Hawaii",
      description: "A tropical property with breathtaking ocean views.",
      price: "$4,500,000",
      thumbnail: "/images/img24.jpg",
    },
    {
      id: 25,
      title: "Chic Loft in San Diego",
      description: "A stylish loft with industrial features.",
      price: "$1,000,000",
      thumbnail: "/images/img25.jpg",
    },
    {
      id: 26,
      title: "Art Deco Apartment in Miami",
      description: "An elegant apartment in the Art Deco district.",
      price: "$1,300,000",
      thumbnail: "/images/img26.jpg",
    },
    {
      id: 27,
      title: "Coastal Retreat in Maine",
      description: "A charming coastal home with a quiet retreat feel.",
      price: "$2,000,000",
      thumbnail: "/images/img27.jpg",
    },
    {
      id: 28,
      title: "Private Estate in Napa Valley",
      description: "A luxurious estate with vineyards and rolling hills.",
      price: "$6,000,000",
      thumbnail: "/images/img28.jpg",
    },
    {
      id: 29,
      title: "Spacious Family Home in Atlanta",
      description: "A large home perfect for growing families.",
      price: "$950,000",
      thumbnail: "/images/img29.jpg",
    },
    {
      id: 30,
      title: "Contemporary Cabin in Wyoming",
      description: "A modern cabin in a secluded mountain setting.",
      price: "$1,100,000",
      thumbnail: "/images/img30.jpg",
    },
      
];

export default function Web() {
  return (
    <>
      <style>{styles}</style>
      <nav>
        <div className="logo">BuyNClose</div>
        <div
          className="hamburger-menu"
          onClick={() => {
            const menu = document.querySelector("nav ul");
            if (menu) {
              menu.classList.toggle("show");
            }
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Listings</Link>
          </li>
          <li>
            <Link href="#">Explore</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <section className="hero">
        <h1>Homes for sale in the United States</h1>
        <p>
          Below listed are the best Houses, mansions, villas and apartments for sale.
        </p>
      </section>
      <section>
        <div className="grid-container">
          {properties.map((property) => (
            <div key={property.id} className="grid-item">
              <img src={property.thumbnail} alt={property.title} className="listing-thumbnail" />
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <div className="price">{property.price}</div>
              <Button href={`/properties/${property.id}`} className="button-secondary">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
