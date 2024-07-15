import "./backgroundAnimation.css";

const BackgroundAnimation = () => {
  const bubbles = [
    11, 12, 23, 40, 15, 20, 30, 14, 25, 31, 21, 41, 16, 36, 46, 17, 24, 32, 18,
    33, 19, 41, 27, 37, 47, 28, 48, 29, 39, 50, 11, 12, 23, 40, 15, 20, 30, 14,
    25, 31, 21, 41, 16, 36, 46, 17, 24, 32, 18, 33, 19, 41, 27, 37, 47, 28, 48,
    29, 39, 50, 29, 39, 50, 29, 39, 50, 29, 39, 50, 29, 39, 50, 29, 39, 50, 29,
    39, 50, 29, 39, 50,
  ];

  return (
    <div className="bubbles">
      {bubbles.map((i, index) => (
        <span key={index} style={{ "--i": i }}></span>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
