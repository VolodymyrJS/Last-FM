import React from 'react';
import '../css/footer.css';
import Clock from '../components/Clock';

const Footer = () => {
    return (
        <div>
            <p className="app-footer">Last.fm &copy; Ponomarenko Vladimir<Clock /></p>
        </div>
    );
};

export default Footer;
