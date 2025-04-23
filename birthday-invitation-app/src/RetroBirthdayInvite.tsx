import React, { useState, useEffect } from "react";
import EventDetails from "./EventDetails";
import GameController from "./GameController";
import RSVP from "./RSVP";
import OrientationHint from "./OrientationHint";

type ViewState = "intro" | "details" | "rsvp";

const RetroBirthdayInvite: React.FC = () => {
  const [view, setView] = useState<ViewState>("intro");

  const handlePlay = () => {
    setView("details");
  };

  const handleRSVPClick = () => {
    if (navigator.vibrate) navigator.vibrate(50);
    setView("rsvp");
  };

  const handlePowerOff = () => {
    setView("intro");
  };



  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <OrientationHint />
      <div className="overflow-hidden relative flex flex-col justify-center w-full max-w-[70vw] aspect-[3/2] sm:w-[800px] bg-green-700 border-[24px] border-gray-700 rounded-xs shadow-inner shadow-black">
        <span className="absolute top-2 right-4 text-green-500 text-xs opacity-60">{new Date().toLocaleTimeString()}</span>
        <div className="absolute inset-0 tv-static opacity-20 pointer-events-none z-0 rounded-2xl bg-[radial-gradient(circle_at_center,_#000_0%,_#0a0a0a_70%,_#000_100%)]" />

        <div className="relative z-10 flex justify-center items-center h-full w-full px-6">
          {view === "intro" && (
            <button
              onClick={handlePlay}
              className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition"
              aria-label="Play"
            >
              <div className="w-0 h-0 border-l-[15px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
            </button>
          )}

          {view === "details" && <EventDetails />}
          {view === "rsvp" && <RSVP />}
        </div>
      </div>

      <div className="w-full max-w-[70vw] h-[60px] sm:w-[800px] bg-gray-800 border-x-[12px] border-b-[12px] border-gray-700 rounded-b-xs flex items-center justify-around gap-4 px-4">
        <button
          onClick={handlePowerOff}
          className="w-5 h-5 bg-red-600 rounded-full hover:bg-red-500 border border-black shadow-inner active:scale-95 active:shadow-[0_0_20px_rgba(0,255,0,0.6)]"
          title="Power Off"
        />
        <button
          onClick={() => setView("details")}
          className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center border-2 border-gray-800 shadow-inner text-white text-sm hover:bg-gray-600 transition active:scale-95 active:shadow-[0_0_20px_rgba(0,255,0,0.6)]"
          title="Rewind to Invitation"
          disabled={view==="intro"}
        >
          ⏪
        </button>
        <button
          onClick={() => setView("rsvp")}
          className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center border-2 border-gray-800 shadow-inner text-white text-sm hover:bg-gray-600 transition active:scale-95 active:shadow-[0_0_20px_rgba(0,255,0,0.6)]"
          title="Fast-forward to RSVP"
          disabled={view==="intro"}
        >
          ⏩
        </button>
      </div>

      <GameController onRSVPClick={handleRSVPClick} />
    </div>
  );
};

export default RetroBirthdayInvite;

