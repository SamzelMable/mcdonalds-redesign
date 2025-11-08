import FadeInWhenVisible from "./components/FadeInWhenVisible";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import DealsSection from "./components/DealsSection";
import AppSection from "./components/AppSection";
import Footer from "./components/Footer";
import OurStorySection from "./components/OurStorySection";


export default function App() {
  return (
    <>
      <Navbar />
      <FadeInWhenVisible><HeroSection /></FadeInWhenVisible>
      <FadeInWhenVisible><OurStorySection /></FadeInWhenVisible>
      <FadeInWhenVisible><MenuSection /></FadeInWhenVisible>
      <FadeInWhenVisible><DealsSection /></FadeInWhenVisible>
      <FadeInWhenVisible><AppSection /></FadeInWhenVisible>
      <FadeInWhenVisible><Footer /></FadeInWhenVisible>
    </>
  );
}