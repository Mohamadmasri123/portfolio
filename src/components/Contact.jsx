import React from "react";
import {
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
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
          left-[-160px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-cyan-500/5
          blur-[150px]
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

      {/* Background Grid */}
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

        <div className="mb-14 lg:mb-16">
          {/* Small Badge */}

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
              Get In Touch
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
            Let's{" "}
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
              Connect.
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
            Have a project, opportunity, or idea in mind? Send me a message and
            I'll get back to you as soon as possible.
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
        {/* CONTACT AREA */}
        {/* ============================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.8fr_1.2fr]

            gap-7
            lg:gap-10

            items-stretch
          "
        >
          {/* ============================= */}
          {/* LEFT SIDE */}
          {/* ============================= */}

          <div
            className="
              relative
              overflow-hidden

              rounded-[22px]

              border
              border-[#273444]

              bg-[#111923]/90

              p-7
              sm:p-8

              shadow-[0_20px_50px_rgba(0,0,0,0.18)]
            "
          >
            {/* Top Line */}

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
              "
            />

            {/* Glow */}

            <div
              className="
                absolute
                -top-[100px]
                -left-[100px]

                w-[250px]
                h-[250px]

                rounded-full

                bg-cyan-500/5

                blur-[80px]
              "
            />

            <div className="relative z-10">
              {/* Icon */}

              <div
                className="
                  flex
                  items-center
                  justify-center

                  w-[58px]
                  h-[58px]

                  rounded-xl

                  border
                  border-cyan-400/20

                  bg-gradient-to-br
                  from-cyan-500/10
                  to-blue-500/10

                  mb-6
                "
              >
                <FiCode className="text-cyan-400 text-[25px]" />
              </div>

              <h3
                className="
                  text-[24px]
                  sm:text-[28px]

                  font-semibold

                  leading-tight

                  text-white
                "
              >
                Let's build something
                <span className="block text-[#4f9cff] mt-1">
                  great together.
                </span>
              </h3>

              <p
                className="
                  mt-5

                  text-[14px]

                  leading-[1.8]

                  text-[#71809b]
                "
              >
                I'm interested in web development opportunities, freelance
                projects, collaborations, and challenging ideas where I can
                create meaningful digital experiences.
              </p>

              {/* Info Items */}

              <div className="mt-8 space-y-4">
                <div
                  className="
                    group

                    flex
                    items-start
                    gap-4

                    p-4

                    rounded-xl

                    border
                    border-[#273444]

                    bg-[#151d27]/60

                    hover:border-cyan-400/30

                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center

                      min-w-[40px]
                      h-[40px]

                      rounded-lg

                      bg-cyan-500/10

                      text-cyan-400
                    "
                  >
                    <FiCheckCircle size={18} />
                  </div>

                  <div>
                    <p className="text-[13px] font-medium text-white">
                      Available for opportunities
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-[#65748e]">
                      Open to development projects and professional
                      collaborations.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    group

                    flex
                    items-start
                    gap-4

                    p-4

                    rounded-xl

                    border
                    border-[#273444]

                    bg-[#151d27]/60

                    hover:border-blue-400/30

                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-center

                      min-w-[40px]
                      h-[40px]

                      rounded-lg

                      bg-blue-500/10

                      text-blue-400
                    "
                  >
                    <FiMessageSquare size={18} />
                  </div>

                  <div>
                    <p className="text-[13px] font-medium text-white">
                      Quick communication
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-[#65748e]">
                      Complete the contact form and I'll respond as soon as
                      possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================= */}
          {/* FORM */}
          {/* ============================= */}

          <div
            className="
              relative
              overflow-hidden

              rounded-[22px]

              border
              border-[#273444]

              bg-[#111923]/90

              p-6
              sm:p-8
              lg:p-9

              shadow-[0_20px_50px_rgba(0,0,0,0.18)]
            "
          >
            {/* Form Glow */}

            <div
              className="
                absolute

                -bottom-[150px]
                -right-[100px]

                w-[300px]
                h-[300px]

                rounded-full

                bg-blue-500/5

                blur-[90px]
              "
            />

            <div className="relative z-10">
              <div className="mb-7">
                <h3 className="text-[22px] font-semibold text-white">
                  Send me a message
                </h3>

                <p className="mt-2 text-[13px] text-[#697993]">
                  Fill out the form below and I'll get back to you.
                </p>
              </div>

              <form
                action="https://getform.io/f/7ba69b4d-0fbb-4272-8013-753731d96bda"
                method="POST"
                className="space-y-5"
              >
                {/* ========================= */}
                {/* NAME */}
                {/* ========================= */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      block

                      mb-2

                      text-[11px]
                      font-medium

                      uppercase
                      tracking-[1.5px]

                      text-[#74839d]
                    "
                  >
                    Your Name
                  </label>

                  <div className="relative">
                    <FiUser
                      className="
                        absolute

                        left-4
                        top-1/2

                        -translate-y-1/2

                        text-[#52617a]
                      "
                      size={17}
                    />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="
                        w-full

                        h-[52px]

                        pl-12
                        pr-4

                        rounded-xl

                        border
                        border-[#2b394b]

                        bg-[#0d141e]/80

                        text-[13px]
                        text-white

                        placeholder:text-[#48566d]

                        outline-none

                        focus:border-cyan-400/60

                        focus:shadow-[0_0_0_3px_rgba(34,211,238,0.06)]

                        transition-all
                        duration-300
                      "
                    />
                  </div>
                </div>

                {/* ========================= */}
                {/* EMAIL */}
                {/* ========================= */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      block

                      mb-2

                      text-[11px]
                      font-medium

                      uppercase
                      tracking-[1.5px]

                      text-[#74839d]
                    "
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <FiMail
                      className="
                        absolute

                        left-4
                        top-1/2

                        -translate-y-1/2

                        text-[#52617a]
                      "
                      size={17}
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="
                        w-full

                        h-[52px]

                        pl-12
                        pr-4

                        rounded-xl

                        border
                        border-[#2b394b]

                        bg-[#0d141e]/80

                        text-[13px]
                        text-white

                        placeholder:text-[#48566d]

                        outline-none

                        focus:border-cyan-400/60

                        focus:shadow-[0_0_0_3px_rgba(34,211,238,0.06)]

                        transition-all
                        duration-300
                      "
                    />
                  </div>
                </div>

                {/* ========================= */}
                {/* MESSAGE */}
                {/* ========================= */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      block

                      mb-2

                      text-[11px]
                      font-medium

                      uppercase
                      tracking-[1.5px]

                      text-[#74839d]
                    "
                  >
                    Your Message
                  </label>

                  <div className="relative">
                    <FiMessageSquare
                      className="
                        absolute

                        left-4
                        top-[17px]

                        text-[#52617a]
                      "
                      size={17}
                    />

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="7"
                      placeholder="Tell me about your project or idea..."
                      className="
                        w-full

                        pl-12
                        pr-4
                        py-4

                        resize-none

                        rounded-xl

                        border
                        border-[#2b394b]

                        bg-[#0d141e]/80

                        text-[13px]
                        leading-6
                        text-white

                        placeholder:text-[#48566d]

                        outline-none

                        focus:border-cyan-400/60

                        focus:shadow-[0_0_0_3px_rgba(34,211,238,0.06)]

                        transition-all
                        duration-300
                      "
                    />
                  </div>
                </div>

                {/* ========================= */}
                {/* SUBMIT */}
                {/* ========================= */}

                <button
                  type="submit"
                  className="
                    group

                    w-full

                    h-[52px]

                    flex
                    items-center
                    justify-center
                    gap-3

                    rounded-xl

                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500

                    text-[13px]
                    font-semibold
                    text-white

                    shadow-[0_10px_30px_rgba(0,149,255,0.20)]

                    hover:-translate-y-[2px]

                    hover:shadow-[0_15px_35px_rgba(0,149,255,0.30)]

                    active:translate-y-0

                    transition-all
                    duration-300
                  "
                >
                  Send Message

                  <FiSend
                    size={17}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>

                <p
                  className="
                    text-center

                    text-[10px]
                    sm:text-[11px]

                    text-[#4f5e75]
                  "
                >
                  Your information will only be used to respond to your
                  message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;