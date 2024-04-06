import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      const response = await fetch('https://lottie.host/e29263a3-8752-456d-b761-8a5f537f4aef/6Q8CS6SoFS.json');
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimationData();
  }, []);

  const style = {
    width: '200px',
    height: '200px',
    margin: '100px auto',
  };

  return (
    <>
      {animationData && <Lottie animationData={animationData} loop autoplay style={style} />}
    </>
  );
};
