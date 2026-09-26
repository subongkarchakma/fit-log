import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <div className="container mx-auto flex justify-between mt-20 mb-4">
      <div className="flex">
        <Image src={logo} alt="logo-image" />
        <p className="btn btn-ghost text-xl">FITLOG</p>
      </div>

      <div>
        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </div>
  );
};

export default Footer;
