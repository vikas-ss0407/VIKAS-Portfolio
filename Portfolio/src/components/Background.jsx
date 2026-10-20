const Background = () => {
  return (
    <div 
      className="fixed inset-0 w-screen h-screen overflow-hidden select-none pointer-events-none"
      style={{ zIndex: 0, backgroundColor: "#020617" }}
    >
      {/* Subtle background ambient glows to keep text highly readable */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-emerald-500 rounded-full opacity-[0.05] blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-teal-500 rounded-full opacity-[0.05] blur-[120px]" />

      {/* SVG ORBITAL ENGINE CONTAINER */}
      <div className="absolute left-1/2 -translate-x-1/2 sm:-right-28 sm:left-auto sm:translate-x-0 top-1/2 -translate-y-1/2 w-[520px] h-80 sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px] opacity-75">
        <svg
          className="w-full h-full"
          viewBox="0 0 602 602"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute' }}
        >
          {/* TRACK GEOMETRY NETTING */}
          <g opacity="0.8" filter="url(#trackGlow)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
              stroke="url(#paint0_radial)"
              id="path_0"
            />
            <path
              d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
              stroke="url(#paint1_radial)"
              id="path_1"
            />
            <path
              d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
              stroke="url(#paint2_radial)"
              id="path_2"
            />
          </g>

          {/* ACTIVE ANIMATED LIGHT ORBITS (Nodes + Comet Tails) */}
          {/* Node 1 - Emerald Trail on Path 2 */}
          <ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="2" ry="2" fill="#10b981">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_2" xlinkHref="#path_2" />
            </animateMotion>
          </ellipse>
          <path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint3_linear)" strokeWidth="1.5">
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_2" xlinkHref="#path_2" />
            </animateMotion>
          </path>

          {/* Node 2 - Teal Trail on Path 2 (Delayed Offset) */}
          <ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="2" ry="2" fill="#14b8a6">
            <animateMotion dur="6s" begin="1.5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_2" xlinkHref="#path_2" />
            </animateMotion>
          </ellipse>
          <path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint7_linear)" strokeWidth="1.5">
            <animateMotion dur="6s" begin="1.5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_2" xlinkHref="#path_2" />
            </animateMotion>
          </path>

          {/* Node 3 - Cyan Comet on Path 0 */}
          <ellipse cx="476.525" cy="363.313" rx="2" ry="2" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#06b6d4">
            <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_0" xlinkHref="#path_0" />
            </animateMotion>
          </ellipse>
          <path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint4_linear)" strokeWidth="1.5">
            <animateMotion dur="11s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_0" xlinkHref="#path_0" />
            </animateMotion>
          </path>

          {/* Node 4 - Emerald Fast Comet on Path 0 */}
          <ellipse cx="382.164" cy="155.029" rx="2" ry="2" transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)" fill="#10b981">
            <animateMotion dur="7s" begin="1s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_0" xlinkHref="#path_0" />
            </animateMotion>
          </ellipse>
          <path d="M381.81 154.669L356.057 128.885" transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)" stroke="url(#paint5_linear)" strokeWidth="1.5">
            <animateMotion dur="7s" begin="1s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_0" xlinkHref="#path_0" />
            </animateMotion>
          </path>

          {/* Node 5 - Teal Return Tracker on Path 1 */}
          <ellipse cx="333.324" cy="382.691" rx="2" ry="2" transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)" fill="#14b8a6">
            <animateMotion dur="5s" begin="0s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_1" xlinkHref="#path_1" />
            </animateMotion>
          </ellipse>
          <path d="M333.667 382.335L359.42 356.551" transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)" stroke="url(#paint6_linear)" strokeWidth="1.5">
            <animateMotion dur="5s" begin="0s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_1" xlinkHref="#path_1" />
            </animateMotion>
          </path>

          {/* Node 6 - Cyan Long Loop Tracker on Path 0 */}
          <ellipse cx="476.525" cy="363.313" rx="2" ry="2" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#06b6d4">
            <animateMotion dur="14s" begin="3.5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_0" xlinkHref="#path_0" />
            </animateMotion>
          </ellipse>
          <path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint11_linear)" strokeWidth="1.5">
            <animateMotion dur="14s" begin="3.5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#path_0" xlinkHref="#path_0" />
            </animateMotion>
          </path>

          {/* COLOR ENGINE GRADIENTS & GLOW FILTER */}
          <defs>
            <filter id="trackGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)">
              <stop offset="0.2" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="1" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)">
              <stop offset="0.2" stopColor="#14b8a6" stopOpacity="0.3" />
              <stop offset="1" stopColor="#020617" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)">
              <stop offset="0.2" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="1" stopColor="#020617" stopOpacity="0" />
            </radialGradient>

            {/* Linear Gradient Tail Vectors */}
            <linearGradient id="paint3_linear" x1="295.043" y1="193.116" x2="269.975" y2="218.154" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" stopOpacity="0.8"/>
              <stop offset="1" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint4_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" stopOpacity="0.8"/>
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint5_linear" x1="382.168" y1="155.027" x2="357.1" y2="129.989" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" stopOpacity="0.8"/>
              <stop offset="1" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint6_linear" x1="333.309" y1="382.693" x2="358.376" y2="357.655" gradientUnits="userSpaceOnUse">
              <stop stopColor="#14b8a6" stopOpacity="0.8"/>
              <stop offset="1" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint7_linear" x1="165.54" y1="93.9578" x2="140.472" y2="118.996" gradientUnits="userSpaceOnUse">
              <stop stopColor="#14b8a6" stopOpacity="0.8"/>
              <stop offset="1" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint11_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" stopOpacity="0.8"/>
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Background;
