"use client";
// import React, { useState, ChangeEvent } from "react";
// import VideoThumb from "@/public/images/hero-image.png";
// import CarbSvg from "@/public/images/carb.svg";
// import ModalVideo from "@/components/modal-video";
// import SignUp from "./SignUp";
// import Image from "next/image";
// import Papa from "papaparse";

// interface Brand {
//   name: string;
//   url: string;
// }

// interface CsvUploaderProps {
//   onParseComplete: (result: Papa.ParseResult<any>) => void;
// }

// const CsvUploader: React.FC<CsvUploaderProps> = ({ onParseComplete }) => {
//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       Papa.parse(file, {
//         complete: onParseComplete,
//         header: true,
//       });
//     }
//   };

//   return <input type="file" accept=".csv" onChange={handleFileChange} />;
// };

// interface SearchableListProps {
//   brands: Brand[];
// }

// const SearchableList: React.FC<SearchableListProps> = ({ brands }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredBrands = brands.filter((brand) =>
//     brand.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };

// //#35363B
// export default function Hero() {
//   return (
//     <section className="relative bg-[#1F252D]">
//       {/* Illustration behind hero content */}
//       {/* <div
//         className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
//         aria-hidden="true"
//       >
//         <svg
//           width="1360"
//           height="578"
//           viewBox="0 0 1360 578"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient
//               x1="50%"
//               y1="0%"
//               x2="50%"
//               y2="100%"
//               id="illustration-01"
//             >
//               <stop stopColor="#FFF" offset="0%" />
//               <stop stopColor="#EAEAEA" offset="77.402%" />
//               <stop stopColor="#DFDFDF" offset="100%" />
//             </linearGradient>
//           </defs>
//           <g fill="url(#illustration-01)" fillRule="evenodd">
//             <circle cx="1232" cy="128" r="128" />
//             <circle cx="155" cy="443" r="64" />
//           </g>
//         </svg>
//       </div> */}
//       {/* <div
//         className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
//         aria-hidden="true"
//       > */}
//       {/* <div className="absolute  top-[20%] left-[1.25vh] md:top-[20%] md:right-10 md:left-auto z-10"> */}
//       {/* <div className="absolute top-[20%] left-[0%] md:top-[20%] md:right-10 md:left-auto"> */}
//       {/* <div className="h-[30vh] md:h-[60vh] absolute top-[20%] left-[1.25vh] md:top-[20%] md:right-10 md:left-auto"> */}
//       {/* <div className="absolute z-20 top-10 left-4 md:top-20 md:right-10 md:left-auto"> */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <div className="absolute top-[20%] left-[1.25vh] md:top-[20%] md:right-10 md:left-auto">
//           <svg
//             id="eZlVwhPziUQ1"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 659 719"
//             shapeRendering="geometricPrecision"
//             textRendering="geometricPrecision"
//             height="60vh"
//           >
//             <defs>
//               <linearGradient
//                 id="eZlVwhPziUQ2-fill"
//                 x1="329.5"
//                 y1="-20"
//                 x2="329.5"
//                 y2="739"
//                 spreadMethod="pad"
//                 gradientUnits="userSpaceOnUse"
//                 gradientTransform="translate(0 0)"
//               >
//                 <stop
//                   id="eZlVwhPziUQ2-fill-0"
//                   offset="0%"
//                   stopColor="#1f87e7"
//                 />
//                 <stop
//                   id="eZlVwhPziUQ2-fill-1"
//                   offset="69.7917%"
//                   stopColor="rgba(25,91,153,0.327394)"
//                 />
//                 <stop
//                   id="eZlVwhPziUQ2-fill-2"
//                   offset="79.1667%"
//                   stopColor="rgba(24,85,142,0.237044)"
//                 />
//                 <stop
//                   id="eZlVwhPziUQ2-fill-3"
//                   offset="96.875%"
//                   stopColor="rgba(22,74,122,0.0663823)"
//                 />
//                 <stop
//                   id="eZlVwhPziUQ2-fill-4"
//                   offset="99.97%"
//                   stopColor="rgba(27,107,181,0.568327)"
//                 />
//                 <stop
//                   id="eZlVwhPziUQ2-fill-5"
//                   offset="99.98%"
//                   stopColor="rgba(22,72,119,0.0364583)"
//                 />
//                 <stop
//                   id="eZlVwhPziUQ2-fill-6"
//                   offset="99.99%"
//                   stopColor="rgba(22,74,121,0.0572917)"
//                 />
//                 <stop
//                   id="eZlVwhPziUQ2-fill-7"
//                   offset="100%"
//                   stopColor="rgba(22,70,115,0)"
//                 />
//               </linearGradient>
//             </defs>
//             <path
//               d="M263.5,18.1051c40.841-23.57951,91.159-23.57951,132,0L592.157,131.645c40.841,23.579,66,67.156,66,114.315v227.08c0,47.159-25.159,90.736-66,114.315L395.5,700.895c-40.841,23.579-91.159,23.579-132,0L66.8433,587.355C26.0024,563.776,0.843353,520.199,0.843353,473.04v-227.08c0-47.159,25.159047-90.736,66.000047-114.315L263.5,18.1051Z"
//               fill="url(#eZlVwhPziUQ2-fill)"
//             />
//             <rect
//               mix-blend-mode="overlay"
//               width="295"
//               height="60"
//               rx="30"
//               ry="30"
//               transform="translate(182 329.499846)"
//               fillOpacity="0.3"
//               strokeWidth="0"
//             />
//           </svg>
//         </div>
//       </div>
//       {/* <div className="z-30 max-w-6xl mx-auto px-4 sm:px-6"> */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
//         {/* <div className="absolute z-30 top-1/4 left-1/5 transform -translate-x-1/2 max-w-6xl mx-auto px-4 sm:px-6"> */}
//         {/* Hero content */}
//         {/* <div className="pt-32 pb-12 md:pt-60 md:pb-20"> */}
//         <div className="pt-48 md:pt-60 md:pb-20">
//           {/* Section header */}
//           {/* <div className=" pb-12 md:pb-16"> */}
//           <div className="md:pb-8">
//             <h1
//               className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-5"
//               data-aos="zoom-y-out"
//             >
//               Building the carbon economy
//             </h1>
//             <div className="max-w-3xl mo mt-10">
//               <p
//                 className="text-xl font-extrabold text-white mb-8"
//                 data-aos="zoom-y-out"
//                 data-aos-delay="150"
//               >
//                 By employing existing cashback marketing, Carbonblocks
//                 seamlessly allocates a portion of everyday transactions to help
//                 businesses achieve their net-zero emissions targets while
//                 empowering consumers to take meaningful action against climate
//                 change.
//               </p>
//               <div className="mt-6 mb-6 text-center">
//                 <p className="text-xl font-bold text-white mb-4">
//                   Click on the brands to shop - a portion of sales will go to
//                   carbon credits
//                 </p>
//                 <div className="flex flex-wrap justify-between items-start space-x-4 space-y-2 mx-auto w-3/4">
//                   <a
//                     href="https://c.klarna.com/al/9S1v/"
//                     className="text-white hover:underline font-bold"
//                   >
//                     Bloomingdale's
//                   </a>
//                   <a
//                     href="https://c.klarna.com/al/9QHo/"
//                     className="text-white hover:underline font-bold"
//                   >
//                     CVS
//                   </a>
//                   <a
//                     href="https://c.klarna.com/al/9S23/"
//                     className="text-white hover:underline font-bold"
//                   >
//                     Neiman Marcus
//                   </a>
//                   <a
//                     href="https://c.klarna.com/al/9S27/"
//                     className="text-white hover:underline font-bold"
//                   >
//                     Revolve
//                   </a>
//                   <div className="flex flex-col">
//                     <a
//                       href="https://www.veneffect.com/"
//                       className="text-white hover:underline font-bold"
//                     >
//                       Ven Effect
//                     </a>
//                     <div className="text-xs text-white">
//                       <p className="mb-1">Checkout code: CLIMATE20</p>
//                       <p className="m-0">*only applies to specific products</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
//                 data-aos="zoom-y-out"
//                 data-aos-delay="300"
//               >
//                 <SignUp />

