"use client";
import React from "react";
import CollegeCard from "./collegeCard";

export const FavoriteCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-left mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Student Favorites</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {favoriteData.map((data, index) => (
          <CollegeCard
            college={data}
            isFavorite={true}
            toggleFavorite={() => {
                console.log("Toggled favorite");
            }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const favoriteData = [

  {
    collegeName: "Stanford University",
    location: "Stanford, California",
    price: 50000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1499013819532-e4f6b90775a7",
  },
  {
    collegeName: "Harvard University",
    location: "Cambridge, Massachusetts",
    price: 55000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d9",
  },
  {
    collegeName: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, Massachusetts",
    price: 52000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1551606780-23a1a57ae8a0",
  },
  {
    collegeName: "University of Oxford",
    location: "Oxford, England",
    price: 45000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1560806887-1d5f5e63f171",
  },
];

export default FavoriteCards;
