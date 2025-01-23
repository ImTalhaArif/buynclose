// components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">BuyNClose</div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={isMenuOpen ? "show" : ""}>
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
  );
};

export default Header;
