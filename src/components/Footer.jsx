function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#0b0b0b] border-t border-[#242424]"
    >

      {/* =========================
          CLOSING CTA
      ========================= */}

      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 text-center">

        <p
          className="
            text-[#eeeeee]
            text-base
            sm:text-lg
            font-medium
            tracking-wide
            mb-5
          "
        >
          Have a project in mind?
        </p>

        <h2
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-semibold
            leading-[1.15]
            tracking-tight
            !text-[#eeeeee]
          "
        >
          Let's create something
          <br />

          <span className="text-[#d6a800]">
            great together.
          </span>
        </h2>

        <p
          className="
            max-w-2xl
            mx-auto
            mt-6
            text-[#999999]
            text-[15px]
            sm:text-base
            leading-7
          "
        >
          I'm always open to new ideas, creative collaborations,
          and exciting projects. Let's turn your vision into
          something meaningful.
        </p>

        <a
          href="#contact"
          className="
            inline-flex
            items-center
            gap-3
            mt-7
            px-5
            py-2.5
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

          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </a>

      </div>

      {/* =========================
          COPYRIGHT
      ========================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div
          className="
            border-t
            border-[#242424]
            py-4
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-3
          "
        >

          <p
            className="
              text-[#666666]
              text-[13px]
              text-center
              sm:text-left
            "
          >
            © {new Date().getFullYear()} Gursimran Kaur.
            All rights reserved.
          </p>

          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="
              inline-flex
              items-center
              gap-1
              !bg-transparent
              !border-0
              !outline-none
              !text-[#777777]
              text-[13px]
              hover:!text-[#d6a800]
              transition
              duration-300
              cursor-pointer
            "
          >
            Back to Top

            <span className="text-[#d6a800]">
              ↑
            </span>
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;