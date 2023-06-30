import Link from "next/link";
import NavigationMobileMenu from "@/components/header/NavigationMobileMenu";

export const Header = () => (
  <header className="py-5 sm:py-8 bg-black">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <a aria-label="Home" href="/#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 430.000000 312.000000"
              preserveAspectRatio="xMidYMid meet"
              className="h-10"
            >
              <g
                transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)"
                fill="#FFFFFF"
                stroke="none"
              >
                <path d="M2325 2811 c-35 -15 -459 -268 -487 -291 l-28 -22 0 -1039 c0 -1155 6 -1062 -68 -1015 -43 28 -491 292 -607 359 -44 25 -90 55 -103 67 l-22 21 0 359 c0 197 3 366 7 376 7 18 116 91 330 219 73 44 147 88 163 99 l30 18 11 -31 c13 -36 39 -41 69 -11 17 17 20 33 20 119 0 55 -4 102 -8 105 -5 3 -44 -16 -88 -42 -461 -277 -593 -358 -614 -378 l-25 -24 0 -441 0 -441 26 -22 c14 -12 138 -89 275 -171 137 -81 269 -160 294 -175 125 -76 331 -190 353 -195 18 -5 31 -1 46 14 l21 21 0 1063 c0 1047 0 1064 20 1085 19 20 310 197 398 241 28 14 51 20 65 15 39 -12 491 -285 515 -311 l22 -24 0 -643 c0 -498 -3 -646 -12 -658 -16 -20 -602 -378 -620 -378 -4 0 -9 237 -10 527 l-3 527 -49 28 c-27 16 -51 27 -53 24 -7 -7 -3 -1289 3 -1296 7 -7 74 31 469 263 187 109 350 210 363 224 l22 24 0 715 0 715 -22 22 c-13 13 -102 69 -198 127 -96 57 -224 133 -284 168 -112 67 -173 84 -221 63z" />
              </g>
            </svg>
          </a>
          <div className="hidden md:flex md:gap-x-6 text-lg">
            <a
              className="inline-block rounded-lg py-1 px-2 text-white hover:bg-slate-100 hover:text-slate-900"
              href="/#services"
            >
              Services
            </a>
            <a
              className="inline-block rounded-lg py-1 px-2 text-white hover:bg-slate-100 hover:text-slate-900"
              href="/#team"
            >
              Team
            </a>
            <a
              className="inline-block rounded-lg py-1 px-2 text-white hover:bg-slate-100 hover:text-slate-900"
              href="/#mission"
            >
              Mission
            </a>
            <a
              className="inline-block rounded-lg py-1 px-2 text-white hover:bg-slate-100 hover:text-slate-900"
              href="/blog"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8">
          <Link
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-transparent text-[#f0b90c] border border-[#f0b90c] hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
            href="/contact-us"
          >
            <span>
              Get started <span className="hidden lg:inline">today</span>
            </span>
          </Link>
          <div className="-mr-1 md:hidden">
            <NavigationMobileMenu />
          </div>
        </div>
      </nav>
    </div>
  </header>
);
