import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
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

        {/* CONTACT CONTENT */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">

          {/* LEFT - CONTACT INFO */}
          <div
            className="
              border
              border-[#242424]
              rounded-2xl
              p-7
              sm:p-9
              bg-[#0b0b0b]
            "
          >
            <h3 className="text-2xl font-semibold !text-white">
              Contact Details
            </h3>

            <p className="mt-3 text-[#888888] text-sm leading-6">
              The easiest way to reach me is through email. I'm
              available for freelance projects, collaborations and
              creative opportunities.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:graphicbysimran@gmail.com"
              className="
                mt-8
                flex
                items-center
                gap-4
                !no-underline
                group
              "
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#333333]
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

              <div>
                <p className="text-xs text-[#666666] uppercase tracking-wider">
                  Email
                </p>

                <p className="text-[#dddddd] text-sm sm:text-base mt-1">
                  graphicbysimran@gmail.com
                </p>
              </div>
            </a>

            {/* LOCATION */}
            <div className="mt-6 flex items-center gap-4">
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#333333]
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

                <p className="text-[#dddddd] text-sm sm:text-base mt-1">
                  Jalandhar, Punjab
                </p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-9">
              <p className="text-xs text-[#666666] uppercase tracking-wider mb-4">
                Connect With Me
              </p>

              <div className="flex gap-3">

                {/* LinkedIn */}
                <a
                  href="#"
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
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedinIn />
                </a>

                {/* GitHub */}
                <a
                  href="#"
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
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub />
                </a>

                {/* Instagram */}
                <a
                  href="#"
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
                    transition-all
                    duration-300
                  "
                >
                  <FaInstagram />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT - MESSAGE */}
          <div
            className="
              border
              border-[#242424]
              rounded-2xl
              p-7
              sm:p-9
              bg-[#0b0b0b]
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <h3 className="text-2xl font-semibold !text-white">
                Have a project in mind?
              </h3>

              <p className="mt-3 text-[#888888] text-sm leading-6">
                Tell me a little about your project and let's see
                how we can bring your idea to life.
              </p>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=graphicbysimran@gmail.com&su=Project%20Inquiry&body=Hi%20Gursimran,%20I%20would%20like%20to%20discuss%20a%20project..."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                mt-10
                w-fit
                px-6
                py-3
                rounded-full
                border
                border-[#d6a800]
                !no-underline
                !text-[#d6a800]
                text-sm
                font-medium
                tracking-wide
                transition-all
                duration-300
                hover:bg-[#d6a800]
                hover:!text-black
                hover:scale-105
              "
            >
              Let's Talk

              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;