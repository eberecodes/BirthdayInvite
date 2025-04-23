import { useEffect, useState } from "react";

type ShutdownScreenProps = {
  rsvp: string;
};

const ShutdownScreen = ({ rsvp }: ShutdownScreenProps) => {
  const [showBar, setShowBar] = useState(true);
  const [showBlack, setShowBlack] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const barTimer = setTimeout(() => {
      setShowBar(false);
      setShowBlack(true);
    }, 1000); // 1s flash

    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 1500);

    return () => {
      clearTimeout(barTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center transition-all duration-1000">
      {showBar && (
        <div className="w-full h-[2px] bg-white animate-shrinkbar" />
      )}

      {showBlack && showMessage && (
        <div className="text-white text-3xl font-bold text-center animate-fadein fira-code">
          {rsvp === "Yes, I'll be there" ? "See you there!" : "You’ll be missed."}
        </div>
      )}
    </div>
  );
};

export default ShutdownScreen;
