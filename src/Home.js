import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css"; // Import a CSS file for styling

function Home() {
  return (
    <div className="home-container mt-5">
      <header className="home-header">
        <h1>Welcome to Our Beautiful Home Page</h1>
        {/* Add navigation links */}
        <nav>
          <Link
            to="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Home
          </Link>
          <Link
            to="/update_employee/1" // Replace '1' with the desired id
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update Employee
          </Link>
        </nav>
      </header>

      <section className="main-content">
        <div className="content-section">
          <h2>About Us</h2>
          <p>
            We are a creative team dedicated to building amazing web
            experiences.
          </p>
        </div>

        <div className="content-section">
          <h2>Services</h2>
          <p>
            Explore our services and find out how we can help you achieve your
            goals.
          </p>
        </div>

        <div className="content-section">
          <h2>Contact Us</h2>
          <p>
            Get in touch with us to discuss your project or for any inquiries.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
