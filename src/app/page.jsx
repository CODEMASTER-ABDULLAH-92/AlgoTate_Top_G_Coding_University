import Learn from "@/app/Component/Learn";
import Navbar from "@/app/Component/Nav";
import HeroSection from "./Component/Hero";
import FooterBelow from "./Component/FooterBelow";
import Team from "./Component/OurTeam"
import Why from "./Component/FourParts"
import TestimonialSection from "./Component/Testimonial";
import SEO from "./Component/SeoComp";
import ReadyToTransformYourLife from "./Component/ReadyToTransformYourLife";

export default function Home() {
  return (
    <div>
     <SEO/>
      <Navbar />
      <HeroSection />
      <Why/>
      <Learn />
      <TestimonialSection/>
      <ReadyToTransformYourLife/>
      <Team/>
      <FooterBelow />
    </div>
  );
}

