import React, { Component } from 'react';
// For type-checking props

class Sliderm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0, // Current active slide
      thumbnailScrollIndex: 0, // For scrolling thumbnails
    };
    this.autoPlayInterval = null;
  }

  // Slide data is now part of the component's state or a constant
  slideData = [
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: './images/konaldo.jpg',
    },
    {
      index: 0,
      headline: 'New Fashion Apparel',
      button: 'Shop now',
      src: './images/elif.jpg',
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      src: './images/bbud.jpg',
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      src: './images/lion-zebra.jpg',
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: './images/lord_rama[1].jpg',
    },

    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: './images/monadar.jpg',
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: './images/panda.jpg',
    },

    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: './images/ramji.png',
    },
  ];

  componentDidMount() {
    this.startAutoplay();
  }

  componentWillUnmount() {
    this.stopAutoplay();
  }

  startAutoplay = () => {
    this.autoPlayInterval = setInterval(this.handleNextClick, 500); // Set interval to 5 seconds for autoplay
  };

  stopAutoplay = () => {
    clearInterval(this.autoPlayInterval);
  };

  handleNextClick = () => {
    const next = (this.state.current + 1) % this.slideData.length;
    this.setState({ current: next });
  };

  handlePreviousClick = () => {
    const previous =
      this.state.current === 0
        ? this.slideData.length - 1
        : this.state.current - 1;
    this.setState({ current: previous });
  };

  handleThumbnailScroll = (direction) => {
    const maxVisibleThumbnails = 6; // Number of visible thumbnails
    const totalThumbnails = this.slideData.length;

    let newScrollIndex = this.state.thumbnailScrollIndex;

    if (direction === 'next') {
      newScrollIndex = Math.min(
        newScrollIndex + 1,
        totalThumbnails - maxVisibleThumbnails
      );
    } else if (direction === 'previous') {
      newScrollIndex = Math.max(newScrollIndex - 1, 0);
    }

    this.setState({ thumbnailScrollIndex: newScrollIndex });
  };

  render() {
    const { current, thumbnailScrollIndex } = this.state;

    return (
      <div
        className="sm:hidden w-4/5 block min-h-[220px] h-fit relative  px-2 py-3 bg-zinc-800 rounded-lg "
        onMouseEnter={this.stopAutoplay}
        onMouseLeave={this.startAutoplay}
      >
        {/* Main Slide */}
        <div className="min-h-[220px] relative rounded-lg text-center  ">


        <img
            src={this.slideData[current].src}
            alt={this.slideData[current].headline}
            className="w-full h-[320px] relative z-30 object-contain"
          />
          <img
            src={this.slideData[current].src}
            alt={this.slideData[current].headline}
            className="w-full absolute rounded-lg top-0 h-[320px] object-cover"
          />
          <div className="w-full absolute rounded-lg bg-zinc-700 opacity-55 backdrop-blur-lg top-0 h-[320px] "
          > </div>
          <div className="w-full absolute rounded-lg  backdrop-blur-lg top-0 h-[320px] "
          > </div>

          

          

          {/* Left and Right Navigation Buttons */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white text-lg p-2 cursor-pointer"
            onClick={this.handlePreviousClick}
          >
            &#8249;
          </button>

          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white text-lg p-2 cursor-pointer"
            onClick={this.handleNextClick}
          >
            &#8250;
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className=" flex items-center min-h-28 justify-center mt-4">
          {/* Scroll Buttons */}
          <button
            className={`bg-black bg-opacity-70 text-white text-lg p-2 cursor-pointer ${thumbnailScrollIndex === 0 ? 'opacity-70' : ''}`}
            onClick={() => this.handleThumbnailScroll('previous')}
            disabled={thumbnailScrollIndex === 0}
          >
            &#8249;
          </button>

          <div className="flex overflow-hidden mx-2  h-full">
            {this.slideData.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={slide.headline}
                className={`w-[70px] h-[70px] object-cover mx-1 cursor-pointer opacity-70 transition-opacity duration-300 ${index === current ? 'opacity-100' : ''}`}
                onClick={() => this.setState({ current: index })}
              />
            ))}
          </div>

          <button
            className={`bg-black bg-opacity-70 text-white text-xl p-2 cursor-pointer ${thumbnailScrollIndex >= this.slideData.length - 6 ? 'opacity-70' : ''}`}
            onClick={() => this.handleThumbnailScroll('next')}
            disabled={thumbnailScrollIndex >= this.slideData.length - 6}
          >
            &#8250;
          </button>
        </div>
      </div>
    );
  }
}

export default Sliderm;
