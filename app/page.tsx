import Image from "next/image";
import ImageSlider from "./components/ImageSlider";

const images = [
  { src: "/cafe.png", alt: "Cafe" },
  { src: "/water.png", alt: "Water" },
];

export default function Home() {
  return (
    <>
      <ImageSlider images={images} />
    </>
  );
}
