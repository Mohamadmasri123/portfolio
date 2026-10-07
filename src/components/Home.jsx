import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiCpu, FiLayers } from "react-icons/fi";
import avatarCoder from "./../assets/ai-avatar-programmer.png";

const Home = () => {
  return (
    <section
      id="home"
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
      "
    >
      {/* Background effects */}
      <div className="absolute top-[12%] left-[-120px] w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-[5%] right-[-120px] w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div
        className="
          absolute inset-0 opacity-[0.025]
          bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      <div
        className="
          relative z-10 max-w-[1280px] mx-auto min-h-screen
          flex flex-col-reverse lg:flex-row
          items-center justify-center
          gap-14 lg:gap-20
          px-6 sm:px-10 lg:px-16
          pt-28 pb-16 lg:py-24
        "
      >
        {/* ========================= */}
        {/* LEFT CONTENT */}
        {/* ========================= */}
        <div className="w-full lg:w-[52%]">
          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2 mb-6 rounded-full
              border border-[#273444]
              bg-[#151d27]/80
              text-[12px] sm:text-[13px]
              tracking-[1px] uppercase text-[#8b9ab5]
            "
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            Full Stack Developer
          </div>

          <h1
            className="
              text-[44px] sm:text-[58px] lg:text-[68px] xl:text-[76px]
              leading-[1.02] font-bold tracking-[-2px] text-white
            "
          >
            I'm a Full Stack
            <span
              className="
                block mt-2 text-transparent bg-clip-text
                bg-gradient-to-r from-cyan-400 via-[#2d9cff] to-blue-500
              "
            >
              Developer.
            </span>
          </h1>

          <p
            className="
              mt-7 max-w-[620px]
              text-[15px] sm:text-[16px] lg:text-[17px]
              leading-[1.9] text-[#8290aa]
            "
          >
            Motivated and detail-oriented Full Stack Developer with over 2
            years of experience in web development. Skilled in building
            responsive and interactive web applications using JavaScript,
            React, Python, and Django.
          </p>

          <p
            className="
              mt-3 max-w-[620px]
              text-[15px] sm:text-[16px]
              leading-[1.9] text-[#65738d]
            "
          >
            Passionate about solving complex problems, building clean digital
            experiences, continuously learning new technologies, and
            contributing to impactful development teams.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#portfolio"
              className="
                group inline-flex items-center gap-2
                px-7 py-3.5 rounded-lg
                bg-gradient-to-r from-cyan-500 to-blue-500
                text-white font-medium
                shadow-[0_10px_30px_rgba(0,149,255,0.22)]
                hover:shadow-[0_15px_40px_rgba(0,149,255,0.35)]
                hover:-translate-y-[2px]
                transition-all duration-300
              "
            >
              View Portfolio
              <MdOutlineKeyboardArrowRight
                size={24}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#experience"
              className="
                inline-flex items-center
                px-7 py-3.5 rounded-lg
                border border-[#334154]
                bg-[#151d27]/70 text-[#a5b2c8]
                hover:text-white hover:border-[#4f9cff]/60 hover:bg-[#1b2634]
                transition-all duration-300
              "
            >
              My Experience
            </a>
          </div>

          <div className="mt-12">
            <p className="mb-4 text-[11px] uppercase tracking-[3px] text-[#526078]">
              Technologies I Work With
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "JavaScript",
                "Python",
                "Django",
                "Tailwind CSS",
                "Next.js",
              ].map((technology) => (
                <span
                  key={technology}
                  className="
                    px-4 py-2 rounded-md
                    bg-[#151d27] border border-[#273444]
                    text-[12px] text-[#8b9ab5]
                    hover:border-cyan-400/40 hover:text-cyan-300
                    transition-all duration-300
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* RIGHT IMAGE SECTION */}
        {/* ========================= */}
        <div
          className="
            relative w-full lg:w-[48%]
            flex justify-center lg:justify-end
          "
        >
          {/* Main glow */}
          <div
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[340px] h-[450px]
              lg:w-[500px] lg:h-[600px]
              rounded-full bg-blue-500/10 blur-[90px]
            "
          />

          {/* Code badge behind */}
          <div
            className="
              absolute
              left-[-8px]
              bottom-[140px]
              hidden lg:flex
              items-center
              justify-center
              w-[82px]
              h-[82px]
              rounded-[20px]
              border border-cyan-400/20
              bg-[#101925]/85
              backdrop-blur-lg
              shadow-[0_18px_45px_rgba(0,0,0,0.22)]
              z-0
            "
          >
            <span className="text-cyan-400 text-[30px] font-bold">
              {"</>"}
            </span>
          </div>

          {/* Decorative lines behind */}
          <div
            className="
              absolute
              right-[-26px]
              top-[48px]
              hidden lg:block
              w-[60px]
              h-[420px]
              rounded-r-[26px]
              border-t border-r border-b border-cyan-400/18
              z-0
            "
          />

          <div
            className="
              absolute
              right-[-48px]
              top-[82px]
              hidden lg:block
              w-[34px]
              h-[120px]
              rounded-r-[20px]
              border-t border-r border-b border-cyan-400/12
              z-0
            "
          />

          {/* Outer frame */}
          <div
            className="
              relative z-20
              w-full
              max-w-[390px] sm:max-w-[450px] lg:max-w-[520px]
              rounded-[34px]
              border border-[#2a394b]
              bg-[#0f1722]/80
              p-4
              shadow-[0_30px_70px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
            "
          >
            {/* Top badge */}
            <div
              className="
                absolute top-5 right-5 z-30
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                bg-[#0d141e]/88
                border border-white/10
                backdrop-blur-md
              "
            >
            
            </div>

            {/* Inner image box */}
            <div
              className="
                relative
                h-[500px] sm:h-[560px] lg:h-[650px]
                rounded-[28px]
                overflow-hidden
                border border-[#334154]
                bg-[#151d27]
              "
            >
              <img
                src={avatarCoder}
                alt="Cartoon developer avatar"
                className="
                  w-full h-full object-cover object-center
                  transition-transform duration-700
                  hover:scale-[1.03]
                "
              />

              {/* overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#0a1018]/75 via-[#0a1018]/10 to-transparent
                  pointer-events-none
                "
              />
            </div>

            {/* Bottom info card */}
            <div
              className="
                absolute left-1/2 -translate-x-1/2 bottom-6 z-30
                w-[calc(100%-40px)]
                flex items-center justify-between gap-3
                px-5 py-4
                rounded-2xl
                bg-[#0d141e]/88
                border border-white/10
                backdrop-blur-md
              "
            >
              <div>
                <p className="text-[14px] font-semibold text-white">
                  Mohamad Masri
                </p>
                <p className="text-[12px] text-[#7787a3] mt-1">
                  Full Stack Developer
                </p>
              </div>

              <div className="flex items-center gap-2 text-[12px] text-[#8b9ab5] whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                Available
              </div>
            </div>
          </div>

          {/* Extra floating card */}
          <div
            className="
              absolute
              hidden xl:flex
              right-[-18px]
              top-[110px]
              z-10
              items-center gap-3
              px-4 py-3
              rounded-xl
              bg-[#121b26]/95
              backdrop-blur-lg
              border border-[#2b394b]
              shadow-[0_15px_40px_rgba(0,0,0,0.25)]
            "
          >
            <div
              className="
                flex items-center justify-center
                w-10 h-10 rounded-lg
                bg-gradient-to-br from-cyan-500/20 to-blue-500/20
                border border-cyan-400/20
              "
            >
              <FiLayers className="text-cyan-400" size={16} />
            </div>

            <div>
              <p className="text-white text-[12px] font-medium">
                Creative Avatar
              </p>
              <p className="text-[#62718c] text-[10px] mt-1">
                Cartoon • Clean • Modern
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#experience"
        className="
          absolute hidden lg:flex
          left-1/2 bottom-7 -translate-x-1/2
          flex-col items-center gap-2
          text-[#506078]
          hover:text-cyan-400
          transition-colors duration-300
        "
      >
        <span className="text-[9px] tracking-[3px] uppercase">Scroll</span>
        <div className="w-[1px] h-[30px] bg-gradient-to-b from-cyan-400 to-transparent" />
      </a>
    </section>
  );
};

export default Home;