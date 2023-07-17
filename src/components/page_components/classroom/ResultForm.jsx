import React, { useRef } from "react";

const ResultForm = ({ item }) => {
  const midRef = useRef(null);
  const thirtyRef = useRef(null);
  const finalRef = useRef(null);

  const submitResult = ({ classCode }) => {
    const mid = midRef.current.value;
    const thirty = thirtyRef.current.value;
    const final = finalRef.current.value;

    if (+mid < 0 || +mid > 30) {
      midRef.current.style.borderColor = "#ef4444";
      return;
    }
    if (+thirty < 0 || +thirty > 30) {
      thirtyRef.current.style.borderColor = "#ef4444";
      return;
    }
    if (+final < 0 || +final > 40) {
      finalRef.current.style.borderColor = "#ef4444";
      return;
    }

    const result = {
      mid: +mid,
      thirty: +thirty,
      final: +final,
      classCode,
      id: item.id,
    };

    console.log(result);
  };

  return (
    <>
      <div>
        <p>{item?.name}</p>
        <p className="text-xs text-gray-500">{item?.id}</p>
      </div>
      <div className="center--y gap-2">
        <input
          ref={midRef}
          className="border w-full h-full px-2 rounded-md outline-none"
          placeholder="Mid"
          type="number"
        />
        <input
          ref={thirtyRef}
          className="border w-full h-full px-2 rounded-md outline-none"
          placeholder="Out of 30"
          type="number"
        />
        <input
          ref={finalRef}
          className="border w-full h-full px-2 rounded-md outline-none"
          placeholder="Final"
          type="number"
        />
      </div>
      <button onClick={submitResult} className="button-primary px-4">
        Submit
      </button>
    </>
  );
};

export default ResultForm;