//                 {/* <div>
//                   <a
//                     className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
//                     href="#0"
//                   >
//                     Start free trial
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
//                     href="#0"
//                   >
//                     Learn more
//                   </a>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import styled from "styled-components";
import SearchableList from "./SearchableList"; // The search component we discussed previously
import SignUp from "./SignUp";

const Container = styled.div`
  background-color: #1f252d;
  min-height: 100vh;
  color: white;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #35363b;
  padding-right: 25%;
  @media (max-width: 700px) {
    padding-right: 0;
  }
`;
const Placeholder = styled.div`
  width: 1px;
  min-height: 40px;

  @media (max-width: 700px) {
    min-height: 30px;
  }
`;
const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
`;

const JoinWaitlistButton = styled.button`
  background-color: #2979ff;
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 0.3em;
  cursor: pointer;
  &:hover {
    background-color: #5393ff;
  }
`;

const Main = styled.main`
  display: flex; // Use flexbox to center children
  justify-content: center; // Horizontally center the content
  flex-direction: column; // Stack children vertically
  align-items: center; // Center-align children horizontally
  // align-items: center; // Vertically center the content
  margin-top: 2rem;
  padding: 1rem;
  text-align: center; // Ensure text is centered within the SectionTitle
`;

const SectionTitle = styled.h2`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 3rem;

  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

const handleJoinClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  window.location.href = "#2";
};

const App = () => {
  return (
    <Container>
      <Header>
        {/* <Title>CarbonBlocks</Title> */}
        <Placeholder /> {/* This will push the button to the right */}
        {/* <JoinWaitlistButton onClick={handleJoinClick}>Join</JoinWaitlistButton> */}
      </Header>

      <Main>
        <SectionTitle>
          Action Dollars Towards the Climate <br /> by Shopping the Links Below
        </SectionTitle>
        <SearchableList
          brands={[
            {
              "Company Name": "Revolve",
              Link: "https://c.klarna.com/al/9S27/",
            },
            {
              "Company Name": "Net-A-Porter",
              Link: "https://c.klarna.com/al/A0bV/",
            },
            {
              "Company Name": "Neiman Marcus",
              Link: "https://c.klarna.com/al/9S23/",
            },
            {
              "Company Name": "Sephora",
              Link: "https://c.klarna.com/al/A0a4/",
            },
            {
              "Company Name": "Farfetch",
              Link: "https://c.klarna.com/al/A0b8/",
            },
            {
              "Company Name": "Bergdorf Goodman",
              Link: "https://c.klarna.com/al/A0ad/",
            },
            {
              "Company Name": "Net-A-Porter",
              Link: "https://c.klarna.com/al/A0bV/",
            },
            {
              "Company Name": "Neiman Marcus",
              Link: "https://c.klarna.com/al/9S23/",
            },
            {
              "Company Name": "Anine Bing",
              Link: "https://c.klarna.com/al/A0Hj/",
            },
            {
              "Company Name": "Reformation",
              Link: "https://c.klarna.com/al/A0a1/",
            },
            {
              "Company Name": "Shopbop",
              Link: "https://c.klarna.com/al/A0a9/",
            },
            { "Company Name": "SSENSE", Link: "https://c.klarna.com/al/9zmP/" },
            {
              "Company Name": "Selfridges",
              Link: "https://c.klarna.com/al/9zmM/",
            },
            {
              "Company Name": "Mytheresa",
              Link: "https://c.klarna.com/al/9zmF/",
            },
            {
              "Company Name": "The Outnet",
              Link: "https://c.klarna.com/al/9zmT/",
            },
            {
              "Company Name": "Space NK",
              Link: "https://c.klarna.com/al/A0bZ/",
            },
            {
              "Company Name": "L'AGENCE",
              Link: "https://c.klarna.com/al/A0bz/",
            },
            { "Company Name": "Levi's", Link: "https://c.klarna.com/al/A0c3/" },
            { "Company Name": "Maje", Link: "https://c.klarna.com/al/A0c5/" },
            {
              "Company Name": "For Love & Lemons",
              Link: "https://c.klarna.com/al/A0bq/",
            },
            { "Company Name": "Frame", Link: "https://c.klarna.com/al/A0bt/" },
            {
              "Company Name": "Giorgio Armani Beauty",
              Link: "https://c.klarna.com/al/A0bu/",
            },
            {
              "Company Name": "Giuseppe Zanotti",
              Link: "https://c.klarna.com/al/A0bv/",
            },
            {
              "Company Name": "J. Crew",
              Link: "https://c.klarna.com/al/A0bx/",
            },
            {
              "Company Name": "The Honest Company",
              Link: "https://www.honest.com/home",
            },
            {
              "Company Name": "T.J. Maxx",
              Link: "https://c.klarna.com/al/A0ca/",
            },
            {
              "Company Name": "Bloomingdale's",
              Link: "https://c.klarna.com/al/9S1v/",
            },
            {
              "Company Name": "Kiehl's",
              Link: "https://c.klarna.com/al/A0Zv/",
            },
            {
              "Company Name": "Parachute Home",
              Link: "https://c.klarna.com/al/A0cG/",
            },
            {
              "Company Name": "Superga",
              Link: "https://c.klarna.com/al/A0Vt/",
            },
            {
              "Company Name": "Canada Goose",
              Link: "https://c.klarna.com/al/A0al/",
            },
            {
              "Company Name": "Browns Fashion",
              Link: "https://c.klarna.com/al/A0I4/",
            },
            {
              "Company Name": "Paula's Choice",
              Link: "https://c.klarna.com/al/A0cI/",
            },
            {
              "Company Name": "Stuart Weitzman",
              Link: "https://c.klarna.com/al/A0Zh/",
            },
            {
              "Company Name": "Mario Badescu",
              Link: "https://c.klarna.com/al/A0Uq/",
            },
            {
              "Company Name": "MATCHES",
              Link: "https://c.klarna.com/al/A0Ur/",
            },
            {
              "Company Name": "Adanola",
              Link: "https://c.klarna.com/al/9Rzo/",
            },
            { "Company Name": "24S", Link: "https://c.klarna.com/al/A0aN/" },
            {
              "Company Name": "Urban Outfitters",
              Link: "https://c.klarna.com/al/A0W1/",
            },
            { "Company Name": "Mejuri", Link: "https://c.klarna.com/al/9zcU/" },
            {
              "Company Name": "Solid & Striped",
              Link: "https://c.klarna.com/al/A0Vr/",
            },
            {
              "Company Name": "Steve Madden",
              Link: "https://c.klarna.com/al/A0Vs/",
            },
            {
              "Company Name": "Swedish Stocings",
              Link: "https://c.klarna.com/al/9zmS/",
            },
            {
              "Company Name": "Harvey Nichols",
              Link: "https://c.klarna.com/al/9zcM/",
            },
            {
              "Company Name": "All Saints",
              Link: "https://c.klarna.com/al/A06z/",
            },
            {
              "Company Name": "Charlotte Tilbury",
              Link: "https://c.klarna.com/al/9z1N/",
            },
            {
              "Company Name": "Luisaviaroma",
              Link: "https://c.klarna.com/al/A0Uo/",
            },
            {
              "Company Name": "Fenty Beauty",
              Link: "https://c.klarna.com/al/9zCP/",
            },
            {
              "Company Name": "Rachel Comey",
              Link: "https://c.klarna.com/al/A0Vn/",
            },
            { "Company Name": "Theory", Link: "https://c.klarna.com/al/A0Vx/" },
            {
              "Company Name": "Harrods",
              Link: "https://c.klarna.com/al/9zCl/",
            },
            {
              "Company Name": "Guna Ana",
              Link: "https://c.klarna.com/al/9z1A/",
            },
            {
              "Company Name": "Qure Skincare",
              Link: "https://c.klarna.com/al/9z1B/",
            },
            { "Company Name": "Ignae", Link: "https://c.klarna.com/al/9z1C/" },
            {
              "Company Name": "Beauty Pie",
              Link: "https://c.klarna.com/al/9z1E/",
            },
            {
              "Company Name": "Charles & Keith",
              Link: "https://c.klarna.com/al/9z1F/",
            },
            {
              "Company Name": "davines",
              Link: "https://c.klarna.com/al/9z1G/",
            },
            {
              "Company Name": "Francis Stories",
              Link: "https://c.klarna.com/al/9z1H/",
            },
            {
              "Company Name": "Clarins",
              Link: "https://c.klarna.com/al/9z1I/",
            },
            {
              "Company Name": "Hush & Hush",
              Link: "https://c.klarna.com/al/9z1J/",
            },
            { "Company Name": "Jins", Link: "https://c.klarna.com/al/9z1K/" },
            {
              "Company Name": "Pamela Love",
              Link: "https://c.klarna.com/al/9z1L/",
            },
            { "Company Name": "Babor", Link: "https://c.klarna.com/al/9z1M/" },
            { "Company Name": "COS US", Link: "https://c.klarna.com/al/9zC0/" },
            {
              "Company Name": "Dé Rococo",
              Link: "https://c.klarna.com/al/9zC3/",
            },
            { "Company Name": "Edblad", Link: "https://c.klarna.com/al/9zC7/" },
            {
              "Company Name": "Emmamalena",
              Link: "https://c.klarna.com/al/9zC9/",
            },
            {
              "Company Name": "Ennui Atelier",
              Link: "https://c.klarna.com/al/9zCA/",
            },
            {
              "Company Name": "FitFlop",
              Link: "https://c.klarna.com/al/9zCU/",
            },
            {
              "Company Name": "Flattered",
              Link: "https://c.klarna.com/al/9zCi/",
            },
            { "Company Name": "Goelia", Link: "https://c.klarna.com/al/9zCk/" },
            {
              "Company Name": "Ivy Oak",
              Link: "https://c.klarna.com/al/9zcN/",
            },
            {
              "Company Name": "Lola Rose",
              Link: "https://c.klarna.com/al/9zcO/",
            },
            { "Company Name": "MCM", Link: "https://c.klarna.com/al/9zcP/" },
            {
              "Company Name": "ME + EM",
              Link: "https://c.klarna.com/al/9zcR/",
            },
            {
              "Company Name": "Missoma",
              Link: "https://c.klarna.com/al/9zcV/",
            },
            { "Company Name": "Monki", Link: "https://c.klarna.com/al/9zcX/" },
            { "Company Name": "Nootka", Link: "https://c.klarna.com/al/9zmG/" },
            {
              "Company Name": "Ole Henriksen",
              Link: "https://c.klarna.com/al/9zmH/",
            },
            {
              "Company Name": "& Other Stories",
              Link: "https://c.klarna.com/al/7rh0/",
            },
            {
              "Company Name": "Percival",
              Link: "https://c.klarna.com/al/9zmJ/",
            },
            {
              "Company Name": "Residus",
              Link: "https://c.klarna.com/al/9zmK/",
            },
            {
              "Company Name": "Rodebjer",
              Link: "https://c.klarna.com/al/9zmL/",
            },
            {
              "Company Name": "Sif Jakobs Jewellery",
              Link: "https://c.klarna.com/al/9zmN/",
            },
            {
              "Company Name": "Little Liffner",
              Link: "https://c.klarna.com/al/9zmU/",
            },
            {
              "Company Name": "Longchamp",
              Link: "https://c.klarna.com/al/9zmX/",
            },
            {
              "Company Name": "BloomChic",
              Link: "https://c.klarna.com/al/9QHm/",
            },
            {
              "Company Name": "Ferragamo",
              Link: "https://c.klarna.com/al/9zma/",
            },
            {
              "Company Name": "italist",
              Link: "https://c.klarna.com/al/9zmp/",
            },
            {
              "Company Name": "Alexander McQueen",
              Link: "https://c.klarna.com/al/A06w/",
            },
            {
              "Company Name": "Alexandre Birman",
              Link: "https://c.klarna.com/al/A06x/",
            },
            {
              "Company Name": "Alloy Apparel",
              Link: "https://c.klarna.com/al/A06y/",
            },
            {
              "Company Name": "Altuzarra",
              Link: "https://c.klarna.com/al/A070/",
            },
            {
              "Company Name": "AndLight",
              Link: "https://c.klarna.com/al/A071/",
            },
            { "Company Name": "Arket", Link: "https://c.klarna.com/al/A0Hl/" },
            {
              "Company Name": "Aroma360",
              Link: "https://c.klarna.com/al/A0Hn/",
            },
            {
              "Company Name": "Bearaby",
              Link: "https://c.klarna.com/al/A0Ho/",
            },
            { "Company Name": "Bebe", Link: "https://c.klarna.com/al/A0Hr/" },
            {
              "Company Name": "Betabrand",
              Link: "https://c.klarna.com/al/A0Ht/",
            },
            {
              "Company Name": "Betsey Johnson",
              Link: "https://c.klarna.com/al/A0Hu/",
            },
            {
              "Company Name": "BlankNYC",
              Link: "https://c.klarna.com/al/A0Hv/",
            },
            { "Company Name": "Bower Swimwear", Link: "Pending - HP is down" },
            {
              "Company Name": "Charlotte Stone",
              Link: "https://c.klarna.com/al/A0I6/",
            },
            {
              "Company Name": "Cover FX",
              Link: "https://c.klarna.com/al/A0I9/",
            },
            { "Company Name": "Cupshe", Link: "https://c.klarna.com/al/A0IB/" },
            { "Company Name": "CVS", Link: "https://c.klarna.com/al/9QHo/" },
            {
              "Company Name": "DeMillier",
              Link: "https://c.klarna.com/al/A0IH/",
            },
            {
              "Company Name": "Dolce Vita",
              Link: "https://c.klarna.com/al/A0II/",
            },
            {
              "Company Name": "Dynamite Clothing",
              Link: "https://c.klarna.com/al/A0IJ/",
            },
            {
              "Company Name": "eCosmetics",
              Link: "https://c.klarna.com/al/A0IL/",
            },
            {
              "Company Name": "E.L.V Denim",
              Link: "https://c.klarna.com/al/A0IM/",
            },
            {
              "Company Name": "FaceGym",
              Link: "https://c.klarna.com/al/A0IP/",
            },
            { "Company Name": "Frye", Link: "https://c.klarna.com/al/A0IQ/" },
            {
              "Company Name": "Garage Clothing",
              Link: "https://c.klarna.com/al/A0IR/",
            },
            {
              "Company Name": "GlassesUSA",
              Link: "https://c.klarna.com/al/A0IS/",
            },
            {
              "Company Name": "Hardtail Forever",
              Link: "https://c.klarna.com/al/A0IT/",
            },
            { "Company Name": "Hobbs", Link: "https://c.klarna.com/al/A0IU/" },
            { "Company Name": "Hurley", Link: "https://c.klarna.com/al/A0IV/" },
            {
              "Company Name": "Inspire Me! Home Decor",
              Link: "https://c.klarna.com/al/A0IW/",
            },
            {
              "Company Name": "Junk Food Clothing",
              Link: "https://c.klarna.com/al/A0IY/",
            },
            {
              "Company Name": "Justice",
              Link: "https://c.klarna.com/al/A0IZ/",
            },
            {
              "Company Name": "Karen Kane",
              Link: "https://c.klarna.com/al/A0Ie/",
            },
            {
              "Company Name": "Kenneth Cole",
              Link: "https://c.klarna.com/al/A0Ib/",
            },
            {
              "Company Name": "Kurt Geiger",
              Link: "https://c.klarna.com/al/A0If/",
            },
            {
              "Company Name": "KVD Beauty",
              Link: "https://c.klarna.com/al/A0Ig/",
            },
            {
              "Company Name": "Laura Geller",
              Link: "https://www.laurageller.com/",
            },
            {
              "Company Name": "London Sock Company",
              Link: "https://c.klarna.com/al/A0Ii/",
            },
            {
              "Company Name": "Magnolia",
              Link: "https://c.klarna.com/al/A0Up/",
            },
            { "Company Name": "MNML", Link: "https://c.klarna.com/al/A0Uv/" },
            {
              "Company Name": "ModCloth",
              Link: "https://c.klarna.com/al/A0Uy/",
            },
            {
              "Company Name": "Molimenti",
              Link: "https://c.klarna.com/al/A0V5/",
            },
            {
              "Company Name": "Monica Vinader",
              Link: "https://c.klarna.com/al/A0Vf/",
            },
            {
              "Company Name": "Mulberry",
              Link: "https://c.klarna.com/al/A0Vg/",
            },
            {
              "Company Name": "Orlebar Brown",
              Link: "https://c.klarna.com/al/A0Vi/",
            },
            {
              "Company Name": "Parfums Christian Dior",
              Link: "https://c.klarna.com/al/A0Vk/",
            },
            {
              "Company Name": "Phase Eight",
              Link: "https://c.klarna.com/al/A0Vl/",
            },
            { "Company Name": "REISS", Link: "https://c.klarna.com/al/A0Vo/" },
            { "Company Name": "Shashi", Link: "https://c.klarna.com/al/A0Vp/" },
            { "Company Name": "Showpo", Link: "https://c.klarna.com/al/A0Vq/" },
            {
              "Company Name": "The Body Shop",
              Link: "https://c.klarna.com/al/A0Vu/",
            },
            {
              "Company Name": "Universal Standard",
              Link: "https://c.klarna.com/al/A0Vz/",
            },
            {
              "Company Name": "Casadei",
              Link: "https://c.klarna.com/al/A0ZB/",
            },
            {
              "Company Name": "Coccinelle",
              Link: "https://c.klarna.com/al/A0ZD/",
            },
            {
              "Company Name": "Columbia",
              Link: "https://c.klarna.com/al/A0ZG/",
            },
            {
              "Company Name": "FRANBROS",
              Link: "https://c.klarna.com/al/A0ZL/",
            },
            {
              "Company Name": "Rucoline",
              Link: "https://c.klarna.com/al/A0ZQ/",
            },
            {
              "Company Name": "Scarosso",
              Link: "https://c.klarna.com/al/A0ZW/",
            },
            {
              "Company Name": "Chico's",
              Link: "https://c.klarna.com/al/A0Zj/",
            },
            { "Company Name": "Crocs", Link: "https://c.klarna.com/al/A0Zo/" },
            {
              "Company Name": "Gymshark",
              Link: "https://c.klarna.com/al/A0Zq/",
            },
            {
              "Company Name": "Ninety Percent",
              Link: "https://c.klarna.com/al/A0Zz/",
            },
            { "Company Name": "SOMA", Link: "https://c.klarna.com/al/A0aB/" },
            {
              "Company Name": "Stutterheim",
              Link: "https://c.klarna.com/al/A0aD/",
            },
            {
              "Company Name": "Bronzallure",
              Link: "https://c.klarna.com/al/A0aH/",
            },
            {
              "Company Name": "Etrusca Gioielli",
              Link: "https://c.klarna.com/al/A0aI/",
            },
            {
              "Company Name": "MONNALISA",
              Link: "https://c.klarna.com/al/A0aM/",
            },
            {
              "Company Name": "Almada Label",
              Link: "https://c.klarna.com/al/A0aV/",
            },
            {
              "Company Name": "Astrid Miyu",
              Link: "https://c.klarna.com/al/A0aZ/",
            },
            {
              "Company Name": "Capezio",
              Link: "https://c.klarna.com/al/A0ao/",
            },
            {
              "Company Name": "Converse",
              Link: "https://c.klarna.com/al/A0as/",
            },
            {
              "Company Name": "Cult Beauty",
              Link: "https://c.klarna.com/al/A0aw/",
            },
            {
              "Company Name": "Holland Cooper",
              Link: "https://c.klarna.com/al/A0bI/",
            },
            {
              "Company Name": "House of Dagmar",
              Link: "https://c.klarna.com/al/A0bJ/",
            },
            {
              "Company Name": "Karen Millen",
              Link: "https://c.klarna.com/al/A0bM/",
            },
            {
              "Company Name": "Mamaladen",
              Link: "https://c.klarna.com/al/A0bO/",
            },
            {
              "Company Name": "Pretty Little Thing",
              Link: "https://c.klarna.com/al/A0bW/",
            },
            { "Company Name": "Armani", Link: "https://c.klarna.com/al/A0bd/" },
            { "Company Name": "Baobab", Link: "https://c.klarna.com/al/A0bg/" },
            {
              "Company Name": "Dolce & Gabbana",
              Link: "https://c.klarna.com/al/A0bm/",
            },
            {
              "Company Name": "e.l.f. Cosmetics",
              Link: "https://c.klarna.com/al/A0bo/",
            },
            {
              "Company Name": "Lancome",
              Link: "https://c.klarna.com/al/A0c1/",
            },
            {
              "Company Name": "Miu Miu",
              Link: "https://c.klarna.com/al/A0c7/",
            },
            {
              "Company Name": "Moon Juice",
              Link: "https://c.klarna.com/al/A0c9/",
            },
            {
              "Company Name": "Mr. Porter",
              Link: "https://c.klarna.com/al/A0cC/",
            },
            {
              "Company Name": "Nasty Gal",
              Link: "https://c.klarna.com/al/A0cE/",
            },
            {
              "Company Name": "Paul Smith",
              Link: "https://c.klarna.com/al/A0cK/",
            },
            {
              "Company Name": "Peter Thomas Roth",
              Link: "https://c.klarna.com/al/A0cL/",
            },
            { "Company Name": "Prada", Link: "https://c.klarna.com/al/A0cN/" },
            {
              "Company Name": "Quay Australia",
              Link: "https://c.klarna.com/al/A0cP/",
            },
            { "Company Name": "Rains", Link: "https://c.klarna.com/al/A0cT/" },
            {
              "Company Name": "Rituals",
              Link: "https://c.klarna.com/al/A0cQ/",
            },
            { "Company Name": "Rixo", Link: "https://c.klarna.com/al/A0cU/" },
            {
              "Company Name": "Stella McCartney",
              Link: "https://c.klarna.com/al/A0cV/",
            },
            {
              "Company Name": "Alexander Wang",
              Link: "https://c.klarna.com/al/A0cb/",
            },
            {
              "Company Name": "Ashley Homestore",
              Link: "https://c.klarna.com/al/A0cd/",
            },
            {
              "Company Name": "Foot Locker",
              Link: "https://c.klarna.com/al/A0cf/",
            },
            { "Company Name": "H&M", Link: "https://c.klarna.com/al/A0ci/" },
            { "Company Name": "Mango", Link: "https://c.klarna.com/al/A0ck/" },
            { "Company Name": "Macy's", Link: "https://c.klarna.com/al/A0cl/" },
            {
              "Company Name": "Princess Polly",
              Link: "https://c.klarna.com/al/A0cm/",
            },
            {
              "Company Name": "Sofa.com",
              Link: "https://c.klarna.com/al/A0cn/",
            },
          ]}
        />
        <p className="text-xl font-bold text-white mb-2 mt-12 text-center">
          Sign up to learn more as we build to save our planet
        </p>
        <SignUp />
      </Main>
    </Container>
  );
};

export default App;
