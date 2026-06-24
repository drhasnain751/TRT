import type { SVGProps } from "react";

export function TrtLogo({ className = "h-8 w-auto", ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer shield boundary */}
      <path
        d="M10 10 H190 V140 C190 190 100 230 100 230 C100 230 10 190 10 140 V10 Z"
        fill="black"
        stroke="#D6001C"
        strokeWidth="10"
      />
      
      {/* Subtle basketball lines in background */}
      <path
        d="M100 10 V230"
        stroke="#D6001C"
        strokeWidth="4"
        opacity="0.3"
      />
      <path
        d="M20 120 Q100 50 180 120"
        stroke="#D6001C"
        strokeWidth="4"
        opacity="0.3"
      />
      <path
        d="M20 120 Q100 190 180 120"
        stroke="#D6001C"
        strokeWidth="4"
        opacity="0.3"
      />

      {/* Red banner across shield */}
      <path
        d="M15 85 H185 V135 H15 Z"
        fill="#D6001C"
      />

      {/* Text Elements */}
      <text
        x="100"
        y="65"
        fill="white"
        fontSize="44"
        fontWeight="900"
        fontFamily="'Bebas Neue', sans-serif"
        textAnchor="middle"
        letterSpacing="2"
      >
        THE REAL
      </text>

      <text
        x="100"
        y="122"
        fill="white"
        fontSize="38"
        fontWeight="900"
        fontFamily="'Bebas Neue', sans-serif"
        textAnchor="middle"
        letterSpacing="3"
      >
        TORONTO
      </text>

      <text
        x="100"
        y="200"
        fill="white"
        fontSize="64"
        fontWeight="900"
        fontFamily="'Bebas Neue', sans-serif"
        textAnchor="middle"
        letterSpacing="4"
      >
        TRT
      </text>
    </svg>
  );
}
