import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="relative h-[80vh]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}></div>
            <div className="absolute inset-0 bg-gray-400 bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-black">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to CollegeConsult</h1>
                    <p className="text-lg md:text-xl">Your guide to higher education</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
