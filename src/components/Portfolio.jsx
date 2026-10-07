import React from "react";

// Images
import sportwebsite from "./../assets/sportwebsite.png";
import watadwebsite from "./../assets/watadwebsite.png";

import gymgenius from "./../assets/project6.jpeg";
import kime from "./../assets/project2.jpeg";
import CarGame from "./../assets/project9.png";

import prjtravel from "./../assets/prj-travel.png";
import prjRestau from "./../assets/prj-Restau.png";
import prjfruit from "./../assets/prj-fruit.png";
import prjRealEstate from "./../assets/prj-RealEstate.jpeg";
import instahome from "./../assets/insta-home.png";

import prjgymm from "./../assets/prjgym.png";
import webhome from "./../assets/webhome.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Ecommerce Sport Website",
      src: sportwebsite,
      description:
        "An interactive e-commerce platform built for browsing, filtering, and purchasing sports equipment, apparel, and accessories, providing a seamless shopping experience.",
      tags: ["React", "Django"],
      path: "/displayproject",
      status: "Done",
    },

    {
      id: 2,
      name: "Website for Association Watad",
      src: watadwebsite,
      description:
        "A dynamic and responsive web platform designed for Association Watad to showcase community initiatives, events, news, and organizational resources.",
      tags: ["React", "Django"],
      path: "/displayprojecttwo",
      status: "Done",
    },

    {
      id: 3,
      name: "GYMGENESIS",
      src: gymgenius,
      description:
        "A comprehensive fitness platform that allows users to explore membership plans, book workout sessions, and engage with modern gym and training programs.",
      tags: ["React", "JS"],
      path: "https://gymgenesis.vercel.app/",
      status: "Done",
    },

    {
      id: 4,
      name: "Kime",
      src: kime,
      description:
        "A sleek, responsive web platform featuring interactive user interface elements and dynamic layouts to deliver an engaging digital experience.",
      tags: ["HTML", "CSS", "JS"],
      path: "https://kime-zeta.vercel.app/",
      status: "Done",
    },

    {
      id: 5,
      name: "Real Estate Website",
      src: webhome,
      description:
        "A comprehensive real estate web application built to browse, search, and manage property listings, offering an intuitive platform for buyers, sellers, and agents to connect.",
      tags: ["JS", "Tailwind"],
      path: "https://realestate-tau-eight.vercel.app/",
      status: "Done",
    },

    {
      id: 6,
      name: "Car Game",
      src: CarGame,
      description:
        "An interactive browser-based driving game featuring responsive controls, obstacle avoidance, and dynamic score tracking for an entertaining gameplay experience.",
      tags: ["HTML", "CSS", "JS"],
      path: "https://car-game-tau.vercel.app/",
      status: "Done",
    },

    {
      id: 7,
      name: "Travel Booking Platform",
      src: prjtravel,
      description:
        "A comprehensive travel web application that allows users to seamlessly search, compare, and book flights, accommodations, and vacation packages.",
      tags: ["React", "JS"],
      path: "https://travels-delta.vercel.app/",
      status: "Done",
    },

    {
      id: 8,
      name: "Gym Website",
      src: prjgymm,
      description:
        "A dynamic digital interface for a fitness center showcasing available equipment, workout classes, personal training options, and membership benefits.",
      tags: ["React", "Tailwind"],
      path: "https://gym-tan-xi.vercel.app/",
      status: "Done",
    },

    {
      id: 9,
      name: "Restaurant Website",
      src: prjRestau,
      description:
        "An engaging and responsive web application designed for dining establishments, featuring interactive menu browsing, online table reservations, and seamless customer order management.",
      tags: ["React", "JS"],
      path: "https://restaurant-seven-dusky.vercel.app/",
      status: "Done",
    },

    {
      id: 10,
      name: "Fruit Shop",
      src: prjfruit,
      description:
        "An intuitive e-commerce web application tailored for a fresh produce market, offering smooth product filtering, a dynamic shopping cart, and a streamlined checkout experience.",
      tags: ["React", "JS"],
      path: "https://ecommerce-fruits-iota.vercel.app/",
      status: "Done",
    },

    {
      id: 11,
      name: "Instagram Clone",
      src: instahome,
      description:
        "A feature-rich social media web application replicating key Instagram functionalities, allowing users to share posts, explore feeds, interact with content, and experience a modern UI layout.",
      tags: ["React", "JS"],
      path: "https://insta-clone-beta-three.vercel.app/",
      status: "In PROGRESS",
    },

    {
      id: 12,
      name: "Prj RealEstate",
      src: prjRealEstate,
      description:
        "A feature-rich web application designed for property listings, allowing users to browse, search, and explore real estate properties with a modern and intuitive user interface.",
      tags: ["React", "JS"],
      path: "/inprogress",
      status: "In PROGRESS",
    },
  ];

  return (
    <section
      id="portfolio"
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#090e15]
        via-[#111821]
        to-[#1b2532]
        text-white
        py-24
      "
    >
      {/* ============================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ============================= */}

      <div
        className="
          absolute
          top-[10%]
          left-[-150px]
          w-[400px]
          h-[400px]
          rounded-full
          bg-cyan-500/5
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-[10%]
          right-[-160px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-blue-500/5
          blur-[150px]
        "
      />

      {/* subtle grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.02]
          bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* ============================= */}
      {/* MAIN CONTAINER */}
      {/* ============================= */}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* ============================= */}
        {/* HEADER */}
        {/* ============================= */}

        <div className="mb-16 lg:mb-20">
          {/* small badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              mb-5
              rounded-full
              border
              border-[#273444]
              bg-[#151d27]/80
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_10px_rgba(34,211,238,0.8)]
              "
            />

            <span
              className="
                text-[11px]
                sm:text-[12px]
                uppercase
                tracking-[2px]
                text-[#8b9ab5]
              "
            >
              My Recent Work
            </span>
          </div>

          {/* title */}
          <h2
            className="
              text-[42px]
              sm:text-[52px]
              lg:text-[64px]
              font-bold
              leading-[1.05]
              tracking-[-1px]
              text-white
            "
          >
            Featured{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-400
                via-[#2d9cff]
                to-blue-500
              "
            >
              Projects.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-[650px]
              text-[15px]
              sm:text-[16px]
              leading-[1.8]
              text-[#71809b]
            "
          >
            A collection of projects I have built using modern web
            technologies, focusing on responsive design, functionality, and
            clean user experiences.
          </p>

          <div
            className="
              mt-6
              w-[90px]
              h-[3px]
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
            "
          />
        </div>

        {/* ============================= */}
        {/* PROJECT GRID */}
        {/* ============================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-7
            lg:gap-8
          "
        >
          {portfolios.map(
            ({
              id,
              name,
              src,
              description,
              tags,
              path,
              status,
            }) => {
              const isExternal = path.startsWith("http");

              return (
                <article
                  key={id}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    min-h-full
                    overflow-hidden

                    rounded-[20px]

                    border
                    border-[#273444]

                    bg-[#111923]/90

                    shadow-[0_15px_40px_rgba(0,0,0,0.18)]

                    hover:border-cyan-400/35
                    hover:-translate-y-2
                    hover:shadow-[0_25px_55px_rgba(0,0,0,0.30)]

                    transition-all
                    duration-300
                  "
                >
                  {/* top hover line */}
                  <div
                    className="
                      absolute
                      z-30
                      top-0
                      left-0
                      w-full
                      h-[2px]

                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500

                      scale-x-0
                      group-hover:scale-x-100

                      origin-left
                      transition-transform
                      duration-300
                    "
                  />

                  {/* ============================= */}
                  {/* PROJECT IMAGE */}
                  {/* ============================= */}

                  <div
                    className="
                      relative
                      aspect-video
                      overflow-hidden
                      bg-[#0d141d]
                    "
                  >
                    <img
                      src={src}
                      alt={name}
                      className="
                        w-full
                        h-full
                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-[1.07]
                      "
                    />

                    {/* image overlay */}
                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-[#0b1119]/90
                        via-transparent
                        to-transparent

                        opacity-70
                      "
                    />

                    {/* Project number */}
                    <div
                      className="
                        absolute
                        top-4
                        left-4

                        flex
                        items-center
                        justify-center

                        min-w-[38px]
                        h-[30px]

                        px-2

                        rounded-lg

                        border
                        border-white/10

                        bg-[#0b1119]/70

                        backdrop-blur-md

                        text-[11px]
                        font-medium
                        text-[#8b9ab5]
                      "
                    >
                      {String(id).padStart(2, "0")}
                    </div>

                    {/* Status on image */}
                    <div
                      className={`
                        absolute
                        top-4
                        right-4

                        flex
                        items-center
                        gap-2

                        px-3
                        py-1.5

                        rounded-full

                        backdrop-blur-md

                        border

                        text-[10px]
                        font-medium

                        ${
                          status === "Done"
                            ? "bg-green-500/10 border-green-400/20 text-green-400"
                            : "bg-orange-500/10 border-orange-400/20 text-orange-400"
                        }
                      `}
                    >
                      <span
                        className={`
                          w-[6px]
                          h-[6px]
                          rounded-full

                          ${
                            status === "Done"
                              ? "bg-green-400"
                              : "bg-orange-400"
                          }
                        `}
                      />

                      {status}
                    </div>
                  </div>

                  {/* ============================= */}
                  {/* CONTENT */}
                  {/* ============================= */}

                  <div
                    className="
                      flex
                      flex-col
                      flex-1
                      p-6
                    "
                  >
                    {/* Name */}
                    <h3
                      className="
                        text-[19px]
                        sm:text-[20px]
                        font-semibold
                        text-white

                        group-hover:text-cyan-300

                        transition-colors
                        duration-300
                      "
                    >
                      {name}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-3

                        flex-grow

                        text-[13px]
                        sm:text-[14px]

                        leading-[1.8]

                        text-[#77859e]
                      "
                    >
                      {description}
                    </p>

                    {/* ============================= */}
                    {/* TECHNOLOGIES */}
                    {/* ============================= */}

                    <div className="flex flex-wrap gap-2 mt-5">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="
                            px-3
                            py-1.5

                            rounded-md

                            border
                            border-[#2a394a]

                            bg-[#151d27]

                            text-[10px]
                            sm:text-[11px]
                            font-medium

                            text-[#8493ad]

                            transition-all
                            duration-300

                            group-hover:border-[#2d7faa]/40
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-[#263343] my-5" />

                    {/* ============================= */}
                    {/* BOTTOM */}
                    {/* ============================= */}

                    <div className="flex items-center gap-3">
                      <a
                        href={path}
                        target={isExternal ? "_blank" : "_self"}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="
                          group/button

                          flex
                          flex-1
                          items-center
                          justify-center
                          gap-2

                          min-h-[46px]

                          rounded-lg

                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-500

                          text-[13px]
                          font-medium
                          text-white

                          shadow-[0_8px_24px_rgba(0,149,255,0.15)]

                          hover:shadow-[0_12px_30px_rgba(0,149,255,0.30)]
                          hover:-translate-y-[1px]

                          active:translate-y-0

                          transition-all
                          duration-300
                        "
                      >
                        {status === "Done" ? "View Project" : "View Progress"}

                        <span
                          className="
                            text-lg
                            transition-transform
                            duration-300

                            group-hover/button:translate-x-1
                          "
                        >
                          →
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* subtle hover glow */}
                  <div
                    className="
                      pointer-events-none

                      absolute
                      -bottom-[100px]
                      -right-[100px]

                      w-[200px]
                      h-[200px]

                      rounded-full

                      bg-blue-500/0
                      blur-[70px]

                      group-hover:bg-blue-500/5

                      transition-all
                      duration-500
                    "
                  />
                </article>
              );
            }
          )}
        </div>

        {/* ============================= */}
        {/* BOTTOM SECTION */}
        {/* ============================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-5

            p-6

            rounded-2xl

            border
            border-[#273444]

            bg-[#121a24]/70

            backdrop-blur-sm
          "
        >
          <div>
            <p className="text-white font-medium text-[15px]">
              More projects are coming.
            </p>

            <p className="mt-1 text-[12px] sm:text-[13px] text-[#687790]">
              I continuously work on new ideas and improve my development
              skills.
            </p>
          </div>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2

              whitespace-nowrap

              px-5
              py-3

              rounded-lg

              border
              border-[#344458]

              text-[12px]
              sm:text-[13px]

              text-[#9aabc5]

              hover:text-white
              hover:border-cyan-400/40
              hover:bg-[#17222f]

              transition-all
              duration-300
            "
          >
            Let's Work Together
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;