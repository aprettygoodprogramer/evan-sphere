// src/components/GitHubLink.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface GitHubLinkProps {
  url: string;  // The GitHub profile URL
}

const GitHubLink: React.FC<GitHubLinkProps> = ({ url }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }} // Optional styling
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
  );
};

export default GitHubLink;

