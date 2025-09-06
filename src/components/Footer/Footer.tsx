import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
    return(
        <footer>

           <div className="footer-container presentation margin-mark">
                <p className='footer-rights'>© María Monchot · Data Analyst </p>
                <div className='footer-line'></div>
                <p className='built'>Built with React + TypeScript</p>
           </div>
            
        </footer>
    )
    
};

export default Footer;