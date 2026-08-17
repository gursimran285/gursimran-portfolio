function Footer() {
    return (
        <footer
            id="footer"
            className="bg-[#0b0b0b] border-t border-[#2a2a2a]"
        >

            {/* =========================
              CLOSING CTA
          ========================= */}

            <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 py-10 text-center">

                {/* Small Heading */}

                <p
                    className="
    text-[#eeeeee]
    text-base
    sm:text-lg
    lg:text-xl
    font-medium
    tracking-wide
    mb-6
  "
                >
                    Have a project in mind?
                </p>


                {/* Main Heading */}

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


                {/* Description */}

                <p
                    className="
            max-w-2xl
            mx-auto
            mt-7
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


                {/* CTA */}

                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=graphicbysimran@gmail.com&su=Project%20Inquiry&body=Hi%20Gursimran,%20I%20would%20like%20to%20discuss%20a%20project..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            inline-flex
            items-center
            gap-3
            mt-4
            px-4
            py-2
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
                    Let's Talk

                    <span className="material-symbols-outlined text-[21px]">
                        arrow_forward
                    </span>
                </a>

            </div>


            {/* =========================
              COPYRIGHT
          ========================= */}

            <div className="max-w-7xl mx-auto px-6 lg:px-10 ">

                <div
                    className="
            border-t
            border-[#242424]
            py-2
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
                        © {new Date().getFullYear()} My Portfolio. All rights reserved.
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