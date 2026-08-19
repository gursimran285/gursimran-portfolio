function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#0b0b0b] border-t border-[#242424]"
    >


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