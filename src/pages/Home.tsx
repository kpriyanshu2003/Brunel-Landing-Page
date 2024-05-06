import Container from "../components/Container";
import HomeAccordian from "../components/Home/HomeAccordian";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div>
      <NavBar />

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
    </div>
  );
}

export default Home;
