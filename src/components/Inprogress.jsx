import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiClock,
  FiCode,
  FiTool,
} from "react-icons/fi";

const InProgress = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden

        bg-gradient-to-br
        from-[#090e15]
        via-[#111821]
        to-[#1b2532]

        text-white

        selection:bg-cyan-500
        selection:text-white
      "
    >
      {/* ============================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ============================= */}

      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]

          w-[420px]
          h-[420px]

          rounded-full

          bg-cyan-500/5

          blur-[150px]

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-150px]
          right-[-120px]

          w-[480px]
          h-[480px]

          rounded-full

          bg-blue-500/7

          blur-[160px]

          pointer-events-none
        "
      />

      {/* Subtle grid */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.02]

          pointer-events-none

          bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]

          bg-[size:50px_50px]
        "
      />

      {/* ============================= */}
      {/* NAVBAR */}
      {/* ============================= */}

      <header
        className="
          relative
          z-20

          w-full

          border-b
          border-[#243143]/80

          bg-[#0b1119]/75

          backdrop-blur-xl
        "
      >
        <div
          className="
            max-w-[1280px]
            mx-auto

            px-6
            sm:px-8
            lg:px-12

            h-[78px]

            flex
            items-center
            justify-between
          "
        >
          {/* Brand */}

          <Link
            to="/"
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                items-center
                justify-center

                w-10
                h-10

                rounded-xl

                border
                border-cyan-400/20

                bg-gradient-to-br
                from-cyan-500/10
                to-blue-500/10
              "
            >
              <span className="text-cyan-400 font-bold text-lg">
                M
              </span>
            </div>

            <div className="hidden sm:block">
              <p className="text-[14px] font-semibold text-white">
                Mohamad Masri
              </p>

              <p
                className="
                  text-[10px]
                  tracking-[1.5px]
                  uppercase
                  text-[#607089]
                "
              >
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* Back button */}

          <Link
            to="/portfolio"
            className="
              group

              inline-flex
              items-center
              gap-2

              px-4
              py-2.5

              rounded-lg

              border
              border-[#314055]

              bg-[#111923]/80

              text-[12px]
              sm:text-[13px]

              text-[#9aa9c0]

              hover:text-white
              hover:border-cyan-400/40
              hover:bg-[#17222f]

              transition-all
              duration-300
            "
          >
            <FiArrowLeft
              size={16}
              className="
                transition-transform
                duration-300

                group-hover:-translate-x-1
              "
            />

            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* ============================= */}
      {/* MAIN CONTENT */}
      {/* ============================= */}

      <main
        className="
          relative
          z-10

          min-h-[calc(100vh-150px)]

          flex
          items-center
          justify-center

          max-w-[1050px]
          mx-auto

          px-6
          sm:px-8
          lg:px-12

          py-16
        "
      >
        <div className="w-full">
          {/* ============================= */}
          {/* HEADER */}
          {/* ============================= */}

          <div className="text-center mb-12">
            {/* Badge */}

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
                Coming Soon
              </span>
            </div>

            {/* Title */}

            <h1
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
              Project in{" "}
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
                Progress.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-5

                max-w-[650px]
                mx-auto

                text-[15px]
                sm:text-[16px]

                leading-[1.8]

                text-[#71809b]
              "
            >
              This project is currently under development. I'm working on the
              final features, improvements, and user experience before making
              it available.
            </p>

            {/* Accent line */}

            <div
              className="
                mt-6
                mx-auto

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
          {/* MAIN CARD */}
          {/* ============================= */}

          <div
            className="
              relative

              overflow-hidden

              rounded-[24px]

              border
              border-[#273444]

              bg-[#111923]/90

              shadow-[0_25px_70px_rgba(0,0,0,0.30)]

              p-7
              sm:p-10
              lg:p-12
            "
          >
            {/* Top gradient line */}

            <div
              className="
                absolute
                top-0
                left-0

                w-full
                h-[2px]

                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-cyan-400
              "
            />

            {/* Glow */}

            <div
              className="
                absolute

                top-[-120px]
                left-1/2

                -translate-x-1/2

                w-[350px]
                h-[350px]

                rounded-full

                bg-blue-500/6

                blur-[110px]

                pointer-events-none
              "
            />

            <div
              className="
                relative
                z-10

                flex
                flex-col
                items-center

                text-center
              "
            >
              {/* ============================= */}
              {/* ANIMATED ICON */}
              {/* ============================= */}

              <div
                className="
                  relative

                  flex
                  items-center
                  justify-center

                  w-[130px]
                  h-[130px]

                  mb-8
                "
              >
                {/* Outer rotating circle */}

                <div
                  className="
                    absolute

                    w-[110px]
                    h-[110px]

                    rounded-full

                    border
                    border-cyan-400/15
                  "
                />

                {/* Spinning border */}

                <div
                  className="
                    absolute

                    w-[90px]
                    h-[90px]

                    rounded-full

                    border-[2px]
                    border-[#273444]
                    border-t-cyan-400
                    border-r-blue-500

                    animate-spin
                  "
                />

                {/* Glow */}

                <div
                  className="
                    absolute

                    w-[65px]
                    h-[65px]

                    rounded-full

                    bg-cyan-400/10

                    blur-xl
                  "
                />

                {/* Center */}

                <div
                  className="
                    relative

                    flex
                    items-center
                    justify-center

                    w-[60px]
                    h-[60px]

                    rounded-2xl

                    border
                    border-cyan-400/20

                    bg-gradient-to-br
                    from-cyan-500/10
                    to-blue-500/10

                    shadow-[0_0_30px_rgba(34,211,238,0.08)]
                  "
                >
                  <FiTool
                    size={25}
                    className="text-cyan-400"
                  />
                </div>
              </div>

              {/* Status */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  px-4
                  py-2

                  rounded-lg

                  border
                  border-orange-400/15

                  bg-orange-500/5

                  text-[11px]
                  font-medium

                  text-orange-400

                  mb-6
                "
              >
                <span
                  className="
                    w-[7px]
                    h-[7px]

                    rounded-full

                    bg-orange-400

                    animate-pulse

                    shadow-[0_0_10px_rgba(251,146,60,0.7)]
                  "
                />

                Development in Progress
              </div>

              <h2
                className="
                  text-[23px]
                  sm:text-[28px]

                  font-semibold

                  text-white
                "
              >
                Something great is being built.
              </h2>

              <p
                className="
                  mt-4

                  max-w-[550px]

                  text-[13px]
                  sm:text-[14px]

                  leading-[1.8]

                  text-[#6f7f99]
                "
              >
                I'm currently refining the project, improving functionality,
                polishing the interface, and preparing it for release.
              </p>

              {/* ============================= */}
              {/* STATUS CARDS */}
              {/* ============================= */}

              <div
                className="
                  w-full

                  grid
                  grid-cols-1
                  sm:grid-cols-3

                  gap-4

                  mt-9
                "
              >
                <StatusCard
                  icon={<FiCode size={18} />}
                  title="Development"
                  text="Currently building"
                />

                <StatusCard
                  icon={<FiTool size={18} />}
                  title="Improvements"
                  text="UI & functionality"
                />

                <StatusCard
                  icon={<FiClock size={18} />}
                  title="Release"
                  text="Coming soon"
                />
              </div>

              {/* ============================= */}
              {/* PROGRESS */}
              {/* ============================= */}

              <div
                className="
                  w-full

                  mt-8

                  p-5

                  rounded-xl

                  border
                  border-[#273444]

                  bg-[#151d27]/60
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between

                    mb-3
                  "
                >
                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[1.5px]

                      text-[#687892]
                    "
                  >
                    Project Status
                  </span>

                  <span
                    className="
                      text-[11px]
                      font-medium

                      text-cyan-400
                    "
                  >
                    In Progress
                  </span>
                </div>

                <div
                  className="
                    relative

                    w-full
                    h-[6px]

                    overflow-hidden

                    rounded-full

                    bg-[#202b39]
                  "
                >
                  <div
                    className="
                      absolute
                      top-0
                      left-0

                      w-[65%]
                      h-full

                      rounded-full

                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500

                      shadow-[0_0_12px_rgba(34,211,238,0.25)]
                    "
                  />
                </div>
              </div>

              {/* ============================= */}
              {/* BUTTON */}
              {/* ============================= */}

              <Link
                to="/"
                className="
                  group

                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  mt-9

                  px-6
                  py-3.5

                  rounded-lg

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500

                  text-[13px]
                  font-medium

                  text-white

                  shadow-[0_10px_30px_rgba(0,149,255,0.18)]

                  hover:-translate-y-[2px]

                  hover:shadow-[0_15px_35px_rgba(0,149,255,0.30)]

                  transition-all
                  duration-300
                "
              >
                <FiArrowLeft
                  size={16}
                  className="
                    transition-transform
                    duration-300

                    group-hover:-translate-x-1
                  "
                />

                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* ============================= */}
      {/* FOOTER */}
      {/* ============================= */}

      <footer
        className="
          relative
          z-10

          border-t
          border-[#202c3b]

          bg-[#0a1018]/70
        "
      >
        <div
          className="
            max-w-[1280px]
            mx-auto

            px-6
            py-6

            flex
            flex-col
            sm:flex-row

            items-center
            justify-between

            gap-3

            text-[10px]
            sm:text-[11px]

            text-[#536179]
          "
        >
          <p>
            © {new Date().getFullYear()} Mohamad Masri. All rights reserved.
          </p>

          <p className="text-[#445168]">
            Full Stack Developer Portfolio
          </p>
        </div>
      </footer>
    </section>
  );
};

/* ============================= */
/* STATUS CARD */
/* ============================= */

const StatusCard = ({ icon, title, text }) => {
  return (
    <div
      className="
        group

        flex
        sm:flex-col

        items-center
        sm:justify-center

        gap-4
        sm:gap-3

        p-4

        rounded-xl

        border
        border-[#273444]

        bg-[#151d27]/70

        hover:border-cyan-400/30

        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      <div
        className="
          flex
          items-center
          justify-center

          min-w-[42px]
          w-[42px]
          h-[42px]

          rounded-lg

          bg-cyan-500/10

          text-cyan-400
        "
      >
        {icon}
      </div>

      <div className="sm:text-center">
        <p
          className="
            text-[12px]
            font-medium

            text-white
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1

            text-[10px]

            text-[#61718b]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default InProgress;