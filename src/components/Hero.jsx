"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Hero() {
    return (
        <section className="w-full bg-gray-100">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="h-[80vh]"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
                        style={{ backgroundImage: "url('/hero1.jpg')" }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                            Learn Anything, Anytime
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white drop-shadow-lg">
                            Manage your courses easily and stay organized
                        </p>
                        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                            Get Started
                        </button>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
                        style={{ backgroundImage: "url('/hero2.jpg')" }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                            Organize Your Learning
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white drop-shadow-lg">
                            Track, add, and manage courses from one dashboard
                        </p>
                        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                            Explore Courses
                        </button>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
                        style={{ backgroundImage: "url('/hero3.jpg')" }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                            Build Your Skills Faster
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white drop-shadow-lg">
                            Learn smarter with structured course management
                        </p>
                        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                            Start Learning
                        </button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
}
