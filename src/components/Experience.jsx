import React from "react";

import html from "./../assets/html.png";
import css from "./../assets/css.png";
import react from "./../assets/react.png";
import py from "./../assets/py.png";
import java from "./../assets/java.png";
import tailwindcss from "./../assets/tailwindCss.png";
import git from "./../assets/github.png";
import js from "./../assets/js.png";
import c from "./../assets/c++.png";
import django from "./../assets/django.jpg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      category: "Structure",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      category: "Styling",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      category: "Programming",
    },
    {
      id: 4,
      src: react,
      title: "React",
      category: "Frontend",
    },
    {
      id: 5,
      src: tailwindcss,
      title: "Tailwind CSS",
      category: "Styling",
    },
    {
      id: 6,
      src: py,
      title: "Python",
      category: "Programming",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      category: "Programming",
    },
    {
      id: 8,
      src: django,
      title: "Django",
      category: "Backend",
    },
    {
      id: 9,
      src: git,
      title: "GitHub",
      category: "Development",
    },
    {
      id: 10,
      src: c,
      title: "C++",
      category: "Programming",
    },
  ];

  return (
    <section
      id="skills"
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
          bottom-[5%]
          right-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-blue-500/5
          blur-[150px]
        "
      />

      {/* Grid background */}
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
      {/* MAIN CONTENT */}
      {/* ============================= */}

      <div
        className="
          relative
          z-10

          max-w-[1200px]
          mx-auto

          px-6
          sm:px-8
          lg:px-12
        "
      >
        {/* ============================= */}
        {/* HEADER */}
        {/* ============================= */}

        <div className="mb-16 lg:mb-20">
          {/* Small badge */}

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
              Technologies I Work With
            </span>
          </div>

          {/* Heading */}

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
            My{" "}
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
              Tech Stack.
            </span>
          </h2>

          {/* Description */}

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
            These are some of the technologies, programming languages, and
            development tools I use to build modern, responsive, and
            interactive web applications.
          </p>

          {/* Accent line */}

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
        {/* TECHNOLOGY GRID */}
        {/* ============================= */}

        <div
          className="
            grid

            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5

            gap-4
            sm:gap-5
            lg:gap-6
          "
        >
          {techs.map(({ id, src, title, category }) => (
            <div
              key={id}
              className="
                group
                relative

                flex
                flex-col
                items-center
                justify-center

                min-h-[190px]
                sm:min-h-[210px]

                px-5
                py-7

                overflow-hidden

                rounded-[18px]

                border
                border-[#273444]

                bg-[#111923]/90

                shadow-[0_15px_35px_rgba(0,0,0,0.15)]

                hover:border-cyan-400/40

                hover:-translate-y-2

                hover:shadow-[0_20px_45px_rgba(0,0,0,0.30)]

                transition-all
                duration-300
              "
            >
              {/* ============================= */}
              {/* TOP HOVER LINE */}
              {/* ============================= */}

              <div
                className="
                  absolute

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
              {/* HOVER GLOW */}
              {/* ============================= */}

              <div
                className="
                  absolute

                  top-[30px]
                  left-1/2

                  -translate-x-1/2

                  w-[100px]
                  h-[100px]

                  rounded-full

                  bg-cyan-400/0

                  blur-[45px]

                  group-hover:bg-cyan-400/10

                  transition-all
                  duration-500
                "
              />

              {/* ============================= */}
              {/* ICON CONTAINER */}
              {/* ============================= */}

              <div
                className="
                  relative

                  flex
                  items-center
                  justify-center

                  w-[88px]
                  h-[88px]

                  mb-5

                  rounded-2xl

                  border
                  border-[#2a394a]

                  bg-[#151d27]

                  group-hover:border-cyan-400/30

                  group-hover:bg-[#172331]

                  group-hover:shadow-[0_10px_35px_rgba(0,180,255,0.08)]

                  transition-all
                  duration-300
                "
              >
                <img
                  src={src}
                  alt={title}
                  className="
                    w-[55px]
                    h-[55px]

                    object-contain

                    transition-all
                    duration-300

                    group-hover:scale-110
                  "
                />
              </div>

              {/* ============================= */}
              {/* TITLE */}
              {/* ============================= */}

              <h3
                className="
                  relative

                  text-[15px]
                  sm:text-[16px]

                  font-semibold

                  text-white

                  group-hover:text-cyan-300

                  transition-colors
                  duration-300
                "
              >
                {title}
              </h3>

              {/* ============================= */}
              {/* CATEGORY */}
              {/* ============================= */}

              <p
                className="
                  relative

                  mt-2

                  text-[10px]
                  sm:text-[11px]

                  uppercase

                  tracking-[1.5px]

                  text-[#596983]
                "
              >
                {category}
              </p>

              {/* ============================= */}
              {/* CARD NUMBER */}
              {/* ============================= */}

              <span
                className="
                  absolute

                  top-4
                  right-4

                  text-[9px]

                  tracking-[1px]

                  text-[#3e4d63]

                  group-hover:text-[#5f7897]

                  transition-colors
                "
              >
                {String(id).padStart(2, "0")}
              </span>

              {/* ============================= */}
              {/* BOTTOM GLOW */}
              {/* ============================= */}

              <div
                className="
                  absolute

                  bottom-[-70px]
                  left-1/2

                  -translate-x-1/2

                  w-[150px]
                  h-[100px]

                  rounded-full

                  bg-blue-500/0

                  blur-[60px]

                  group-hover:bg-blue-500/5

                  transition-all
                  duration-500
                "
              />
            </div>
          ))}
        </div>

        {/* ============================= */}
        {/* BOTTOM INFO */}
        {/* ============================= */}

        <div
          className="
            mt-14

            flex
            flex-col
            md:flex-row

            items-start
            md:items-center

            justify-between

            gap-6

            px-6
            py-5

            rounded-2xl

            border
            border-[#273444]

            bg-[#121a24]/70

            backdrop-blur-sm
          "
        >
          <div>
            <p
              className="
                text-[14px]
                sm:text-[15px]

                font-medium

                text-white
              "
            >
              Always learning new technologies.
            </p>

            <p
              className="
                mt-1

                text-[12px]
                sm:text-[13px]

                text-[#687790]
              "
            >
              I continuously expand my stack to build better and more
              efficient applications.
            </p>
          </div>

          <a
            href="#portfolio"
            className="
              group

              inline-flex
              items-center
              gap-2

              px-5
              py-3

              whitespace-nowrap

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
            Explore My Projects

            <span
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;