"use client";
import { Button } from "components/Button/Button";
import { LP_GRID_ITEMS } from "lp-items";
import Link from "next/link";
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

  .grid-item {
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: #e0e0e0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  .callout {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    color: #000;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fade-in-out 3s ease-in-out;
    z-index: 2000;
    opacity: 0;
    pointer-events: none;
  }

  @keyframes fade-in-out {
    0% { opacity: 0; transform: scale(0.9); }
    20% { opacity: 1; transform: scale(1); }
    80% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.9); }
  }
`;

export default function Web() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "Sign up to get started!", position: { top: "10px", left: "50px" } },
    { text: "Check out our amazing listings!", position: { top: "200px", left: "200px" } },
    { text: "Discover properties with ease.", position: { top: "400px", left: "300px" } },
  ];

  const handleGetStarted = () => {
    let stepIndex = 0;

    const interval = setInterval(() => {
      setCurrentStep(stepIndex);

      if (stepIndex >= steps.length - 1) {
        clearInterval(interval);
      }

      stepIndex++;
    }, 3000);
  };

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
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Listings</Link></li>
          <li><Link href="#">Explore</Link></li>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </nav>
      <section className="hero">
        <h1>Welcome to BuyNClose</h1>
        <p>Your trusted partner in real estate. Explore a wide range of properties across the United States and discover the benefits of buying with BuyNClose.</p>
        <button className="button-primary mr-3" onClick={handleGetStarted}>Get Started</button>
        <Button href="https://buynclose.vercel.app/properties" className="button-secondary">Browse Listings</Button>
      </section>
      <section>
        <div className="grid-container">
          {LP_GRID_ITEMS.map((singleItem) => (
            <div key={singleItem.title} className="grid-item">
              <div>{singleItem.icon}</div>
              <h3>{singleItem.title}</h3>
              <p>{singleItem.description}</p>
            </div>
          ))}
        </div>
      </section>
      {steps.map((step, index) => (
        <div
          key={index}
          className="callout"
          style={{
            display: index === currentStep ? "block" : "none",
            top: step.position.top,
            left: step.position.left,
          }}
        >
          {step.text}
        </div>
      ))}
    </>
  );
}
