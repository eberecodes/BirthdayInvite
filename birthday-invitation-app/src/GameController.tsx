type GameControllerProps = {
  onRSVPClick: () => void;
};

const GameController = ({ onRSVPClick }: GameControllerProps) => {
  return (
    <div className="relative flex flex-col items-center mt-12 w-full max-w-md sm:max-w-sm">
      <div className="w-[4px] h-8 bg-gray-900 rounded-full mb-2 sm:h-12" />
      <div className="w-full aspect-[13/6] bg-gray-700 rounded-xl shadow-inner flex justify-between items-center px-4 py-3 gap-4 transition-transform hover:-translate-y-1">
        <div className="grid grid-cols-3 grid-rows-3 gap-[2px] w-14 h-14 sm:w-16 sm:h-16">
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
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-md text-sm sm:text-base transition active:scale-95 active:shadow-[0_0_20px_rgba(0,255,0,0.6)]"
        >
          RSVP
        </button>

        <div className="flex flex-col gap-2">
          <div className="w-6 h-6 bg-black rounded-full sm:w-5 sm:h-5" />
          <div className="w-6 h-6 bg-black rounded-full sm:w-5 sm:h-5" />
        </div>
      </div>
    </div>
  );
};
export default GameController;