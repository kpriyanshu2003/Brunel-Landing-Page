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
      <Container className="bg-[#E8EEE7] flex items-center rounded-3xl pt-10 relative">
        <div className="w-1/2">
          <div className="ml-24">
            <span className="covGrace text-gray-400 text-xl">
              What's on your mind
            </span>
            <br />
            <span className="text-5xl">Ask Questions</span>
          </div>
          <img src="/assets/arrow.svg" alt="Ask Questions" className="mt-32" />
        </div>
        <div className="w-1/2">
          <HomeAccordian />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
