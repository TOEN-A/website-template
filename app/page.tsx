import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
import Card from "./components/Card";
import LatestInfomation from "./components/LatestInfomation";

const images = [
  { src: "/cafe.png", alt: "Cafe" },
  { src: "/water.png", alt: "Water" },
];

const cards = [
  { title: "Webページ製作", description: "Webページの制作を行います。", src: "web-create.png", alt: "Web Create" },
  {
    title: "システム開発",
    description:
      "システムの開発を行います。システムの開発を行います。システムの開発を行います。システムの開発を行います。システムの開発を行います。",
    src: "system.png",
    alt: "System",
  },
  { title: "DX推進", description: "DXの推進を行います。", src: "dx.png", alt: "DX" },
  {
    title: "定期メンテナンス",
    description: "定期メンテナンス業務を行います。",
    src: "maintenance.png",
    alt: "Maintenance",
  },
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
        <div className="p-10 lg:p-48 lg:pr-24">
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
      <div className="grid grid-cols-12 gap-4 p-2 lg:p-10">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description} src={card.src} alt={card.alt} />
        ))}
      </div>
      <h1 className="p-10">latest infomation</h1>
      <div className="border-b-2 bg-icons-color"></div>
      <LatestInfomation />
    </>
  );
}
