import homeImg from "public/images/home.jpg";
import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <Hero
      imageData={homeImg}
      imageAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}
