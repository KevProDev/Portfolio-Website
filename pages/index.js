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
        <div className="container flex flex-col-reverse md:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-5xl text-center lg:text-left mb-6">
              Bring Ideas To Life
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              I fansacted with using code to bring ideas to life. Let move the
              world forward together
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
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="w5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="/hero-bg.png"
              alt="desktop screen with code"
            />
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden md:block overflow-hidden rounded-l-full bg-bookmark-purple absolute h-80 w-2/4"></div>
      </section>
    </div>
  );
}
