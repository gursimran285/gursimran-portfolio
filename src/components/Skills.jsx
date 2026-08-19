import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPaintBrush,
  FaPenNib,
  FaPalette,
  FaDatabase,
  FaPaperPlane,
  FaCode
} from "react-icons/fa";

/* =========================
   DESIGN SKILLS
========================= */

const designSkills = [
  {
    name: "Photoshop",
    icon: <FaPaintBrush />,
    color: "#31A8FF",
    url: "https://www.adobe.com/products/photoshop.html"
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    color: "#F24E1E",
    url: "https://www.figma.com"
  },
  {
    name: "CorelDRAW",
    icon: <FaPenNib />,
    color: "#00A859",
    url: "https://www.coreldraw.com"
  },
  {
    name: "Canva",
    icon: <FaPalette />,
    color: "#00C4CC",
    url: "https://www.canva.com"
  }
];

/* =========================
   DEVELOPMENT SKILLS
========================= */

const developmentSkills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "#E34F26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "#1572B6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
    url: "https://react.dev"
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "#7952B3",
    url: "https://getbootstrap.com"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#339933",
    url: "https://nodejs.org"
  }
];

/* =========================
   TOOLS & PROGRAMMING
========================= */

const toolSkills = [
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
    url: "https://git-scm.com"
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#FFFFFF",
    url: "https://github.com"
  },
  {
    name: "MongoDB",
    icon: <FaDatabase />,
    color: "#47A248",
    url: "https://www.mongodb.com"
  },
  {
    name: "Postman",
    icon: <FaPaperPlane />,
    color: "#FF6C37",
    url: "https://www.postman.com"
  },
  {
    name: "VS Code",
    icon: <FaCode />,
    color: "#007ACC",
    url: "https://code.visualstudio.com"
  }
];

/* =========================
   SKILL CARD
========================= */

function SkillCard({ skill }) {
  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.borderColor = "#d4a900";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#444";
      }}
      style={{
        background: "#242424",
        border: "1px solid #444",
        borderRadius: "15px",
        padding: "18px",
        display: "flex",
        alignItems: "center",
        gap: "18px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit"
      }}
    >
      {/* Icon */}
      <div
        style={{
          color: skill.color,
          fontSize: "35px",
          minWidth: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {skill.icon}
      </div>

      {/* Skill Name */}
      <h3
        style={{
          margin: "0",
          fontSize: "18px",
          fontWeight: "600"
        }}
      >
        {skill.name}
      </h3>
    </a>
  );
}

/* =========================
   SKILLS COMPONENT
========================= */

function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "#111111",
        color: "#ffffff",
        padding: "80px 5%"
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        {/* SECTION HEADING */}
        <div style={{ marginBottom: "55px" }}>
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
            SKILLS
          </span>

          <h2
            className="rethink-sans"
            style={{
              fontSize: "48px",
              margin: "0",
              fontWeight: "600"
            }}
          >
            Tools & Technologies
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
            The tools and technologies I use to create visual designs and build digital experiences.
          </p>
        </div>

        {/* DESIGN TOOLS */}
        <div style={{ marginBottom: "55px" }}>
          <h3
            style={{
              fontSize: "26px",
              fontWeight: "600",
              marginBottom: "25px"
            }}
          >
            <span style={{ color: "#d4a900" }}>01.</span> Design Tools
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px"
            }}
          >
            {designSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* DEVELOPMENT */}
        <div style={{ marginBottom: "55px" }}>
          <h3
            style={{
              fontSize: "26px",
              fontWeight: "600",
              marginBottom: "25px"
            }}
          >
            <span style={{ color: "#d4a900" }}>02.</span> Development
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px"
            }}
          >
            {developmentSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* TOOLS & PROGRAMMING */}
        <div>
          <h3
            style={{
              fontSize: "26px",
              fontWeight: "600",
              marginBottom: "25px"
            }}
          >
            <span style={{ color: "#d4a900" }}>03.</span> Tools & Programming
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px"
            }}
          >
            {toolSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;