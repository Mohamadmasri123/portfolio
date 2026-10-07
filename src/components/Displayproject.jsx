import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiMonitor,
  FiCode,
  FiVideo,
  FiPlayCircle,
} from "react-icons/fi";

import projectVideo from "../assets/projectVideo.mp4";

const DisplayProject = () => {
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

      {/* Grid */}

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
          {/* Logo */}

          <Link
            to="/"
            className="
              flex
              items-center
              gap-3

              group
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

          {/* Back */}

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
      {/* MAIN */}
      {/* ============================= */}

      <main
        className="
          relative
          z-10

          max-w-[1180px]
          mx-auto

          px-6
          sm:px-8
          lg:px-12

          py-16
          lg:py-20
        "
      >
        {/* ============================= */}
        {/* PAGE HEADER */}
        {/* ============================= */}

        <div className="mb-12">
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
              Project Showcase
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
            Project{" "}
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
              Demo.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-5

              max-w-[700px]

              text-[15px]
              sm:text-[16px]

              leading-[1.8]

              text-[#71809b]
            "
          >
            Explore this project through a complete video demonstration
            showcasing the interface, functionality, and overall user
            experience.
          </p>

          {/* Accent */}

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
        {/* PROJECT CARD */}
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
          "
        >
          {/* top accent */}

          <div
            className="
              absolute
              z-20

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

              -top-[120px]
              -right-[100px]

              w-[300px]
              h-[300px]

              rounded-full

              bg-blue-500/5

              blur-[100px]

              pointer-events-none
            "
          />

          {/* ============================= */}
          {/* VIDEO HEADER */}
          {/* ============================= */}

          <div
            className="
              relative
              z-10

              flex
              flex-col
              sm:flex-row

              sm:items-center

              justify-between

              gap-5

              p-6
              sm:p-7

              border-b
              border-[#253243]
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  items-center
                  justify-center

                  min-w-[50px]
                  h-[50px]

                  rounded-xl

                  border
                  border-cyan-400/20

                  bg-gradient-to-br
                  from-cyan-500/10
                  to-blue-500/10
                "
              >
                <FiMonitor size={21} className="text-cyan-400" />
              </div>

              <div>
                <h2
                  className="
                    text-[17px]
                    sm:text-[19px]

                    font-semibold
                    text-white
                  "
                >
                  Website Project Demo
                </h2>

                <p
                  className="
                    mt-1

                    text-[11px]
                    sm:text-[12px]

                    text-[#65748d]
                  "
                >
                  Frontend Architecture & User Experience
                </p>
              </div>
            </div>

            {/* Status */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                w-fit

                px-3
                py-2

                rounded-lg

                border
                border-green-400/15

                bg-green-500/5

                text-[11px]
                text-green-400
              "
            >
              <span
                className="
                  w-[7px]
                  h-[7px]

                  rounded-full

                  bg-green-400

                  shadow-[0_0_10px_rgba(74,222,128,0.7)]
                "
              />

              Demo Available
            </div>
          </div>

          {/* ============================= */}
          {/* VIDEO */}
          {/* ============================= */}

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div
              className="
                relative

                w-full
                aspect-video

                overflow-hidden

                rounded-[18px]

                border
                border-[#2b394b]

                bg-black

                shadow-[0_25px_60px_rgba(0,0,0,0.4)]
              "
            >
              <video
                className="
                  w-full
                  h-full

                  object-cover
                "
                controls
                muted
                playsInline
              >
                <source src={projectVideo} type="video/mp4" />

                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* ============================= */}
          {/* DETAILS */}
          {/* ============================= */}

          <div
            className="
              grid

              grid-cols-1
              md:grid-cols-3

              gap-4

              px-4
              sm:px-6
              lg:px-8

              pb-8
            "
          >
            {/* Video Demo */}

            <InfoCard
              icon={<FiVideo size={18} />}
              title="Video Demo"
              description="Watch the complete project walkthrough."
            />

            {/* Development */}

            <InfoCard
              icon={<FiCode size={18} />}
              title="Development"
              description="Developed with modern frontend technologies."
            />

            {/* Showcase */}

            <InfoCard
              icon={<FiPlayCircle size={18} />}
              title="Project Showcase"
              description="Explore the interface and functionality."
            />
          </div>
        </div>

        {/* ============================= */}
        {/* BOTTOM CARD */}
        {/* ============================= */}

        <div
          className="
            mt-10

            flex
            flex-col
            sm:flex-row

            items-start
            sm:items-center

            justify-between

            gap-5

            p-5
            sm:p-6

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

                font-medium

                text-white
              "
            >
              Want to see more projects?
            </p>

            <p
              className="
                mt-1

                text-[12px]

                text-[#65748d]
              "
            >
              Explore more of my recent web development work.
            </p>
          </div>

          <Link
            to="/"
            className="
              group

              inline-flex
              items-center
              gap-2

              px-5
              py-3

              rounded-lg

              bg-gradient-to-r
              from-cyan-500
              to-blue-500

              text-[12px]
              sm:text-[13px]

              font-medium

              text-white

              shadow-[0_8px_25px_rgba(0,149,255,0.18)]

              hover:-translate-y-[1px]

              hover:shadow-[0_12px_30px_rgba(0,149,255,0.28)]

              transition-all
              duration-300
            "
          >
            <FiArrowLeft
              size={15}
              className="
                transition-transform
                duration-300

                group-hover:-translate-x-1
              "
            />

            Back to Projects
          </Link>
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
/* INFO CARD */
/* ============================= */

const InfoCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        group

        flex
        items-start
        gap-4

        p-5

        rounded-xl

        border
        border-[#273444]

        bg-[#151d27]/70

        hover:border-cyan-400/30

        hover:bg-[#17212d]/80

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
          h-[42px]

          rounded-lg

          bg-cyan-500/10

          text-cyan-400

          group-hover:bg-cyan-500/15

          transition-all
          duration-300
        "
      >
        {icon}
      </div>

      <div>
        <p
          className="
            text-[13px]

            font-medium

            text-white
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1

            text-[11px]

            leading-5

            text-[#65748d]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default DisplayProject;