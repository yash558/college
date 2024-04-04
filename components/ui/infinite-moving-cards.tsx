"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import image from "../../public/college1.jpg";
import Image from "next/image";





export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        collegeName: string;
        location: string;
        image: string;
        rating: number;
        price: number;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);


    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);

    const toggleFavorite = (index: number) => {
        if (favorites.includes(index)) {
            setFavorites(favorites.filter((favIndex) => favIndex !== index));
        } else {
            setFavorites([...favorites, index]);
        }
    };
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] h-full max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 p-2 md:w-[450px]"
                        style={{
                            background:
                                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                        }}
                        key={item.collegeName}
                    >
                        <div className="relative flex flex-col h-full">
                            <div className="absolute top-0 left-0">
                                <Image
                                    src={image}
                                    alt="University"
                                    className="w-full h-full"
                                    height={500}
                                    width={500}
                                />
                                <span className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-md">
                                    {item.rating}
                                </span>
                            </div>
                            <blockquote className="flex-grow">

                                <div className="mt-6 flex flex-row items-center">
                                    <span className="flex flex-col gap-1">
                                        <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                            {item.collegeName}
                                        </span>
                                        <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                            {item.location}
                                        </span>
                                    </span>
                                </div>
                            </blockquote>
                            <div className=" flex justify-between w-full mt-20">
                                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                    from ${item.price}/year
                                </span>
                                <button
                                    className={cn("text-gray-400", {
                                        "text-red-500": favorites.includes(idx),
                                    })}
                                    onClick={() => toggleFavorite(idx)}
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
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
