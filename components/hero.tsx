"use client";
import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import SignUp from "./SignUp";
//#35363B
export default function Hero() {
  return (
    <section className="relative bg-[#1F252D]">
      {/* Illustration behind hero content */}
      {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}
      {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      > */}
      {/* <div className="absolute top-[20%] left-[1.25vh] md:top-[20%] md:right-10 md:left-auto"> */}
      <div className="absolute top-[15%] left-[5%] md:top-[20%] md:right-10 md:left-auto">
        <svg
          id="eZlVwhPziUQ1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 659 719"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          height="60vh"
        >
          <defs>
            <linearGradient
              id="eZlVwhPziUQ2-fill"
              x1="329.5"
              y1="-20"
              x2="329.5"
              y2="739"
              spreadMethod="pad"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0 0)"
            >
              <stop id="eZlVwhPziUQ2-fill-0" offset="0%" stopColor="#1f87e7" />
              <stop
                id="eZlVwhPziUQ2-fill-1"
                offset="69.7917%"
                stopColor="rgba(25,91,153,0.327394)"
              />
              <stop
                id="eZlVwhPziUQ2-fill-2"
                offset="79.1667%"
                stopColor="rgba(24,85,142,0.237044)"
              />
              <stop
                id="eZlVwhPziUQ2-fill-3"
                offset="96.875%"
                stopColor="rgba(22,74,122,0.0663823)"
              />
              <stop
                id="eZlVwhPziUQ2-fill-4"
                offset="99.97%"
                stopColor="rgba(27,107,181,0.568327)"
              />
              <stop
                id="eZlVwhPziUQ2-fill-5"
                offset="99.98%"
                stopColor="rgba(22,72,119,0.0364583)"
              />
              <stop
                id="eZlVwhPziUQ2-fill-6"
                offset="99.99%"
                stopColor="rgba(22,74,121,0.0572917)"
              />
              <stop
                id="eZlVwhPziUQ2-fill-7"
                offset="100%"
                stopColor="rgba(22,70,115,0)"
              />
            </linearGradient>
          </defs>
          <path
            d="M263.5,18.1051c40.841-23.57951,91.159-23.57951,132,0L592.157,131.645c40.841,23.579,66,67.156,66,114.315v227.08c0,47.159-25.159,90.736-66,114.315L395.5,700.895c-40.841,23.579-91.159,23.579-132,0L66.8433,587.355C26.0024,563.776,0.843353,520.199,0.843353,473.04v-227.08c0-47.159,25.159047-90.736,66.000047-114.315L263.5,18.1051Z"
            fill="url(#eZlVwhPziUQ2-fill)"
          />
          <rect
            mix-blend-mode="overlay"
            width="295"
            height="60"
            rx="30"
            ry="30"
            transform="translate(182 329.499846)"
            fillOpacity="0.3"
            strokeWidth="0"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        {/* <div className="pt-32 pb-12 md:pt-60 md:pb-20"> */}
        <div className="pt-48 md:pt-60 md:pb-20">
          {/* Section header */}
          {/* <div className=" pb-12 md:pb-16"> */}
          <div className="md:pb-8">
            <h1
              className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-5"
              data-aos="zoom-y-out"
            >
              Building the carbon economy
            </h1>
            <div className="max-w-3xl mo mt-10">
              <p
                className="text-xl font-extrabold text-white mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                By employing existing cashback marketing, Carbon Blocks
                seamlessly allocates a portion of everyday transactions to help
                businesses achieve their net-zero emissions targets while
                empowering consumers to take meaningful action against climate
                change.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <SignUp />
                {/* <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
