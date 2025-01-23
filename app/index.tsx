import React from "react";
import Layout from "components/layouts/main/layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <section className="hero">
        <h1>Welcome to BuyNClose</h1>
        <p>
          Your trusted partner in real estate. Explore a wide range of properties across the United States and discover the benefits of buying with BuyNClose.
        </p>
        <button className="button-primary">Get Started</button>
      </section>
      <section className="grid-container">
        {/* Replace this with dynamic content as needed */}
        <div className="grid-item">Example Property 1</div>
        <div className="grid-item">Example Property 2</div>
        <div className="grid-item">Example Property 3</div>
      </section>
    </Layout>
  );
};

export default HomePage;
