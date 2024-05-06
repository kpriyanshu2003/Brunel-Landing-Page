import {
  RightArrow,
  RocketIcon,
  SplashIcon,
  Grid,
  Dots,
} from "../../constants/Icons";
import Button from "../Button";
import Container from "../Container";

function HeroImg() {
  return (
    <div className="relative px-48 h-96">
      <img
        src="/assets/hero-girl.png"
        alt="Hero"
        className="w-[400px] h-[400px] absolute"
      />

      <div className="absolute top-20 left-16">
        <Container className="m-0 inline-block w-48 rounded-xl relative p-7 shadow-xl bg-white">
          <div className="absolute -top-8 -left-5 scale-75">
            <SplashIcon />
          </div>
          <span className="text-4xl font-semibold">40%</span>
          <br />
          <span className="text-[#828282] text-sm">
            Achieved reduction in project execution time by optimising team
            availability
          </span>
        </Container>
      </div>

      <Container className="-bottom-16 left-20 m-0 inline-flex items-center rounded-full gap-2 p-0 pr-4 shadow-lg absolute bg-white">
        <div className="scale-75">
          <RocketIcon />
        </div>
        <div>
          <div className="font-semibold">10 DAYS</div>
          <div className="text-[#828282] text-xs">Staff Deployment</div>
        </div>
      </Container>

      <Container className="m-0 rounded-2xl bg-[#002E18] aspect-square inline-block w-48 absolute -bottom-28 left-1/2 -translate-x-80">
        <span className="text-white font-semibold text-4xl">$0.5</span>{" "}
        <span className="text-[#A6A3A0] text-xl mb-3 inline-block">
          MILLION
        </span>
        <br />
        <span className="text-[#828282] text-sm">
          Reduced client expenses by saving on hiring and employee costs.
        </span>
      </Container>

      <Button className="mt-8 bg-black text-white flex gap-2 text-sm absolute left-1/2 translate-x-40 top-1/2 translate-y-36 z-10 ">
        Explore More <RightArrow />
      </Button>

      <div className="scale-75 absolute -right-16 -top-16 z-0">
        <Grid />
      </div>

      <div className="absolute left-1/2 translate-x-40 top-1/2 -translate-y-36 z-10">
        <Container className="m-0 inline-block w-72 font-semibold text-2xl relative">
          Enhance fortune 50 company's insights teams research capabilities
        </Container>
        <div className="absolute left-12">
          <Dots />
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
