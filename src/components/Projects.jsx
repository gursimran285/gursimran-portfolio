import { FaLaptopCode } from "react-icons/fa";
import {
    FaArrowUpRightFromSquare,
    FaPalette,
    FaCode,
    FaBoxOpen
} from "react-icons/fa6";

const projects = [
    {
        number: "01",
        title: "Supravedic",
        category: "Brand Identity & Packaging",
        description:
            "A premium Ayurvedic-inspired brand identity with packaging concepts, typography and visual direction.",
        icon: <FaPalette />,
        image: "/assets/images/a.jpg",
        pdf: "/assets/projects/supravedic.pdf"
    },
    {
        number: "02",
        title: "Crispy Hawkers",
        category: "Website Redesign",
        description:
            "A modern and user-friendly website redesign for Crispy Hawkers, focused on enhancing the user experience, brand identity and online presence.",
        icon: <FaLaptopCode />,
        image: "/assets/images/crispy-hawkers.png",
        pdf: "/assets/projects/crispy-hawkers.pdf"
    }

    // {
    //     number: "03",
    //     title: "Portfolio Website",
    //     category: "UI Design & Development",
    //     description:
    //         "A personal portfolio combining creative design with a responsive React-based web experience.",
    //     icon: <FaCode />,
    //     // image: "/assets/images/portfolio-project.jpg",
    //     pdf: "/assets/projects/portfolio.pdf"
    // }
];

function Projects() {
    return (
        <section
            id="projects"
            style={{
                background: "#111111",
                color: "#ffffff",
                padding: "90px 5%"
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto"
                }}
            >

                {/* =========================
            SECTION HEADING
        ========================= */}

                <div
                    style={{
                        marginBottom: "55px"
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            color: "#d4a900",
                            fontSize: "16px",
                            fontWeight: "600",
                            letterSpacing: "3px",
                            marginBottom: "12px"
                        }}
                    >
                        MY WORK
                    </span>

                    <h2
                        className="rethink-sans"
                        style={{
                            fontSize: "48px",
                            margin: "0",
                            fontWeight: "600"
                        }}
                    >
                        Featured Projects
                    </h2>

                    <p
                        style={{
                            color: "#bdbdbd",
                            fontSize: "17px",
                            lineHeight: "1.7",
                            maxWidth: "650px",
                            marginTop: "15px"
                        }}
                    >
                        A selection of design and development projects that showcase
                        my creative approach and technical skills.
                    </p>
                </div>


                {/* =========================
            PROJECTS
        ========================= */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "28px"
                    }}
                >

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-8px)";
                                e.currentTarget.style.borderColor = "#d4a900";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.borderColor = "#444";
                            }}
                            style={{
                                background: "#242424",
                                border: "1px solid #444",
                                borderRadius: "22px",
                                overflow: "hidden",
                                transition: "all 0.3s ease"
                            }}
                        >

                            {/* =========================
                  PROJECT IMAGE
              ========================= */}

                            <div
                                style={{
                                    height: "230px",
                                    background: "#1b1b1b",
                                    overflow: "hidden",
                                    position: "relative"
                                }}
                            >

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block"
                                    }}
                                />

                                {/* Number */}

                                <span
                                    style={{
                                        position: "absolute",
                                        top: "18px",
                                        left: "18px",
                                        background: "#111111",
                                        color: "#d4a900",
                                        padding: "7px 12px",
                                        borderRadius: "8px",
                                        fontSize: "13px",
                                        fontWeight: "600"
                                    }}
                                >
                                    {project.number}
                                </span>

                            </div>


                            {/* =========================
                  PROJECT CONTENT
              ========================= */}

                            <div
                                style={{
                                    padding: "28px"
                                }}
                            >

                                {/* Icon + Category */}

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        color: "#ff8c00",
                                        fontSize: "14px",
                                        marginBottom: "12px"
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "16px"
                                        }}
                                    >
                                        {project.icon}
                                    </span>

                                    <span>
                                        {project.category}
                                    </span>
                                </div>


                                {/* Title */}

                                <h3
                                    style={{
                                        margin: "0 0 12px",
                                        fontSize: "26px",
                                        fontWeight: "600"
                                    }}
                                >
                                    {project.title}
                                </h3>


                                {/* Description */}

                                <p
                                    style={{
                                        margin: "0 0 22px",
                                        color: "#bdbdbd",
                                        fontSize: "15px",
                                        lineHeight: "1.7"
                                    }}
                                >
                                    {project.description}
                                </p>


                                {/* View Project */}

                                <a
                                    href={project.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        background: "transparent",
                                        border: "1px solid #555",
                                        color: "#ffffff",
                                        padding: "11px 18px",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "#d4a900";
                                        e.currentTarget.style.borderColor = "#d4a900";
                                        e.currentTarget.style.color = "#111111";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.borderColor = "#555";
                                        e.currentTarget.style.color = "#ffffff";
                                    }}
                                >
                                    View Project
                                    <FaArrowUpRightFromSquare size={12} />
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;