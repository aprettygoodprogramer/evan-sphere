import React, { useEffect, useState } from 'react';

interface TextProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
  color?: string;
  className?: string;
  fontFamily?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  size = 'medium',
  weight = 'normal',
  color = '#000',
  className,
  fontFamily,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles: React.CSSProperties = {
    fontSize: size === 'small' ? '12px' : size === 'large' ? '40px' : '16px',
    fontWeight: weight,
    color,
    fontFamily,
    whiteSpace: isSmallScreen ? 'normal' : 'nowrap',
    overflow: isSmallScreen ? 'visible' : 'hidden',
    textOverflow: isSmallScreen ? 'clip' : 'ellipsis',
  };

  return (
    <p style={styles} className={className}>
      {children}
    </p>
  );
};

export default Text;
