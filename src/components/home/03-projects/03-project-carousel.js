// Package: React Slick and Slick Carousel
// Docs: https://github.com/akiran/react-slick

import React, { Component } from 'react';
import Slider from 'react-slick';

import PreviousChevron from '../../../svg/previous-chevron.svg';
import NextChevron from '../../../svg/next-chevron.svg';
import Project1 from './04-project1';
import Project2 from './05-project2';
import Project3 from './06-project3';
import Project4 from './07-project4';
import Project5 from './08-project5';
import Project6 from './09-project6';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as Home from '../home.module.css';

export default class ProjectCarousel extends Component {
  // previousNext Method
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  // slideChangeHooks
  state = {
    activeSlide: 1,
  };

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      easing: 'linear',
      responsive: [
        {
          breakpoint: 991, // tablet breakpoint
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576, // mobile breakpoint
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      afterChange: (current) => this.setState({ activeSlide: current + 1 }),
    };
    return (
      <div className={Home.carouselSection}>
        <div className={Home.carouselNavDiv}>
          <button className={Home.carouselPreviousBtn} onClick={this.previous}>
            <PreviousChevron className={Home.chevronIcons} />
          </button>
          <div className={Home.carouselIndex}>{this.state.activeSlide} | 6</div>
          <button className={Home.carouselNextBtn} onClick={this.next}>
            <NextChevron className={Home.chevronIcons} />
          </button>
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <Project1 />
          </div>
          <div>
            <Project2 />
          </div>
          <div>
            <Project3 />
          </div>
          <div>
            <Project4 />
          </div>
          <div>
            <Project5 />
          </div>
          <div>
            <Project6 />
          </div>
        </Slider>
        <div className={Home.greenStripe2} />
      </div>
    );
  }
}
