import { useEffect, useState } from "react";

const links = [
  "Home",
  "About",
  "Services",
  "Skills",
  "Projects",
  "Contact",
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  /* =========================
        DETECT FOOTER
     ========================= */

  useEffect(() => {
    const footer = document.getElementById("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0b]/95 backdrop-blur-md border-b border-[#2a2a2a]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* =========================
                    LOGO
              ========================= */}

          <a
            href="#home"
            className="
              rethink-sans
              text-2xl
              sm:text-3xl
              italic
              font-semibold
              !no-underline
              !text-[#d6a800]
              hover:!text-[#f0c52e]
              transition
              duration-300
            "
          >
            My Portfolio
          </a>


          {/* =========================
              DESKTOP NAVIGATION
              ========================= */}

          <div className="hidden md:flex items-center gap-9">

            {links.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`
                  relative
                  !no-underline
                  text-[16px]
                  font-medium
                  tracking-wide
                  transition-all
                  duration-300
                  group
                  ${
                    index === 0
                      ? "!text-[#d6a800]"
                      : "!text-[#eeeeee] hover:!text-[#d6a800]"
                  }
                `}
              >
                {link}

                {/* Gold underline */}

                <span
                  className={`
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    bg-[#d6a800]
                    transition-all
                    duration-300
                    ${
                      index === 0
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </a>
            ))}

          </div>


          {/* =========================
                DESKTOP LET'S TALK
              ========================= */}

          {!isFooterVisible && (
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=graphicbysimran@gmail.com&su=Project%20Inquiry&body=Hi%20Gursimran,%20I%20would%20like%20to%20discuss%20a%20project..."
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden
                md:flex
                items-center
                justify-center
                !no-underline
                px-6
                py-2.5
                rounded-full
                border
                border-[#d6a800]
                !text-[#d6a800]
                text-[15px]
                font-medium
                tracking-wide
                transition-all
                duration-300
                hover:bg-[#d6a800]
                hover:!text-black
              "
            >
              Let's Talk
            </a>
          )}


          {/* =========================
              MOBILE MENU BUTTON
              ========================= */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="
              md:hidden
              w-11
              h-11
              flex
              items-center
              justify-center
              rounded-lg
              border
              border-[#333333]
              bg-[#151515]
              !text-[#d6a800]
              hover:border-[#d6a800]
              transition
            "
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>

        </div>


        {/* =========================
                  MOBILE MENU
            ========================= */}

        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isOpen
                ? "max-h-[500px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="bg-[#151515] border border-[#2c2c2c] rounded-xl p-3">

            {links.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`
                  block
                  !no-underline
                  px-5
                  py-3.5
                  rounded-lg
                  text-[16px]
                  font-medium
                  tracking-wide
                  transition
                  ${
                    index === 0
                      ? "!text-[#d6a800]"
                      : "!text-[#eeeeee] hover:!text-[#d6a800]"
                  }
                `}
              >
                {link}
              </a>
            ))}


            {/* MOBILE LET'S TALK */}

            {!isFooterVisible && (
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=graphicbysimran@gmail.com&su=Project%20Inquiry&body=Hi%20Gursimran,%20I%20would%20like%20to%20discuss%20a%20project..."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="
                  block
                  text-center
                  mt-2
                  px-5
                  py-3
                  rounded-lg
                  border
                  border-[#d6a800]
                  !no-underline
                  !text-[#d6a800]
                  text-[15px]
                  font-medium
                  hover:bg-[#d6a800]
                  hover:!text-black
                  transition
                "
              >
                Let's Talk
              </a>
            )}

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;