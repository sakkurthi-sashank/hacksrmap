const PlatinumSponsorsData = [
  {
    name: "Lumos Labs",
    image:
      "https://media.discordapp.net/attachments/1101453061681057812/1109043353804353546/Lumos_Logo_white.png?width=2206&height=894",
    link: "https://www.lumoslabs.co/",
    sponsorsCategory: "",
    alt: "LUMOS LABS LOGO",
  },
  {
    name: "Cartesi",
    image:
      "https://media.discordapp.net/attachments/1100861897756131368/1109022353981198397/Cartesi-ProfilePicture-Brandline-CoreYellow_1646390644HhvVcXpB8b.png?width=1050&height=1050",
    link: "https://cartesi.io/",
    sponsorsCategory: "",
  },
  {
    name: ".xyz",
    image: "/sponsores/xyz_1.png",
    link: "https://gen.xyz/",
    sponsorsCategory: "",
    alt: "XYZ LOGO",
  },
  {
    name: "taskade",
    image:
      "https://cdn.discordapp.com/attachments/1024859933524627457/1105512360476688444/taskade.png",
    link: "https://www.taskade.com/",
    sponsorsCategory: "",
    alt: "TASKADE LOGO",
  },
  {
    name: "avairsense",
    image: "/sponsores/avairsense.png",
    link: "https://www.avairsense.com/",
    sponsorsCategory: "",
    alt: "avairsense LOGO",
  },
  {
    name: "wolfram",
    image: "/sponsores/wolfram.png",
    link: "https://www.wolfram.com/",
    sponsorsCategory: "",
    alt: "WOLFRAM LOGO",
  },
  {
    name: "codechef",
    image: "/sponsores/codechef.png",
    link: "https://www.codechef.com/",
    sponsorsCategory: "",
    alt: "CODECHEF LOGO",
  },
];

const GoldSponsorsData = [
  {
    name: "Polygon",
    image: "/sponsores/polygon.png",
    link: "https://polygon.technology/",
    sponsorsCategory: "",
    alt: "POLYGON LOGO",
  },
];

const SilverSponsorsData = [
  {
    name: "solana",
    image: "/sponsores/solana.png",
    link: "https://solana.com/",
    sponsorsCategory: "",
    alt: "SOLANA LOGO",
  },
  {
    name: "filecoin",
    image: "/sponsores/filecoin.png",
    link: "https://filecoin.io/",
    sponsorsCategory: "",
    alt: "FILECOIN LOGO",
  },
  {
    name: "Replit",
    image: "/sponsores/replit.png",
    link: "https://replit.com/",
    sponsorsCategory: "",
    alt: "REPLIT LOGO",
  },
];

export const SponsorSection = () => {
  return (
    <section
      id="Sponsors"
      className="min-h-screen px-2 pb-4 pt-5 sm:px-10 sm:pt-10"
    >
      <h1 className="flex justify-center text-4xl font-bold font-roboto-mono bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        PLATINUM SPONSORS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {PlatinumSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-auto w-72 rounded-2xl bg-gray-950 object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
      <h1 className="flex justify-center text-4xl font-bold font-roboto-mono bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        GOLD SPONSORS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {GoldSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-auto w-72 rounded-2xl bg-gray-950 object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
      <h1 className="flex justify-center text-4xl font-bold font-roboto-mono bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
        SILVER SPONSORS
      </h1>
      <div className="flex flex-wrap justify-center gap-10 py-10">
        {SilverSponsorsData.map((sponsor) => (
          <div
            className="z-10 flex flex-col items-center space-y-5 rounded py-5"
            key={sponsor.name}
          >
            <a href={sponsor.link}>
              <img
                src={sponsor.image}
                loading="lazy"
                alt={sponsor.alt}
                className={`h-auto w-72 rounded-2xl bg-gray-950 object-contain p-3 sm:h-28`}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};