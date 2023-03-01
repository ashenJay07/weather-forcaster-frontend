import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div>
          <svg className="carousel-1" width="100%" height="300px"></svg>
          <div className="container">
            <div className="carousel-caption text-start">
              <h3 className="mb-5 col-8">
                Stay One Step Ahead of the Weather with Accurate Forecasts. Our
                website provides up-to-date, hyperlocal weather forecasts for
                any location, so you can plan your day with confidence. Sign up
                now for free!
              </h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <svg className="carousel-1" width="100%" height="300px"></svg>
          <div className="container">
            <div className="carousel-caption">
              <div className="d-flex justify-content-center">
                <h3 className="mb-5 col-8">
                  Get Personalized Weather Alerts and Expert Analysis. With our
                  website, you can receive custom weather alerts and insights
                  from experienced meteorologists. Don't let unexpected weather
                  ruin your plans – subscribe today!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <svg className="carousel-1" width="100%" height="300px"></svg>
          <div className="container">
            <div className="carousel-caption text-end">
              <div className="d-flex justify-content-end">
                <h3 className="mb-5 col-8">
                  Stay One Step Ahead of the Weather with Accurate Forecasts.
                  Our website provides up-to-date, hyperlocal weather forecasts
                  for any location, so you can plan your day with confidence.
                  Sign up now for free!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
