import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <svg
        width="50"
        height="50"
        viewBox="0 0 2000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="1000" cy="1000" r="1000" fill="#1F87E7" />
        <g filter="url(#filter0_d_1340_2)">
          <path
            d="M900.5 239.946C962.071 204.398 1037.93 204.398 1099.5 239.946L1608.48 533.804C1670.05 569.352 1707.98 635.047 1707.98 706.143V1293.86C1707.98 1364.95 1670.05 1430.65 1608.48 1466.2L1099.5 1760.05C1037.93 1795.6 962.071 1795.6 900.5 1760.05L391.524 1466.2C329.953 1430.65 292.024 1364.95 292.024 1293.86V706.143C292.024 635.047 329.953 569.352 391.524 533.804L900.5 239.946Z"
            fill="black"
          />
        </g>
        <rect
          x="630"
          y="965"
          width="737.5"
          height="150"
          rx="75"
          fill="#1F87E7"
        />
        <defs>
          <filter
            id="filter0_d_1340_2"
            x="288.024"
            y="213.286"
            width="1423.95"
            height="1581.43"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1340_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1340_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </Link>
  );
}
