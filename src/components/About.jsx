import React from "react";

const About = () => {
    // Card hover effect
    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = "translateX(8px)";
        e.currentTarget.style.borderColor = "#d4a900";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.borderColor = "#444";
    };

    return (
        <section
            id="about"
            style={{
                background: "#111111",
                color: "#ffffff",
                padding: "50px 5% 50px",
                minHeight: "0",
                height: "auto"
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1.1fr 0.9fr",
                    gap: "100px",
                    alignItems: "center",
                }}

            >

                {/* =========================
            LEFT CONTENT
        ========================= */}

                <div>
                    <span
                        style={{
                            color: "#d4a900",
                            fontSize: "16px",
                            fontWeight: "600",
                            letterSpacing: "3px",
                        }}
                    >
                        ABOUT ME
                    </span>

                    <h2
                        style={{
                            fontSize: "48px",
                            lineHeight: "1.2",
                            margin: "18px 0 30px",
                            fontWeight: "600",
                        }}
                    >
                        Designing with{" "}
                        <em
                            style={{
                                color: "#d4a900",
                                fontFamily: "Georgia, serif",
                                fontWeight: "400",
                            }}
                        >
                            creativity.
                        </em>
                        <br />
                        Building with technology.
                    </h2>

                    <p
                        style={{
                            maxWidth: "650px",
                            color: "#bdbdbd",
                            fontSize: "17px",
                            lineHeight: "1.8",
                            marginBottom: "18px",
                        }}
                    >
                        I enjoy working at the intersection of design and development —
                        turning ideas into visual identities, digital experiences, and
                        functional websites.
                    </p>

                    <p
                        style={{
                            maxWidth: "650px",
                            color: "#bdbdbd",
                            fontSize: "17px",
                            lineHeight: "1.8",
                            marginBottom: "18px",
                        }}
                    >
                        My approach combines thoughtful design with clean and practical
                        development to create experiences that are both visually appealing
                        and easy to use.
                    </p>

                    {/* 
                     */}
                </div>

                {/* =========================
            RIGHT CONTENT
        ========================= */}

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "22px",
                    }}
                >

                    {/* =========================
              CARD 1
          ========================= */}

                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            display: "flex",
                            gap: "25px",
                            padding: "28px",
                            background: "#242424",
                            border: "1px solid #444",
                            borderRadius: "18px",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <div
                            style={{
                                minWidth: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ff8c00",
                                fontSize: "25px",
                                fontWeight: "bold",
                            }}
                        >
                            ✦
                        </div>

                        <div>
                            <h3
                                style={{
                                    margin: "0 0 8px",
                                    fontSize: "21px",
                                }}
                            >
                                Creative Thinking
                            </h3>

                            <p
                                style={{
                                    margin: "0",
                                    color: "#bdbdbd",
                                    fontSize: "15px",
                                    lineHeight: "1.6",
                                }}
                            >
                                Strong focus on visual composition, typography, branding and
                                modern aesthetics.
                            </p>
                        </div>
                    </div>

                    {/* =========================
              CARD 2
          ========================= */}

                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            display: "flex",
                            gap: "25px",
                            padding: "28px",
                            background: "#242424",
                            border: "1px solid #444",
                            borderRadius: "18px",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <div
                            style={{
                                minWidth: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ff8c00",
                                fontSize: "25px",
                                fontWeight: "bold",
                            }}
                        >
                            &lt;/&gt;
                        </div>

                        <div>
                            <h3
                                style={{
                                    margin: "0 0 8px",
                                    fontSize: "21px",
                                }}
                            >
                                Technical Skills
                            </h3>

                            <p
                                style={{
                                    margin: "0",
                                    color: "#bdbdbd",
                                    fontSize: "15px",
                                    lineHeight: "1.6",
                                }}
                            >
                                Working with React, Node.js, Express.js, MongoDB and
                                responsive web development.
                            </p>
                        </div>
                    </div>

                    {/* =========================
              CARD 3
          ========================= */}

                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            display: "flex",
                            gap: "25px",
                            padding: "28px",
                            background: "#242424",
                            border: "1px solid #444",
                            borderRadius: "18px",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <div
                            style={{
                                minWidth: "50px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ff8c00",
                                fontSize: "25px",
                                fontWeight: "bold",
                            }}
                        >
                            ↗
                        </div>

                        <div>
                            <h3
                                style={{
                                    margin: "0 0 8px",
                                    fontSize: "21px",
                                }}
                            >
                                Design + Development
                            </h3>

                            <p
                                style={{
                                    margin: "0",
                                    color: "#bdbdbd",
                                    fontSize: "15px",
                                    lineHeight: "1.6",
                                }}
                            >
                                Combining creative ideas with technology to turn concepts
                                into complete digital experiences.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;