type GameControllerProps = {
  onRSVPClick: () => void;
};

const GameController = ({ onRSVPClick }: GameControllerProps) => {
  return (
    <div className="relative flex flex-col items-center mt-8 w-full max-w-[320px] sm:max-w-sm scale-[0.85] sm:scale-100">
      <div className="w-[2px] h-6 bg-gray-900 rounded-full mb-2 sm:h-10" />
      <div className="w-full aspect-[13/6] bg-gray-700 rounded-xl shadow-inner flex justify-between items-center px-2 py-2 gap-2 transition-transform hover:-translate-y-1">
        <div className="grid grid-cols-3 grid-rows-3 gap-[1px] w-10 h-10 sm:w-14 sm:h-14">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`${
                i === 1 || i === 3 || i === 5 || i === 7
                  ? "bg-black"
                  : "bg-gray-600"
              } w-full h-full rounded`}
            />
          ))}
        </div>

        <button
          onClick={onRSVPClick}
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded-full shadow-md text-xs transition active:scale-95 active:shadow-[0_0_20px_rgba(0,255,0,0.6)]"
        >
          RSVP
        </button>

        <div className="flex flex-col gap-1">
          <div className="w-4 h-4 bg-black rounded-full" />
          <div className="w-4 h-4 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
};
export default GameController;