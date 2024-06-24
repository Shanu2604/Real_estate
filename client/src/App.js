import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";
import PopularProperties from "./components/popularProperties/PopularProperties";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Properties from "./components/properties/Properties";
import PropertyDetail from "./components/propertyDetail/PropertyDetail";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import FeaturedProperties from "./components/featuredProperties/FeaturedProperties";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <PopularProperties />
              <FeaturedProperties />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route
          path="/properties"
          element={
            <>
              <Navbar />
              <Properties />
              <Footer />
            </>
          }
        />
        <Route
          path="/propertyDetail/:id"
          element={
            <>
              <Navbar />
              <PropertyDetail />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
