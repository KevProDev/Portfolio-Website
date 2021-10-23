import Head from "next/head";
import { MenuIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Kevin Johnson Jr</title>
      </Head>
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <img src="/logo-bookmark.svg" alt="" />
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li className="cursor-pointer">About </li>
            <li className="cursor-pointer">Work </li>
            <li className="cursor-pointer">Youtube </li>
            <button className="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">
              Contact
            </button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <MenuIcon className="h-8" />
          </div>
        </nav>
      </header>
      {/* Hero */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-5xl text-center lg:text-left mb-2">
              Kevin Johnson Jr
            </h2>
            <h3 className="text-bookmark-blue text-xl md:text-2xl text-center lg:text-left mb-6">
              Frontend Web Developer
            </h3>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              React is where I spend my time coding, but I'm always open to
              learn new technologies
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button
                type="button"
                className="btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Projects
              </button>
              <button
                type="button"
                className="btn btn-white hover:bg-bookmark-purple hover:text-white"
              >
                More about me
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center flex-1 md:mb-16 lg:mb-0 z-10">
            <img
              className="w5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="/hero-bg.png"
              alt="desktop screen with code"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">
            Recent Work
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            Helping ideas come into the world one line of code at a time below.
          </p>
        </div>
        {/* Project #1 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="/illustration-features-tab-1.png"
                alt="project one"
              />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                Know what meals are the best
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                See what meals your friends enjoy from resturants all over the
                city in one central place. Share your favorite meals to help
                another person make a descision.
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                Foodairy Website
              </button>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div className="hidden lg:block overflow-hidden rounded-r-full bg-bookmark-purple absolute h-80 w-2/4 -bottom-24 lg:-left-36  "></div>
        </div>
      </section>
    </div>
  );
}
