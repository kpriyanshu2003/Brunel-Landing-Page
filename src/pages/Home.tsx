import Container from "../components/Container";
import Footer from "../components/Footer";
import { HeroSection } from "../components/Home/HeroSection";
import HomeAccordian from "../components/Home/HomeAccordian";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Container className="bg-[#E8EEE7] md:flex items-start rounded-3xl pt-10 relative overflow-hidden">
        <div className="md:w-1/2">
          <div className="md:ml-24 text-center md:text-left">
            <span className="covGrace text-gray-400 text-xl">
              What's on your mind
            </span>
            <br />
            <span className="text-5xl">Ask Questions</span>
          </div>
          <img
            src="/assets/arrow.svg"
            alt="Ask Questions"
            className="absolute mt-32 top-10 -left-16 scale-75 hidden md:block"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <HomeAccordian className="w-full px-4 md:px-0 md:w-auto" />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
