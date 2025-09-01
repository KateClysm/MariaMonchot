import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary'; // permite dos estilos
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${variant === 'secondary' ? styles['button--secondary'] : ''}`}
    >
      {text}
    </button>
  );
};

export default Button;