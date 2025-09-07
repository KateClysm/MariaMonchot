import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
    return(
        <footer>

           <div className="footer-container presentation margin-mark">
                <p className='footer-rights fixed-border'>© María Monchot · Data Analyst </p>
                <p className='built'>Built with React + TypeScript</p>
           </div>
            
        </footer>
    )
    
};

export default Footer;