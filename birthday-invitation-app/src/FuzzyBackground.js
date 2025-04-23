const FuzzyBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="w-full h-full noise animate-fuzz opacity-25"></div>
    </div>
  );
};

export default FuzzyBackground;