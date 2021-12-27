import Head from "next/head";
import { MenuIcon } from "@heroicons/react/solid";
import { ContactMe } from "../components/ContactMe";

export default function Home() {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Kevin Johnson Jr</title>
      </Head>
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            {/* <img src="/logo-bookmark.svg" alt="" /> */}
            <h1 className="font-bold text-3xl">KEVIN JOHNSON</h1>
          </div>
        </nav>
      </header>
      {/* Hero */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-5xl text-center lg:text-left mb-2">
              Creating A Better Future and Loving It!
            </h2>
            <h3 className="text-bookmark-blue text-xl md:text-2xl text-center lg:text-left mb-6">
              Frontend Web Developer
            </h3>
            <div className="flex justify-center flex-wrap gap-6">
              <a href="#projects">
                <button
                  type="button"
                  className="btn btn-purple hover:bg-bookmark-white hover:text-black"
                >
                  Projects
                </button>
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center flex-1 lg:mb-0 z-10">
            <img
              className="w5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="/hero-bg.png"
              alt="desktop screen with code"
            />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="bg-bookmark-purple py-10 md:py-20 mt-20 lg:mt-60">
        <div className="max-w-3xl mx-auto container text-bookmark-white text-center">
          <h3 className="text-xl md:text-2xl text-left md:text-center mb-6 font-semibold">
            Hey I'm Kevin, How's it going?
          </h3>
          <p className="text-md md:text-2xl text-left md:text-center ">
            Hi, I’m Kevin and I'm looking for a team that allows me to
            perpetually get out of my comfort zone. The ReactJs and NextJs is
            where I spend bulk of my time learning, but I’m always excited to
            learn new technologies.
          </p>
        </div>
      </section>
      {/* Features */}
      <section className="bg-bookmark-white py-10 md:py-20">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 id="projects" className="text-3xl text-center text-bookmark-blue">
            Recent Work
          </h1>
          {/* <p className="text-center text-bookmark-grey mt-4">
            Helping ideas come into the world one line of code at a time below.
          </p> */}
        </div>
        {/* Project #1 */}
        <div className="relative mt-10 lg:mt-24">
          <div className="container flex flex-col lg:flex-row place-items-start md:items-center justify-center gap-x-24">
            {/* Image */}
            <div className="flex flex-col-reverse flex-1 justify-center text-left md:text-center z-10 mb-10 lg:mb-0">
              <h3 className="text-bookmark-blue lg:text-white text-xl md:text-2xl mt-4">
                FoodBuddy
              </h3>
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="/illustration-features-tab-1.png"
                alt="project one"
              />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col place-items-start md:items-center lg:items-start text-left md:text-center">
              <h1 className="text-3xl text-bookmark-blue text-left">
                <span className="font-bold text-left md:text-center">
                  Know{" "}
                </span>
                What To Have Eating Out
              </h1>
              <p className="text-bookmark-grey my-4 text-left md:text-center lg:text-left md:w-3/4 lg:w-full">
                As living in Chicago we have a large amount of diverse
                restaurants, when trying out a new restaurants for the first
                time you don’t have a clue what a meal may taste like based on
                the menu sometimes.
                <br />
                <br />
                {`So I created a website where people can review and recommend the
                best meals from past restaurants they have been too. This was
                built using React, Tailwind for the Frontend. NextJs for speed
                and Backend. MySQL is the database hosted on Planetscale &
                Vercel. This will allow small restaurants to get discovered
                naturally`}
              </p>
              <div className="flex justify-center flex-wrap gap-6">
                <a
                  href="https://github.com/KevProDev/Portfolio-Website/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="btn btn-purple hover:bg-bookmark-white hover:text-black"
                  >
                    FoodBuddy Website
                  </button>
                </a>
                <a href="https://www.meallocker.com" target="_blank">
                  <button
                    type="button"
                    className="btn btn-white hover:bg-bookmark-purple hover:text-white"
                  >
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Rounded Rectangle */}
          <div className="hidden lg:block overflow-hidden rounded-r-full bg-bookmark-purple absolute h-80 w-2/4 -bottom-24 lg:-left-36  "></div>
        </div>
      </section>
      {/* Features */}
      <section className="bg-bookmark-white pt-10 pb-40">
        {/* Heading */}

        {/* Project #1 */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row-reverse place-items-start md:items-center justify-center gap-x-24 z-10">
            {/* Image */}
            <div className="flex flex-col-reverse flex-1 justify-center text-left md:text-center z-10 mb-10 lg:mb-0">
              <h3 className="text-bookmark-blue text-xl md:text-2xl lg:text-white mt-4 lg:pl-10">
                Amazon Frontend Clone
              </h3>
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="/illustration-features-tab-1.png"
                alt="project one"
              />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col place-items-start md:items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                <span className="font-bold">Amazon </span>Frontend Clone
              </h1>
              <p className="text-bookmark-grey my-4 text-left md:text-center lg:text-left md:w-3/4 lg:w-full">
                Building this project help me learn how to use React to make
                repeatable ui elements also use redux for state management.
                <br />
                <br />
                Tailwind was use for to write css along with firebase of choice
                for user authentaction. NextJs played a big part in user
                experence by having pages load quickly because of server side
                rendering. Feel free to check it out
              </p>
              <div className="flex justify-center flex-wrap gap-6">
                <a href="https://amazon-react-clone-57t49neih-kevprodev.vercel.app">
                  <button
                    type="button"
                    className="btn btn-purple hover:bg-bookmark-white hover:text-black"
                  >
                    Amazon Clone Website
                  </button>
                </a>
                <a
                  href="https://github.com/KevProDev/Amazon-React-Clone-1"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="btn btn-white hover:bg-bookmark-purple hover:text-white"
                  >
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Rounded Rectangle */}
          <div className="hidden lg:block overflow-hidden rounded-l-full bg-bookmark-purple absolute h-80 w-2/4 -bottom-24 lg:-right-36 z-0"></div>
        </div>
      </section>
      {/* Contact */}
      <section className="bg-bookmark-purple py-20">
        {/* Heading */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-white">
            Feel Free To Contact Me
          </h1>
          <p className="text-white text-2xl text-center">
            I would love to talk!
          </p>
        </div>
        {/* Project #1 */}
        <div className="relative container mx-auto mt-5 lg:mt-10">
          <div className=" max-w-md mx-auto px-5 py-5 rounded-md bg-white">
            <ContactMe />
          </div>
        </div>
      </section>
    </div>
  );
}
