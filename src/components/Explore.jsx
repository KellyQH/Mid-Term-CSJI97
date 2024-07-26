import PropTypes from "prop-types";

function Explore({ selectedAnime }) {
  if (!selectedAnime) {
    return <div className="p-4">Select a movie to see details</div>;
  }

  return (
    <div className="explore-container">
      <h1 className="text-3xl font-bold text-white">Explore</h1>
      <p className="text-gray-400 text-lg">What are you gonna watch today?</p>
      <div
        className="explore-section p-4 bg-cover bg-center rounded-lg mt-4 relative"
        style={{ backgroundImage: `url(${selectedAnime.carousel})` }}
      >
        <div className="bg-black bg-opacity-50 p-4 rounded-lg">
          <h2 className="text-3xl font-bold text-white">
            {selectedAnime.movieName}
          </h2>
          <p className="mt-2 text-white">{selectedAnime.description}</p>
        </div>
      </div>
    </div>
  );
}

Explore.propTypes = {
  selectedAnime: PropTypes.shape({
    movieName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    carousel: PropTypes.string.isRequired,
  }),
};

export default Explore;
