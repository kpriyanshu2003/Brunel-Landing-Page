import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import HomeAccordian from "../components/Home/HomeAccordian";

function Home() {
  return (
    <div>
      {/* NavBar */}
      <Container className="flex justify-between mt-4 border rounded-full">
        <Link to="/" className="flex items-center ml-8">
          <img src="/logo.svg" alt="Logo" />
        </Link>
        <div className="flex gap-5">
          <Button variant="secondary">Get Projects</Button>
          <Button variant="primary">OnBoard Talent</Button>
        </div>
      </Container>

      {/* Hero Section */}
      {/* TODO : Hero Section Image and other components */}
      {/* <div>
        <span className="covGrace text-green-400 text-xl">Sucess Stories</span>
        <br />
        <span className="text-5xl">
          Every success journey <br /> we&apos;ve encountered.
        </span>
      </div> */}

      {/* Ask Questions */}
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

      {/* Copyright */}
      <Container className="bg-[#F5F5F5] rounded-3xl text-sm flex justify-between px-10 py-10">
        <span>&copy; Talup 2023. All rights reserved</span>
        <div className="flex gap-7 items-center">
          <Link to="#">Terms & Conditions</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
