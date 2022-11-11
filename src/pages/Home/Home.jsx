import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories.jsx";
import Products from "../../components/Products/Products.jsx";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
