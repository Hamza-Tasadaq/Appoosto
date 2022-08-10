import { useState, useEffect } from "react";

const useScroll = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCurrentPosition(window.scrollY);
    });
  }, []);

  return [currentPosition];
};

export default useScroll;
