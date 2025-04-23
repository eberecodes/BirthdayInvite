import React, { useEffect, useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

type Line = {
  text: string;
  className: string;
};

const EventDetails: React.FC = () => {
  const lines: Line[] = [
  { text: "**SYSTEM MESSAGE INCOMING**", className: "text-md sm:text-sm md:text-md lg:text-lg" },
  { text: "EBERE @ 2.4", className: "text-3xl sm:text-5xl md:text-6xl font-bold mb-2" },
  { text: "17.05.2025 3:00PM", className: "text-md sm:text-sm md:text-md lg:text-lg" },
  { text: "104-106 SCRUBS LANE, NW10 6SG", className: "text-md sm:text-sm md:text-md lg:text-lg" },
  { text: "RSVP BY 03.05.2025", className: "text-md sm:text-sm md:text-md lg:text-lg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const typingSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
     typingSoundRef.current = new Audio("typing.mp3");
     typingSoundRef.current.volume = 0.2;
  }, []);

  useEffect(() => {
    if (currentIndex < lines.length && typingSoundRef.current) {
      typingSoundRef.current.currentTime = 0;
      typingSoundRef.current.play().catch((err) => {
        console.warn("Sound play error:", err);
      });

      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 2300);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full text-center text-white fira-code text-outline">
      {lines.map((line, index) => (
        <div key={index} className={`${line.className} min-h-[2rem]`}>
          {index <= currentIndex && (
            <Typewriter
              words={[line.text]}
              typeSpeed={90}
              cursor={index === currentIndex}
              cursorStyle="|"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
