import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CrispChat from "../CrispChat";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      <CrispChat/>
      <Footer />
    </div>
  );
};



export default Layout;
