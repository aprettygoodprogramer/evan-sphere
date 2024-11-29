import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  to: string;
  text: string;
  
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ to, text }) => {
  return (
    <Link 
      to={to} 
        className='hang-button'
    >
      {text}
    </Link>
  );
};

export default ButtonLink;