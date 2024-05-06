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
    <div className="relative md:px-48 px-10 md:h-96">
      <img
        src="/assets/hero-girl.png"
        alt="Hero"
        className="w-[400px] h-[400px] md:absolute md:hover:scale-105 transition-all duration-300 cursor-default"
      />

      <div className="flex">
        <div className="md:absolute top-20 left-16 md:hover:scale-105 transition-all duration-300 cursor-default">
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

        <Container className=" md:hover:scale-105 transition-all duration-300 cursor-default m-0 rounded-2xl bg-[#002E18] aspect-square inline-block w-48 md:absolute -bottom-28 left-96 md:translate-x-10">
          <span className="text-white font-semibold text-4xl">$0.5</span>
          <span className="text-[#A6A3A0] text-xl mb-3 inline-block">
            MILLION
          </span>
          <br />
          <span className="text-[#828282] text-sm">
            Reduced client expenses by saving on hiring and employee costs.
          </span>
        </Container>
      </div>

      <Container className=" md:hover:scale-105 transition-all duration-300 cursor-default -mt-16 -bottom-16 left-20 m-0 inline-flex items-center rounded-full gap-2 py-0 px-0 pr-4 shadow-lg md:absolute bg-white">
        <div className="scale-75">
          <RocketIcon />
        </div>
        <div>
          <div className="font-semibold">10 DAYS</div>
          <div className="text-[#828282] text-xs">Staff Deployment</div>
        </div>
      </Container>

      <div className="md:absolute left-1/2 md:translate-x-40 top-1/2 md:-translate-y-36 z-10">
        <Container className="m-0 inline-block md:w-72 font-semibold text-2xl">
          Enhance fortune 50 company's insights teams research capabilities
        </Container>
        <div className="md:absolute left-12 grid place-items-center">
          <Dots />
        </div>
      </div>

      <div className="grid place-items-center">
        <Button
          variant="primary"
          className="mt-8 flex gap-2 text-sm md:absolute left-1/2 md:translate-x-40 top-1/2 md:translate-y-36 z-10 "
        >
          Explore More <RightArrow />
        </Button>
      </div>

      <div className="scale-75 md:absolute -right-16 -top-16 -z-10 hidden md:block">
        <Grid />
      </div>
    </div>
  );
}

export default HeroImg;
