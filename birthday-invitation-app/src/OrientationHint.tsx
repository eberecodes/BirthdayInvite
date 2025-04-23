import React, { useState, useEffect } from "react";

const OrientationHint: React.FC = () => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      setShowHint(isPortrait);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  useEffect(() => {
    if (showHint) {
      const timer = setTimeout(() => {
        setShowHint(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [showHint]);

  if (!showHint) return null;

  return (
    <div
      onClick={() => setShowHint(false)}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-3 rounded-lg text-sm shadow-md z-50 max-w-xs text-center border border-green-500"
    >
      🔄 <span className="ml-1">Rotate your device for the full experience</span>
    </div>
  );
};

export default OrientationHint;
