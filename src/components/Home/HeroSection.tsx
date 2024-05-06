import HeadContent from "../HeadContent";
import HeroImg from "./HeroImg";

export function HeroSection() {
  return (
    <div className="relative h-screen">
      <HeadContent
        subtitle="Success Stories"
        title1="Every success journey"
        title2="we've encountered."
      />
      <div className="mt-20">
        <HeroImg />
      </div>
    </div>
  );
}
