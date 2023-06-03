export const Margin = ({ className }) => {
  return <span className={className} style={{ display: "block" }}></span>;
};

export const HorizontalLine = ({ className }) => {
  return <hr className={`block ${className}`} />;
};

export const showResult = ({ board, year, result, examName }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-x-5">
      <span className="block w-2 h-2 rounded-full bg-black"></span>
      <p className="font-semibold center--y gap-5">
        {examName},{board} Board ({year})
      </p>
      <p className="col-start-2 text-gray-500">Result: {result}</p>
    </div>
  );
};

export const iconBox = ({ icon, data }) => {
  return (
    <div className="flex gap-2">
      {icon} <span className="text-gray-500">{data}</span>
    </div>
  );
};
