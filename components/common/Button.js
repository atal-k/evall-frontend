// Button Component
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, className = '' }) => {
  const classes = `
  ${styles.btn} 
  ${styles[`btn--${variant}`]} 
  ${size === 'small' ? styles['btn--small'] : ''} 
  ${className}
`;
    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    );
  };

export default Button;