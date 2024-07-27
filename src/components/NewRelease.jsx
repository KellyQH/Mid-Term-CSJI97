import { useState } from "react";
import Slider from "react-slick";
import data from "./data";
import PropTypes from "prop-types"; //import PropTypes library

function NewReleaseSection({ setSelectedAnime }) {
  const [slides] = useState(data.data);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  return (
    <div className="slider-container relative mt-8">
      <h2 className="text-3xl font-bold">New Release</h2>
      <Slider {...settings}>
        {slides.map((release) => (
          <div
            key={release.id}
            className="rounded-lg p-4 cursor-pointer"
            onClick={() => setSelectedAnime(release)}
          >
            <img
              src={release.image}
              alt={release.movieName}
              className="rounded-lg w-full"
            />
            <div className="mt-2">
              <p className="text-gray-400 text-center">
                Episode {release.episode}
              </p>
              <h3 className="font-bold text-center">{release.movieName}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

//setSelectedAnime prop is required and should be a function
NewReleaseSection.propTypes = {
  setSelectedAnime: PropTypes.func.isRequired,
};

export default NewReleaseSection;
