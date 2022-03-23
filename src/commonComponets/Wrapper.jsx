import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Wrapper = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <nav>
          <Header />
        </nav>
        <main className="flex-fill">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
