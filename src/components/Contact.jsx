import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* =========================
            HEADER
        ========================= */}

        <div className="text-center max-w-2xl mx-auto">

          <p className="text-[#d6a800] text-sm sm:text-base font-medium tracking-[0.2em] uppercase">
            Get In Touch
          </p>

          <h2
            className="
              mt-3
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-semibold
              leading-tight
              !text-white
            "
          >
            Let's work
            <span className="text-[#d6a800]"> together.</span>
          </h2>

          <p className="mt-5 text-[#999999] text-[15px] sm:text-base leading-7">
            Have a project, collaboration, or creative idea in mind?
            I'd love to hear about it. Feel free to reach out through
            email or connect with me on social media.
          </p>

        </div>


        {/* =========================
            CONTACT CARD
        ========================= */}

        <div className="mt-12 flex justify-center">

          <div
            className="
              w-full
              max-w-3xl
              border
              border-[#242424]
              rou nded-2xl
              p-7
              sm:p-9
              lg:p-10
              bg-[#0b0b0b]
            "
          >

            {/* CONTACT DETAILS */}

            <div className="text-center">

              <h3 className="text-2xl sm:text-3xl font-semibold !text-white">
                Contact Details
              </h3>

              <p
                className="
                  mt-3
                  text-[#888888]
                  text-sm
                  leading-6
                  max-w-xl
                  mx-auto
                "
              >
                The easiest way to reach me is through email. I'm
                available for freelance projects, collaborations and
                creative opportunities.
              </p>

            </div>


            {/* =========================
                EMAIL + LOCATION
            ========================= */}

            <div
              className="
                mt-9
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-8
                sm:gap-10
              "
            >

              {/* EMAIL */}

              <a
                href="mailto:graphicbysimran@gmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  !no-underline
                  group
                  min-w-0
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    shrink-0
                    rounded-full
                    border
                    border-[#444444]
                    flex
                    items-center
                    justify-center
                    text-[#d6a800]
                    group-hover:bg-[#d6a800]
                    group-hover:!text-black
                    transition-all
                    duration-300
                  "
                >
                  <FaEnvelope />
                </div>

                <div className="min-w-0">

                  <p className="text-xs text-[#666666] uppercase tracking-wider">
                    Email
                  </p>

                  <p
                    className="
                      text-[#dddddd]
                      text-sm
                      sm:text-base
                      mt-1
                      whitespace-nowrap
                    "
                  >
                    graphicbysimran@gmail.com
                  </p>

                </div>

              </a>


              {/* LOCATION */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-11
                    h-11
                    shrink-0
                    rounded-full
                    border
                    border-[#444444]
                    flex
                    items-center
                    justify-center
                    text-[#d6a800]
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <p className="text-xs text-[#666666] uppercase tracking-wider">
                    Location
                  </p>

                  <p className="text-[#dddddd] text-sm sm:text-base mt-1 whitespace-nowrap">
                    Jalandhar, Punjab
                  </p>

                </div>

              </div>

            </div>


            {/* =========================
                CONNECT WITH ME
            ========================= */}

            <div
              className="
                mt-10
                pt-8
                border-t
                border-[#1f1f1f]
                text-center
              "
            >

              <p className="text-xs text-[#666666] uppercase tracking-[0.15em] mb-4">
                Connect With Me
              </p>

              <div className="flex justify-center gap-3">

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/gursimran-kaur-52ab45290"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-[#333333]
                    flex
                    items-center
                    justify-center
                    !text-[#aaaaaa]
                    hover:border-[#d6a800]
                    hover:!text-[#d6a800]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedinIn />
                </a>


                {/* GITHUB */}

                <a
                  href="https://github.com/gursimran285"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-[#333333]
                    flex
                    items-center
                    justify-center
                    !text-[#aaaaaa]
                    hover:border-[#d6a800]
                    hover:!text-[#d6a800]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub />
                </a>


                {/* INSTAGRAM */}

                <a
                  href="https://www.instagram.com/gursimrandesigns.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-[#333333]
                    flex
                    items-center
                    justify-center
                    !text-[#aaaaaa]
                    hover:border-[#d6a800]
                    hover:!text-[#d6a800]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaInstagram />
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            GET IN TOUCH BUTTON
        ========================= */}

        <div className="flex justify-center mt-9">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=graphicbysimran@gmail.com&su=Project%20Inquiry&body=Hi%20Gursimran,%20I%20would%20like%20to%20discuss%20a%20project..."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              px-7
              py-3
              rounded-full
              border
              border-[#d6a800]
              !no-underline
              !text-[#d6a800]
              text-[15px]
              font-medium
              tracking-wide
              transition-all
              duration-300
              hover:bg-[#d6a800]
              hover:!text-black
              hover:scale-105
            "
          >
            Get In Touch

            <FaArrowRight className="text-sm" />

          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;