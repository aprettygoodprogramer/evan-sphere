import React from "react";
import { FaGithub } from "react-icons/fa";
import "../App.css";

const GithubButton: React.FC = () => {
  return (
    <a
      href="https://github.com/aprettygoodprogramer " 
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
    >
      <FaGithub style={{ marginRight: "8px" }} /> GitHub
    </a>
  );
};

export default GithubButton;
