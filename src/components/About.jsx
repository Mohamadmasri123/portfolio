import React from "react";

import freelancerLogo from "../assets/fre.png";
import capitalAcademyLogo from "../assets/capital.png";
import watad from "../assets/watad.png";

// New images
import piscine42 from "../assets/beirut.png";
import brightchamps from "../assets/brightchamps.png";
import verozone from "../assets/verozone.png";

const About = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer / Freelancer",
      company: "Freelancer",
      date: "2022 – Present",
      image: freelancerLogo,
      side: "left",
      tasks: [
        "Built multiple projects, strengthening technical skills in web development and logic programming.",
        "Collaborated effectively with teams to deliver functional web applications.",
        "Utilized modern tools and frameworks to ensure clean, maintainable, and efficient code.",
      ],
    },

    {
      id: 2,
      title: "Web Developer & AI Media Specialist",
      company: "Capital Academy",
      date: "2025 – Present",
      image: capitalAcademyLogo,
      side: "right",
      tasks: [
        "Managed, tested, and optimized the company's web platform, ensuring high performance, responsiveness, and a seamless user experience.",
        "Engineered and maintained robust web tools and digital infrastructure to support dynamic administrative and educational workflows.",
        "Produced and integrated AI-generated imagery and video assets to elevate digital content, branding, and user engagement.",
      ],
    },

    {
      id: 3,
      title: "Development Trainee & Team Lead",
      company: "Workshop",
      date: "2023 – 2024",
      image: watad,
      side: "left",
      tasks: [
        "Completed a two-month intensive training focused on building e-commerce websites using Django.",
        "Served as team leader for a one-month stage project creating an association website.",
      ],
    },

    // =========================
    // NEW EXPERIENCE 1
    // =========================
    {
      id: 4,
      title: "Programming Student (C Piscine)",
      company: "42 Beirut",
      date: "2024",
      image: piscine42,
      side: "right",
      tasks: [
        "Developed C language projects following strict Norminette standards.",
        "Worked under high pressure in a collaborative, competitive, and peer-reviewed problem-solving environment during the 4-week evaluation program.",
      ],
    },

    // =========================
    // NEW EXPERIENCE 2
    // =========================
    {
      id: 5,
      title: "Coding Educator",
      company: "Brightchamps Academy",
      date: "2022 – 2024",
      image: brightchamps,
      side: "left",
      tasks: [
        "Taught the fundamentals of programming to students of various age groups.",
        "Introduced key concepts in logical thinking and problem-solving through interactive lessons.",
      ],
    },

    // =========================
    // NEW EXPERIENCE 3
    // =========================
    {
      id: 6,
      title: "Frontend Developer",
      company: "Verozone Solutions EG",
      date: "2022 – 2023",
      image: verozone,
      side: "right",
      tasks: [
        "Worked as an intern, gaining hands-on experience in frontend development.",
        "Utilized HTML5, JavaScript, and CSS to create responsive and visually appealing user interfaces.",
        "Developed web applications using React.js and maintained clean, efficient code.",
        "Gained proficiency in Bootstrap for efficient web development.",
        "Collaborated with Git and GitHub for version control and team collaboration.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="
        relative
        w-full
        min-h-screen
        bg-gradient-to-b
        from-[#111821]
        via-[#18212d]
        to-[#111821]
        text-white
        py-24
        px-5
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div className="absolute top-[15%] left-[-150px] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px]" />

      <div className="absolute bottom-[10%] right-[-150px] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ====================== */}
        {/* TITLE */}
        {/* ====================== */}

        <div className="mb-20">
          <p
            className="
              text-[12px]
              md:text-[13px]
              uppercase
              tracking-[4px]
              font-medium
              text-[#7184a6]
              mb-3
            "
          >
            What I Have Done So Far
          </p>

          <h2
            className="
              text-[42px]
              md:text-[55px]
              lg:text-[64px]
              font-bold
              leading-none
              tracking-tight
              text-white
            "
          >
            Work{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
              "
            >
              Experience.
            </span>
          </h2>

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

        {/* ====================== */}
        {/* TIMELINE */}
        {/* ====================== */}

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop line */}
          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-[2px]
              -translate-x-1/2
              bg-gradient-to-b
              from-cyan-400
              via-blue-500
              to-[#344050]
            "
          />

          {/* Mobile line */}
          <div
            className="
              md:hidden
              absolute
              left-[26px]
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-cyan-400
              via-blue-500
              to-[#344050]
            "
          />

          <div className="space-y-20 md:space-y-12">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="
                  relative
                  md:grid
                  md:grid-cols-2
                  md:gap-[100px]
                  md:min-h-[260px]
                  items-center
                "
              >
                {/* LEFT CARD */}
                {experience.side === "left" && (
                  <div className="hidden md:flex justify-end">
                    <ExperienceCard experience={experience} />
                  </div>
                )}

                {experience.side === "right" && (
                  <div className="hidden md:block" />
                )}

                {/* ====================== */}
                {/* TIMELINE LOGO */}
                {/* ====================== */}

                <div
                  className="
                    absolute
                    left-[1px]
                    top-0

                    md:left-1/2
                    md:top-1/2
                    md:-translate-x-1/2
                    md:-translate-y-1/2

                    z-20
                  "
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl scale-125" />

                  <div
                    className="
                      relative

                      w-[52px]
                      h-[52px]

                      md:w-[62px]
                      md:h-[62px]

                      bg-white

                      rounded-full

                      border-[3px]
                      border-[#2b8dff]

                      flex
                      items-center
                      justify-center

                      overflow-hidden

                      shadow-[0_0_0_5px_rgba(43,141,255,0.08),0_0_30px_rgba(0,191,255,0.15)]
                    "
                  >
                    <img
                      src={experience.image}
                      alt={experience.company}
                      className="w-[78%] h-[78%] object-contain"
                    />
                  </div>
                </div>

                {/* ====================== */}
                {/* DATE */}
                {/* ====================== */}

                <div
                  className={`
                    absolute

                    left-[70px]
                    top-[15px]

                    md:top-1/2
                    md:-translate-y-1/2

                    text-[11px]
                    md:text-[12px]

                    font-medium
                    tracking-wide

                    text-[#7184a6]

                    whitespace-nowrap

                    ${
                      experience.side === "left"
                        ? "md:left-[calc(50%+48px)]"
                        : "md:left-auto md:right-[calc(50%+48px)]"
                    }
                  `}
                >
                  {experience.date}
                </div>

                {/* RIGHT CARD */}
                {experience.side === "right" && (
                  <div className="hidden md:flex justify-start">
                    <ExperienceCard experience={experience} />
                  </div>
                )}

                {experience.side === "left" && (
                  <div className="hidden md:block" />
                )}

                {/* MOBILE CARD */}
                <div className="md:hidden pl-[75px] pt-[55px]">
                  <ExperienceCard experience={experience} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <div
      className="
        group
        relative

        w-full
        md:w-[390px]
        lg:w-[430px]

        bg-[#151d27]/95

        border
        border-[#273444]

        rounded-xl

        px-6
        py-6

        shadow-[0_20px_45px_rgba(0,0,0,0.18)]

        hover:border-cyan-400/40
        hover:-translate-y-1

        hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]

        transition-all
        duration-300

        overflow-hidden
      "
    >
      {/* Top accent */}
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

      {/* Background glow */}
      <div
        className="
          absolute
          -right-[100px]
          -top-[100px]

          w-[180px]
          h-[180px]

          bg-blue-500/5
          rounded-full
          blur-[50px]

          group-hover:bg-blue-500/10

          transition-all
          duration-300
        "
      />

      <div className="relative z-10">
        {/* Job title */}
        <h3
          className="
            text-[19px]
            md:text-[21px]

            leading-tight

            font-bold
            text-white

            mb-2
          "
        >
          {experience.title}
        </h3>

        {/* Company */}
        <p
          className="
            text-[13px]
            font-medium

            text-[#4f9cff]

            mb-5
          "
        >
          {experience.company}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#273444] mb-5" />

        {/* Tasks */}
        <ul className="space-y-3">
          {experience.tasks.map((task, index) => (
            <li
              key={index}
              className="
                flex
                gap-3

                text-[12px]
                md:text-[13px]

                leading-[1.7]

                text-[#8b9ab5]
              "
            >
              <span
                className="
                  mt-[8px]

                  min-w-[6px]
                  w-[6px]
                  h-[6px]

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                "
              />

              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;