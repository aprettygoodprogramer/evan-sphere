import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubButton: React.FC = () => {
  return (
    <a
      href="https://github.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className="github-button"
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        backgroundColor: "#333",
        color: "white",
        padding: "8px 12px",
        borderRadius: "5px",
        fontSize: "16px",
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#444")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#333")}
    >
      <FaGithub style={{ marginRight: "8px" }} /> GitHub
    </a>
  );
};

export default GithubButton;
