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
      <h1 className="p-10">about</h1>
      <div className="border-b-2 bg-icons-color"></div>
      <div className="flex items-center">
        <div className="lg:p-48 lg:pr-24 p-10">
          <h2>
            DXツール作成部署で、フルスタックエンジニアとして携わってきた経験から幅広い要望に応えることができます。
          </h2>
          <h2>外部向けWebサイトの製作から社内で使用するシステムの開発まで何なりとご依頼ください。</h2>
        </div>
        <Image className="hidden lg:block" src="/working.png" alt="Working" width={500} height={500} />
        <Image className="lg:hidden" src="/working.png" alt="Working" width={200} height={200} />
      </div>
      <h1 className="p-10">solution</h1>
      <div className="border-b-2 bg-icons-color"></div>
      <div>
        <h1>Webページ製作</h1>
        <h2>
          デザインからコーディングまで、お客様の要望に合わせたWebページを制作します。主にNext.js、Reactを使用しての開発となります。
        </h2>
      </div>
    </>
  );
}
