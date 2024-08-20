import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
import Collapse from "@mui/material/Collapse";

const images = [
  { src: "/cafe.png", alt: "Cafe" },
  { src: "/water.png", alt: "Water" },
];

export default function Home() {
  return (
    <>
      <ImageSlider images={images} />
      <div className="absolute left-16 top-52 flex flex-col lg:left-1/4 lg:top-1/3">
        <div className="collapse-in delay-1 m-2 w-fit bg-icons-bg-color p-2 text-2xl md:text-4xl">Webページ製作</div>
        <div className="collapse-in delay-2 m-2 w-fit bg-icons-bg-color p-2 text-2xl md:text-4xl">システム開発</div>
        <div className="collapse-in delay-3 m-2 w-fit bg-icons-bg-color p-2 text-2xl md:text-4xl">DX推進</div>
      </div>
      <div className="collapse-in delay-3">
        <div className="scrolldown2">
          <span>scroll</span>
        </div>
      </div>
    </>
  );
}
