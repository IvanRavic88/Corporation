import Image from "next/image";
import homeImg from "public/images/home.jpg";

export default function HomePage() {
  return (
    <div className="">
      Home Page
      <div className="absolute -z-10 inset-0">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src={homeImg}
          alt="Car factory"
        ></Image>
      </div>
    </div>
  );
}
