import { useState } from "react";
import Header from "./components/Header";
import NewReleaseSection from "./components/NewRelease";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Explore from "./components/Explore";
import data from "./components/data.json";

function App() {
  // State to manage the selected anime
  const [selectedAnime, setSelectedAnime] = useState(data.data[0]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <Explore selectedAnime={selectedAnime} />
        <NewReleaseSection setSelectedAnime={setSelectedAnime} />
      </main>
    </div>
  );
}

export default App;
