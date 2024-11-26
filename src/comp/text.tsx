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
    fontFamily
  }) => {
    const styles = {
      fontSize: size === 'small' ? '12px' : size === 'large' ? '40px' : '16px',
      fontWeight: weight,
      color,
      fontFamily, 
    };
  
    return (
      <p style={styles} className={className}>
        {children}
      </p>
    );
  };
export default Text;