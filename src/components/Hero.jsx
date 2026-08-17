import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="
                relative
                min-h-screen
                bg-black
                flex
                items-center
                justify-center
                pt-24
                pb-10
                overflow-hidden
            "
    >
      <div
        className="
                    w-full
                    max-w-6xl
                    mx-auto
                    px-5
                    sm:px-8
                    flex
                    flex-col
                    items-center
                    justify-center
                "
      >

        {/* =========================
                    PROFILE IMAGE
                ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
                        w-full
                        flex
                        justify-center
                    "
        >
          <img
            src="public/assets/images/profile.png"
            alt="Gursimran"
            className="
    w-[300px]
    sm:w-[380px]
    md:w-[460px]
    lg:w-[540px]
    xl:w-[600px]
    h-auto
    object-contain
    mx-auto
  "
          />
        </motion.div>


        {/* =========================
                    TEXT BELOW IMAGE
                ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="
                        w-full
                        max-w-4xl
                        text-center
                        mt-2
                        sm:mt-4
                        md:mt-6
                    "
        >
          <h1
            className="
    rethink-sans
    font-bold
    !text-white
    text-[28px]
    leading-[1.15]
    sm:text-[36px]
    md:text-[46px]
    lg:text-[52px]
  "
          >
            Hi! I'm{" "}

            <span className="playfair-display !text-[#d6a800]">
              Gursimran
            </span>

            <span>,</span>

            <br />

            <span className="text-[20px] sm:text-[26px] md:text-[34px] lg:text-[42px] font-medium text-gray-200">
              Graphic Designer & MERN Developer
            </span>
          </h1>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;