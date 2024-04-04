import { IconFileArrowRight } from '@tabler/icons-react';
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="relative h-[80vh]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}></div>
            <div className="absolute inset-0 bg-gray-400 bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-black">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Perfect College with</h1>
                    <p className="text-lg md:text-xl">Discover 5,000+ colleges and universities worldwide!</p>
                </div>
            </div>
            <div className="absolute top-[90%] left-1/2  transform -translate-x-1/2 flex justify-center mb-4 ">
                <div className="bg-white p-6  rounded-lg shadow-md flex">
                    <form className="flex items-end justify-center gap-4">
                        <div className="flex flex-col items-start">
                            <label htmlFor="location" className="text-gray-800 font-semibold">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                placeholder="Where do you want to go?"
                                className="w-64 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="start-date" className="text-gray-800 font-semibold">
                                Start date
                            </label>
                            <input
                                type="date"
                                id="start-date"
                                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="end-date" className="text-gray-800 font-semibold">
                                End date
                            </label>
                            <input
                                type="date"
                                id="end-date"
                                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="students" className="text-gray-800 font-semibold">
                                Students
                            </label>
                            <input
                                type="number"
                                id="students"
                                placeholder="Number of students"
                                className="w-24 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            <IconFileArrowRight />
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;
