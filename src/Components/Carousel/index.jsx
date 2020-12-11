import React from 'react';
import { Card, Input } from 'antd';
import { useHistory } from 'react-router-dom';

const { Search } = Input;


export default function Carousel() {
    const history = useHistory();
    const onSearch = (key) => {
    if (!key && key !== 0) return;
    key = key.trim();
    if (key === "") return;
    const url = "/search/" + key;
    history.push(url);
    }
    
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/carousel/carousel-1.jpg" className="d-block w-100" alt="carousel-1" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel/carousel-2.jpg" className="d-block w-100" alt="carousel-2" />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel/carousel-3.jpg" className="d-block w-100" alt="carousel-3" />
                    </div>
                </div>

                <div className="container">
                    <Card>
                        <h3>Last day to save!</h3>
                        <p>Get a new course for Computer Learning Month — starting at $12.99</p>
                        <Search
                            placeholder="What you want to learn"
                            onSearch={onSearch}
                        />
                    </Card>
                </div>
            </div>
    )
}

