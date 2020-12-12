import React from 'react';

import { Link } from 'react-router-dom';
import { categoryDisplayNames, categoryNames } from '../../constant/common';

export default function BreadcrumbList(category) {
    const RenderBreadcrumbItem = () => {
        return categoryNames.map((name, index) => {
            if ( category === name ) {
                return (
                    <Link to={"/categories/"+ name} className="active" key={index}>
                        <span>{categoryDisplayNames[name]}</span> 
                        <div className="arrow-above"></div>
                        <div className="arrow-below"></div>
                    </Link>
                )
            }
            return (
                <Link to={"/categories/"+ name} key={index}>
                    <span>{categoryDisplayNames[name]}</span>
                </Link>
            )
        })
    }

    return (
        <div className="BreadcrumbList">
            <div className="container">
            {RenderBreadcrumbItem()}
            </div>
        </div>
    )
}
