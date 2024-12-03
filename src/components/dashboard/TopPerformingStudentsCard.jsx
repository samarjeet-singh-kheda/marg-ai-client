/* eslint-disable react/prop-types */
import { useState } from "react";

function TopPerformingStudentsCard({ students }) {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="flex w-full flex-col rounded-2xl bg-white p-6 pb-0 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-[#2E3A59]">
        Top Performing Students
      </h2>
      <ul className="mb-4 flex flex-col gap-4">
        {students.slice(0, visibleCount).map((student, idx) => (
          <TopPerformingStudent
            student={student}
            idx={idx}
            key={student.name}
          />
        ))}
      </ul>
      {visibleCount < students.length && (
        <button
          onClick={handleViewMore}
          className="text-sm font-bold text-[#4D44B5]"
        >
          View More
        </button>
      )}
    </div>
  );
}

export default TopPerformingStudentsCard;

function TopPerformingStudent({ student, idx }) {
  let bgClass;
  let nameFontClass;
  let scoreFontClass;
  let medalSrc;

  switch (idx) {
    case 0:
      bgClass = "bg-yellow-400";
      nameFontClass = "text-white";
      scoreFontClass = "text-white";
      medalSrc = "img/medal/gold.svg";
      break;
    case 1:
      bgClass = "bg-gray-300";
      nameFontClass = "text-white";
      scoreFontClass = "text-white";
      medalSrc = "img/medal/silver.svg";
      break;
    case 2:
      bgClass = "bg-amber-600";
      nameFontClass = "text-white";
      scoreFontClass = "text-white";
      medalSrc = "img/medal/bronze.svg";
      break;
    default:
      bgClass = "bg-blue-50";
      nameFontClass = "text-gray-800";
      scoreFontClass = "text-gray-800";
      medalSrc = "";
      break;
  }

  return (
    <li
      key={student.name}
      className={`align-start relative flex flex-col items-start rounded-[1.25rem] px-4 py-2 ${bgClass}`}
    >
      <h3 className={`text-lg font-bold ${nameFontClass}`}>{student.name}</h3>
      <p className={`text-[0.675rem] font-bold uppercase ${scoreFontClass}`}>
        {student.score}/10 points
      </p>

      {medalSrc && (
        <img
          src={medalSrc}
          alt="medal"
          className="absolute right-6 top-0 h-12"
        />
      )}
    </li>
  );
}
