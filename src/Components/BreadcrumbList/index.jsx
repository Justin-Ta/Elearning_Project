import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { categoryNames } from '../../constant/categoryName';

export default function BreadcrumbList(category) {
    const RenderBreadcrumbItem = () => {
        return categoryNames.map((name, index) => {
            if ( category === name ) {
                return (
                    <Breadcrumb.Item key={index}>
                        <Link to={"/categories/"+ name} className="active">{name}</Link>
                    </Breadcrumb.Item>
                )
            }
            return (
                <Breadcrumb.Item key={index}>
                    <Link to={"/categories/"+ name} >{name}</Link>
                </Breadcrumb.Item>
            )
        })
    }

    return (
        <Breadcrumb className="my-3">
            {RenderBreadcrumbItem()}
            <Breadcrumb.Item>
            <Link></Link>
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}
