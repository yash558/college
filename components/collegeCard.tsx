"use client";
import React from "react";
import Image from "next/image";
import cn from "classnames";
import image1 from "../public/college1.jpg";
import Link from "next/link";

interface College {
    collegeName: string;
    location: string;
    price: number;
    rating: number;
    image: string;
}

interface CollegeCardProps {
    college: College;
    isFavorite: boolean;
    toggleFavorite: () => void;
}

const CollegeCard: React.FC<CollegeCardProps> = ({
    college,
    isFavorite,
    toggleFavorite,
}) => {
    const { collegeName, location, price, rating, image } = college;

    return (
        <div className="max-w-md rounded-md overflow-hidden shadow-lg border border-gray-200">
            <div className="relative">
                <Image
                    src={image1}
                    alt="University"
                    className="object-cover w-full h-60"
                    layout="responsive"
                    width={500}
                    height={300}
                />
                <span className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-md">
                    {rating}
                </span>
                <button
                    className={cn(
                        "absolute top-2 right-2 text-gray-400 hover:text-red-500",
                        {
                            "text-red-500": isFavorite,
                        }
                    )}
                    onClick={toggleFavorite}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4l2.523 5.047L20 9.25l-4 3.898.94 5.852L12 18.4l-4.94 2.602.94-5.852-4-3.898 5.477-.203L12 4z"
                        />
                    </svg>
                </button>

            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{collegeName}</h2>
                <p className="text-sm text-gray-600">{location}</p>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-600">from ${price}/year</p>
                    <button>
                        <Link href={`/college/${collegeName}`}>
                            {`>`}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;

