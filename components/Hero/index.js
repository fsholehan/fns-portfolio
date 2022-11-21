import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:space-y-0 md:flex-row items-center py-10">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
