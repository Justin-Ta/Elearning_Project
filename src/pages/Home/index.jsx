import React from 'react';
import TrendingCourses from '../../Components/TrendingCourses';
import Carousel from '../../Components/Carousel';
import Categories from '../../Components/Categories';

export default function Home() {
    return (
        <div>
            <div className="mb-5">
            <Carousel />
            </div>
            <div className="mb-5">
            <Categories />
            </div>
            <div className="mb-5">
            <TrendingCourses />
            </div>
        </div>
    )
}
