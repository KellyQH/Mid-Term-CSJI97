import PropTypes from "prop-types";
import { useEffect, useState } from "react";



function Explore({ selectedAnime }) {
  const [backgroundImage, setBackgroundImage] = useState("");
  
  useEffect(() => {
    // Remove the dot before 'images/'
    setBackgroundImage(`/images/${selectedAnime.carousel}`);
  }, [selectedAnime]);

  return (
    <div className="explore-container">
      <h1 className="text-3xl font-bold text-white">Explore</h1>
      <p className="text-gray-400 text-lg">What are you gonna watch today?</p>
      <div
        className="explore-section p-8 bg-cover bg-center rounded-lg mt-4 relative flex flex-wrap"
        style={{
          backgroundImage: `linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%), url(${backgroundImage})`,
          height: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <div className=" p-4 rounded-t-lg">
          <h2 className="text-3xl font-bold text-white text-left">
            {selectedAnime.movieName}
          </h2>
          <p className="mt-2 text-white text-left">
            {selectedAnime.description}
          </p>
        </div>
      </div>
    </div>
  );
}

//defines the shape of the selectedAnime prop using PropTypes.shape()
//The isRequired method is used to make sure that the movieName, description, and carousel properties are required
Explore.propTypes = {
  selectedAnime: PropTypes.shape({
    movieName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    carousel: PropTypes.string.isRequired,
  }).isRequired,
};

export default Explore;
