type RemoteProps = {
  onRSVPClick: () => void;
  onPowerOff: () => void;
};

const Remote = ({ onRSVPClick, onPowerOff }: RemoteProps) => {
  return (
<div className="relative overflow-hidden h-40 w-72 mt-[10px]">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-700 p-6 rounded-3xl shadow-xl w-64 transition-transform duration-300 hover:-translate-y-2">
    {/* Power Off Button */}
    <button
      onClick={onPowerOff}
      className="absolute top-4 right-5 w-5 h-5 bg-red-600 rounded-full border border-black hover:bg-red-500 transition"
      title="Power Off"
    />

    {/* Buttons Grid */}
    <div className="grid grid-cols-3 grid-rows-5 gap-3 mt-10">
      {Array.from({ length: 15 }).map((_, index) => {
        const isRSVP = index === 1;
        return (
          <button
            key={index}
            onClick={isRSVP ? onRSVPClick : undefined}
            className="w-10 h-6 rounded-sm border border-gray-900 bg-gray-800 hover:bg-gray-700 transition text-xs text-white"
            title={isRSVP ? "RSVP" : undefined}
          >
            {isRSVP ? "RSVP" : ""}
          </button>
        );
      })}
    </div>
  </div>
</div>

  );
};

export default Remote;
