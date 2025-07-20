import { useEffect, useState } from "react";
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";

const App = () => {
  let heroData = [
    { text1: "dive into", text2: "what you love" },
    { text1: "indulge", text2: "your passions" },
    { text1: "give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const changeHero = () => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
      setTimeout(changeHero, 5000);  // 5 seconds per slide
    };
    changeHero();
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
